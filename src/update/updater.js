// http request files
// output to raw json file in data folder

// parse raw json file
// format objects
// save formatted json to src/data folder

// parse manifest
// download images
// save to dist/images/[name]/

/* eslint-disable global-require, import/no-extraneous-dependencies, import/no-dynamic-require, no-console */

const fs = require('fs');
const fetch = require('node-fetch');

const { missing, supplementary } = require('./supplementary');
const { asyncForEach, capitalize, sortListByInnerKey, stringify } = require('../utils');

const MISC = 'Misc';

const getSupplementaryObject = (type, uniqueName) => {
  if (supplementary[type] && Object.keys(supplementary[type]).length > 0 && supplementary[type][uniqueName]) {
    return supplementary[type][uniqueName];
  }

  return null;
};

const addId = item => item.uniqueName;

const addName = item => capitalize(item.name.replace('<ARCHWING> ', ''));

const addType = (item, rawType) => {
  switch (rawType) {
    case 'Weapons':
      if (item.uniqueName.includes('/SentinelWeapons')) return 'SentinelWeapon';
      if (item.uniqueName.includes('/Archwing/Primary')) return 'ArchwingPrimary';
      if (item.uniqueName.includes('/Archwing/Melee')) return 'ArchwingMelee';
      if (item.uniqueName.includes('/ModularMeleeInfested/Tips')) return 'Zaw';
      if (item.uniqueName.includes('/ModularMelee01/Tip')) return 'Zaw';
      if (item.uniqueName.includes('/ModularMelee02/Tip')) return 'Zaw';
      if (item.uniqueName.includes('/OperatorAmplifiers/SentTrainingAmplifier')) return 'Amp';
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Barrel')) return 'Amp';
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Barrel')) return 'Amp';
      if (item.slot === 1) return 'Primary';
      if (item.slot === 0) return 'Secondary';
      if (item.slot === 5) return 'Melee';
      // Unwanted / Misc items...
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Grip')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Chassis')) return MISC;
      if (item.uniqueName.includes('/ModularMelee01/Balance')) return MISC;
      if (item.uniqueName.includes('/ModularMelee01/Handle')) return MISC;
      if (item.uniqueName.includes('/ModularMelee02/Handle')) return MISC;
      if (item.uniqueName.includes('/ModularMeleeInfested/Handles')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Grip')) return MISC;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Chassis')) return MISC;
      return 'Unknown';
    case 'Sentinels':
      if (item.uniqueName.includes('/CatbrowPet')) return 'Kavat';
      if (item.uniqueName.includes('/KubrowPet')) return 'Kubrow';
      return 'Sentinel';
    case 'Keys':
      // unsure if we want quests or not...
      if (item.uniqueName.includes('Quest')) return MISC; // 'Quest';
      // Unwanted / Misc items...
      if (item.uniqueName.includes('/Derelict')) return MISC;
      if (item.uniqueName.includes('/TestKeyErisBoss')) return MISC;
      return 'Unknown';
    case 'Warframes':
      if (item.uniqueName.includes('/Archwing')) return 'Archwing';
      return 'Warframe';
    default:
      return 'Unknown';
  }
};

const addCategory = (item, rawType, type) => {
  if (rawType === 'Weapons') {
    const supplement = getSupplementaryObject(type, item.uniqueName);

    if (supplement && supplement.category) {
      return supplement.category;
    }
  }

  return undefined;
};

const addMastery = (item) => {
  if (item.masteryReq) {
    return item.masteryReq;
  }

  return 0;
};

const addImage = () => undefined;

const addWiki = (item) => {
  const slug = capitalize(item.name.replace('<ARCHWING> ', '')).replace(/ /g, '_');

  return `http://warframe.wikia.com/wiki/${slug}`;
};

const formatItem = (item, rawType) => {
  const type = addType(item, rawType);

  return {
    id: addId(item),
    name: addName(item),
    type,
    category: addCategory(item, rawType, type),
    masteryRank: addMastery(item, type),
    image: addImage(item),
    wiki: addWiki(item),
  };
};

class Updater {
  constructor() {
    this.endpoints = [
      'http://content.warframe.com/MobileExport/Manifest/ExportManifest.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportWeapons.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportSentinels.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportKeys.json',
      'http://content.warframe.com/MobileExport/Manifest/ExportWarframes.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportUpgrades.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportResources.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportDrones.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportCustoms.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportFlavour.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportGear.json',
      // 'http://content.warframe.com/MobileExport/Manifest/ExportRelicArcane.json',
    ];

    this.filenames = [];

    this.data = { ...missing };
  }

  async fetchRawFiles() {
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
    });
  }

  async formatRawDataToFiles() {
    let count = 0;

    this.filenames.forEach((type) => {
      let json = null;

      try {
        json = require(`${__dirname}/../../cache/json/${type}.json`);
      } catch (e) {
        throw e;
      }

      json.forEach((item) => {
        count += 1;
        const formatted = formatItem(item, type);

        if (!Object.keys(this.data).includes(formatted.type)) {
          this.data[formatted.type] = [];
        }

        this.data[formatted.type].push(formatted);
      });
    });

    console.log(`Organised ${count} items into types...`);
    Object.keys(this.data).forEach(k => console.log(`${this.data[k].length} ${k}`));

    Object.keys(this.data).forEach((type) => {
      let itemList = this.data[type];
      itemList = sortListByInnerKey(itemList, 'name');

      try {
        console.log(`Writing ${type}.json`);
        fs.writeFileSync(`${__dirname}/../../data/json/${type}.json`, stringify(itemList));
      } catch (e) {
        throw e;
      }
    });
  }

  async run() {
    try {
      await this.fetchRawFiles();
      await this.formatRawDataToFiles();
      // this.fetchAllImages();
    } catch (e) {
      console.error(e);
    }
  }
}

const update = new Updater();
update.run();
