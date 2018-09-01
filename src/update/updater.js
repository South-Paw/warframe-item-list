/* eslint-disable global-require, import/no-extraneous-dependencies, import/no-dynamic-require, no-console */

const fs = require('fs');
const fetch = require('node-fetch');

const { CATEGORIES } = require('./data/categories');
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

    this.filenames = [];

    this.nameToType = new Map();

    this.data = { ...MISSING_ITEMS };
  }

  formatItem(item, rawType) {
    const name = normalizeItemName(item.name);
    const type = getItemType(item, rawType);
    let category;

    if (rawType === 'Weapons' && CATEGORISED_TYPES.includes(type)) {
      if (!this.nameToType.get(item.uniqueName)) {
        console.log(`Did not find type for '${name}' (${item.uniqueName})`);
        category = UNKNOWN;
      } else {
        category = this.nameToType.get(item.uniqueName);
      }
    }

    const wikiSlug = name.replace(/ /g, '_').replace(/'/g, '%27');

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

      console.log(`Fetching ${name}.json`);

      if (name === 'ExportManifest') {
        name = name.replace('Export', '');
      }

      let request = null;
      let json = null;

      request = await fetch(url);
      json = await request.text();

      json = json.replace(/(?:\\[rn]|[\r\n]+)+/g, '');

      const filename = name.replace('Export', '');

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
  }

  async createItemCategoryMap() {
    const rawWeapons = require(`${__dirname}/../../cache/json/Weapons.json`);

    for (let i = 0; i < Object.keys(CATEGORIES).length; i += 1) {
      const thisCategoryKey = Object.keys(CATEGORIES)[i];
      const thisCategory = CATEGORIES[thisCategoryKey];

      for (let j = 0; j < Object.keys(thisCategory).length; j += 1) {
        const thisTypeKey = Object.keys(thisCategory)[j];
        const thisType = thisCategory[thisTypeKey];

        thisType.forEach((name) => {
          let uniqueName = null;

          rawWeapons.forEach((weapon) => {
            if (normalizeItemName(weapon.name) === name) {
              // eslint-disable-next-line prefer-destructuring
              uniqueName = weapon.uniqueName;
            }
          });

          if (!uniqueName) {
            console.log(`Did not get uniqueName for '${name}'`);
          } else {
            this.nameToType.set(uniqueName, thisTypeKey);
          }
        });
      }
    }

    console.log(`Created 'nameToType' map containing ${this.nameToType.size} items`);
    console.log('');
  }

  async organiseItems() {
    let count = 0;

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

    Object.keys(this.data).forEach((type) => {
      let itemList = this.data[type];
      itemList = sortListByInnerKey(itemList, 'name');

      try {
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
      await this.fetchItems();
      await this.createItemCategoryMap();
      await this.organiseItems();
      // this.fetchAllImages();
    } catch (e) {
      console.error(e);
    }
  }
}

const update = new Updater();
update.run();
