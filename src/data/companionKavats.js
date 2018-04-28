const { COMPANION_KAVAT } = require('../constants.js').ITEM_TYPE;
const { INCUBATOR_UPGRADE_KAVAT } = require('../constants.js').ACQUISITION.LOCATION;

const kavats = [
  {
    name: 'Adarza Kavat',
    acquisition: INCUBATOR_UPGRADE_KAVAT,
    masteryRank: 0,
  },
  {
    name: 'Smeeta Kavat',
    acquisition: INCUBATOR_UPGRADE_KAVAT,
    masteryRank: 0,
  },
];

module.exports = kavats.map(object => ({ ...object, type: COMPANION_KAVAT }));
