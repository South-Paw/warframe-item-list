const { ZAW } = require('../constants.js').ITEM_TYPE;
const { LOCATION, REWARD } = require('../constants.js').ACQUISITION;

const { HOKS_ANVIL } = LOCATION;
const { OPERATION_PLAGUE_STAR } = REWARD;

const zaws = [
  {
    name: 'Balla Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Cyath Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Dehtat Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Dokrahm Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Kronsh Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Mewan Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Ooltha Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Plague Keewar Strike',
    acquisition: OPERATION_PLAGUE_STAR,
    masteryRank: 0,
  },
  {
    name: 'Plague Kripath Strike',
    acquisition: OPERATION_PLAGUE_STAR,
    masteryRank: 0,
  },
  {
    name: 'Rabvee Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
  {
    name: 'Sepfahn Strike',
    acquisition: HOKS_ANVIL,
    masteryRank: 0,
  },
];

module.exports = zaws.map(object => ({ ...object, type: ZAW }));
