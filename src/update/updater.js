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

const { asyncForEach, capitalize, stringify } = require('../utils');

const addId = (item) => {
  return item.uniqueName;
};

const addName = (item) => {
  return capitalize(item.name.replace('<ARCHWING> ', ''));
};

const addType = (item, type) => {
  switch (type) {
    case 'Weapons':
      if (item.slot === 1) return 'Primary';
      if (item.slot === 0) return 'Secondary';
      if (item.slot === 5) return 'Melee';
      if (item.uniqueName.includes('/ModularMeleeInfested/Tips')) return 'Zaw';
      if (item.uniqueName.includes('/ModularMelee01/Tip')) return 'Zaw';
      if (item.uniqueName.includes('/ModularMelee02/Tip')) return 'Zaw';
      if (item.uniqueName.includes('/OperatorAmplifiers/SentTrainingAmplifier')) return 'Amp';
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Barrel')) return 'Amp';
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Barrel')) return 'Amp';
      return 'Unknown';
    case 'Sentinels':
      if (item.uniqueName.includes('/CatbrowPet')) return 'Kavat';
      if (item.uniqueName.includes('/KubrowPet')) return 'Kubrow';
      return 'Sentinel';
    case 'Keys':
      if (item.uniqueName.includes('Quest')) return 'Quest';
      return 'Unknown';
    case 'Warframes':
      if (item.uniqueName.includes('/Archwing')) return 'Archwing';
      return 'Warframe';
    default:
      return 'Unknown';
  }
};

const addCategory = (item) => {

};

const addMastery = (item) => {
  return item.masteryReq;
};

const addImage = (item) => {

};

const addWiki = (item) => {
  return `http://warframe.wikia.com/wiki/${capitalize(item.name).replace(' ', '_')}`;
};

const addCanDelete = (item, type) => {
  switch (type) {
    case 'Weapons':
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Grip')) return true;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set1/Chassis')) return true;
      if (item.uniqueName.includes('/ModularMelee01/Balance')) return true;
      if (item.uniqueName.includes('/ModularMelee01/Handle')) return true;
      if (item.uniqueName.includes('/ModularMelee02/Handle')) return true;
      if (item.uniqueName.includes('/ModularMeleeInfested/Handles')) return true;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Grip')) return true;
      if (item.uniqueName.includes('/OperatorAmplifiers/Set2/Chassis')) return true;
      return false;
    case 'Keys':
      if (item.uniqueName.includes('/Derelict')) return true;
      if (item.uniqueName.includes('/TestKeyErisBoss')) return true;
      return false;
    default:
      return false;
  }
};

const formatItem = (item, type) => ({
  id: addId(item),
  name: addName(item),
  type: addType(item, type),
  category: addCategory(item, type),
  masteryRank: addMastery(item),
  image: addImage(item),
  wiki: addWiki(item),
  canDelete: addCanDelete(item, type),
});

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
    this.data = [];
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
        // check if file is new before writting...?

        fs.writeFileSync(`${__dirname}/../../cache/json/${filename}.json`, stringify(JSON.parse(json)[name]));
      } catch (e) {
        throw e;
      }
    });
  }

  async formatRawDataToFiles() {
    this.filenames.forEach((type) => {
      let json = null;

      try {
        json = require(`${__dirname}/../../cache/json/${type}.json`);
      } catch (e) {
        throw e;
      }

      json.forEach(item => this.data.push(formatItem(item, type)));
    });

    for (let i = 0; i < this.data.length - 1; i += 1) {
      const item = this.data[i];

      if (item.canDelete) {
        delete this.data[i];
      }
    }

    let total = 0;
    let quest = 0;
    let unknown = 0;

    this.data.forEach(item => {
      if (item.type === 'Unknown') {
        unknown += 1;
      } else if (item.type === 'Quest') {
        quest += 1;
      } else {
        total += 1;
      }
    });

    console.log('unknown', unknown);
    console.log('quest', quest);
    console.log('total', total);
  }

  async run() {
    try {
      await this.fetchRawFiles();
      await this.formatRawDataToFiles();
    } catch (e) {
      console.error(e);
    }

    // this.format();
    // this.getImages();
  }
}

const update = new Updater();
update.run();
