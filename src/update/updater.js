/* eslint-disable global-require, import/no-extraneous-dependencies, import/no-dynamic-require, no-console */

const fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');
const Lua = require('node-lua');

const { MISSING_ITEMS } = require('./data/missingItems');
const { asyncForEach, capitalize, sortListByInnerKey, stringify } = require('../utils');
const {
  AMP,
  ARCHWING,
  ARCHWING_MELEE,
  ARCHWING_PRIMARY,
  KAVAT,
  KUBROW,
  MELEE,
  MISC,
  PRIMARY,
  QUEST,
  SECONDARY,
  SENTINEL,
  SENTINEL_WEAPON,
  UNKNOWN,
  WARFRAME,
  ZAW,
} = require('../constants').TYPE;

const CATEGORISED_TYPES = [
  ARCHWING_MELEE,
  ARCHWING_PRIMARY,
  MELEE,
  PRIMARY,
  SECONDARY,
  SENTINEL_WEAPON,
];

// We replace the - character with 4x ^'s surrounded by spaces and then run capitalize() on the result.
// This ensures that words either side of the '-' are capitalized.
// We then replace the 4x ^'s with a '-' character again.
// And finally replace 'Mk1' with 'MK1'.
const normalizeItemName = name => capitalize(name.replace('<ARCHWING> ', '').replace(/-/g, ' ^^^^ '))
  .replace(/ \^\^\^\^ /g, '-')
  .replace(/Mk1/g, 'MK1');

const getItemType = (item, rawType) => {
  switch (rawType) {
    case 'Weapons':
      if (item.uniqueName.includes('/SentinelWeapons')) return SENTINEL_WEAPON;
      if (item.uniqueName.includes('/Archwing/Primary')) return ARCHWING_PRIMARY;
      if (item.uniqueName.includes('/Archwing/Melee')) return ARCHWING_MELEE;
      if (item.uniqueName.includes('/ModularMeleeInfested/Tips')) return ZAW;
      if (item.uniqueName.includes('/ModularMelee01/Tip')) return ZAW;
      if (item.uniqueName.includes('/ModularMelee02/Tip')) return ZAW;
      if (item.uniqueName.includes('/OperatorAmplifiers/SentTrainingAmplifier')) return AMP;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Barrel')) return AMP;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Barrel')) return AMP;
      if (item.uniqueName.includes('/LotusModularWeapon')) return MISC;
      if (item.slot === 1) return PRIMARY;
      if (item.slot === 0) return SECONDARY;
      if (item.slot === 5) return MELEE;
      // Unwanted / Misc items...
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Grip')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Chassis')) return MISC;
      if (item.uniqueName.includes('/ModularMelee01/Balance')) return MISC;
      if (item.uniqueName.includes('/ModularMelee01/Handle')) return MISC;
      if (item.uniqueName.includes('/ModularMelee02/Handle')) return MISC;
      if (item.uniqueName.includes('/ModularMeleeInfested/Handles')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Grip')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Chassis')) return MISC;
      return UNKNOWN;
    case 'Sentinels':
      if (item.uniqueName.includes('/CatbrowPet')) return KAVAT;
      if (item.uniqueName.includes('/KubrowPet')) return KUBROW;
      return SENTINEL;
    case 'Keys':
      if (item.uniqueName.includes('Quest')) return QUEST;
      // Unwanted / Misc items...
      if (item.uniqueName.includes('/Derelict')) return MISC;
      if (item.uniqueName.includes('/TestKeyErisBoss')) return MISC;
      return UNKNOWN;
    case 'Warframes':
      if (item.uniqueName.includes('/Archwing')) return ARCHWING;
      return WARFRAME;
    default:
      return UNKNOWN;
  }
};

class Updater {
  constructor() {
    this.endpoints = [
      'http://content.warframe.com/MobileExport/Manifest/ExportManifest.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportWeapons.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportSentinels.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportKeys.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportWarframes.json',
    ];

    this.wikiaLua = [
      'http://warframe.wikia.com/wiki/Module:Weapons/data?action=raw',
    ];

    this.filenames = [];

    this.nameToType = new Map();

    this.data = { ...MISSING_ITEMS };
  }

  formatItem(item, rawType) {
    const name = normalizeItemName(item.name);
    const type = getItemType(item, rawType);
    const wikiSlug = name.replace(/ /g, '_').replace(/'/g, '%27');

    let category;

    if (rawType === 'Weapons' && CATEGORISED_TYPES.includes(type)) {
      if (!this.nameToType.get(item.uniqueName)) {
        console.log(`Did not find type for '${name}' (${item.uniqueName})`);
        category = UNKNOWN;
      } else {
        category = this.nameToType.get(item.uniqueName);
      }
    }

    return {
      id: item.uniqueName,
      name,
      type,
      category,
      masteryRank: item.masteryReq || 0,
      image: undefined,
      wiki: `http://warframe.wikia.com/wiki/${wikiSlug}`,
    };
  }

  async fetchItems() {
    await asyncForEach(this.endpoints, async (url) => {
      let name = url.split('/')[url.split('/').length - 1].split('.')[0];

      console.log(`Fetching ${url}`);

      // ExportManifest has a different root key than others.
      if (name === 'ExportManifest') {
        name = name.replace('Export', '');
      }

      let request = null;
      let json = null;

      request = await fetch(url);
      json = await request.text();

      // Remove all new line and returns from the recieved file.
      json = json.replace(/(?:\\[rn]|[\r\n]+)+/g, '');

      // Create the filename for this iteration.
      const filename = name.replace('Export', '');

      // Add all names to the list of filenames, except Manifest as it doesn't contain game items.
      if (name !== 'Manifest') {
        this.filenames.push(filename);
      }

      console.log(`Writing ${filename}.json`);

      try {
        fs.writeFileSync(`${__dirname}/../../cache/json/${filename}.json`, stringify(JSON.parse(json)[name]));
      } catch (e) {
        throw e;
      }

      console.log('');
    });

    await asyncForEach(this.wikiaLua, async (url) => {
      const name = url.split('/')[url.split('/').length - 2].split(':')[1];
      const filename = `${name}Data`;

      console.log(`Fetching ${url}`);

      let request = null;
      let wikilua = null;

      request = await fetch(url);
      wikilua = await request.text();

      const lines = wikilua.split('\n');
      const modifiedLines = lines.slice(0, lines.length - 2).join('\n');

      const lua = new Lua.LuaState();
      lua.DoString(`
        json = (loadfile "src/update/json.lua")()
        ${modifiedLines}
        file = io.open("cache/json/tmp_${filename}.json", "w")
        io.output(file)
        io.write(json.stringify(WeaponData))
        io.close(file)
      `);

      const readFile = util.promisify(fs.readFile);
      const json = await readFile(`${__dirname}/../../cache/json/tmp_${filename}.json`);

      const ignore = JSON.parse(json).IgnoreInCount;
      const unordered = JSON.parse(json).Weapons;
      const ordered = {};

      Object.keys(unordered).sort().forEach((key) => {
        const unorderedInnerKeys = unordered[key];
        const orderedInnerKeys = {};

        Object.keys(unorderedInnerKeys).sort().forEach((innerKey) => {
          orderedInnerKeys[innerKey] = unorderedInnerKeys[innerKey];
        });

        ordered[key] = orderedInnerKeys;
      });

      console.log(`Writing ${filename}.json`);

      try {
        fs.writeFileSync(
          `${__dirname}/../../cache/json/${filename}.json`,
          stringify({ IgnoreInCount: ignore, Weapons: ordered }),
        );
      } catch (e) {
        throw e;
      }

      console.log('Deleting temp file...');
      fs.unlinkSync(`${__dirname}/../../cache/json/tmp_${filename}.json`);

      console.log('');
    });
  }

  async createItemCategoryMap() {
    const weaponData = require(`${__dirname}/../../cache/json/WeaponsData.json`);
    const weapons = require(`${__dirname}/../../cache/json/Weapons.json`);


    Object.keys(weaponData.Weapons).forEach((name) => {
      const weaponDetails = weaponData.Weapons[name];

      for (let i = 0; i < weapons.length; i += 1) {
        if (normalizeItemName(weapons[i].name).includes('Dark Split-Sword') && name.includes('Dark Split-Sword')) {
          this.nameToType.set(weapons[i].uniqueName, 'Hybrid');
          break;
        }

        if (normalizeItemName(weapons[i].name) === name) {
          let weaponClass = weaponDetails.Class;

          if (weapons[i].uniqueName.includes('/Archwing/Primary')) {
            weaponClass = 'Archwing Gun';
          }

          if (weapons[i].uniqueName.includes('/Archwing/Melee')) {
            weaponClass = 'Archwing Melee';
          }

          // TODO: for each weapon class, append it to a list somewhere so it can be exported with
          // other constants (incld hybrid)
          this.nameToType.set(weapons[i].uniqueName, weaponClass);
          break;
        }
      }
    });

    console.log(`Created 'nameToType' map containing ${this.nameToType.size} items`);
    console.log('');
  }

  async organiseItems() {
    let count = 0;

    // For each file that contains game items.
    this.filenames.forEach((rawType) => {
      let json = null;

      try {
        json = require(`${__dirname}/../../cache/json/${rawType}.json`);
      } catch (e) {
        throw e;
      }

      json.forEach((item) => {
        count += 1;
        const formatted = { ...this.formatItem(item, rawType) };

        if (!Object.keys(this.data).includes(formatted.type)) {
          this.data[formatted.type] = [];
        }

        this.data[formatted.type].push(formatted);
      });
    });

    console.log(`Organised ${count} items into types...`);
    Object.keys(this.data).forEach(k => console.log(`  ${this.data[k].length} ${k}`));
    console.log('');
  }

  async sortAndSaveItems() {
    Object.keys(this.data).forEach((type) => {
      let itemList = this.data[type];
      itemList = sortListByInnerKey(itemList, 'name');

      try {
        // We don't want to save a file of Misc as it contains Derelict keys and other stuff.
        if (type !== MISC) {
          console.log(`Writing ${type}.json`);
          fs.writeFileSync(`${__dirname}/../../data/json/${type}.json`, stringify(itemList));
        }
      } catch (e) {
        throw e;
      }
    });
  }

  async run() {
    try {
      console.log('');

      // Get json files from the endpoints.
      await this.fetchItems();

      // Create a map of item ids to categories.
      await this.createItemCategoryMap();

      // Organise and format items into `this.data`.
      await this.organiseItems();

      // Save each type and it's items to `data/json/<type>.json`.
      await this.sortAndSaveItems();

      // TODO: Fetch all images, resize and output files to `data/img/<id>`
      // this.fetchAllImages();
    } catch (e) {
      console.error(e);
    }
  }
}

// Update script entry.
const update = new Updater();
update.run();
