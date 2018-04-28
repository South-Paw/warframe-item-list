const { ARCHWING_GUN } = require('../constants.js').ITEM_TYPE;
const { LOCATION, QUEST, REWARD } = require('../constants.js').ACQUISITION;

const { DOJO_TENNO_LAB, DOJO_CHEM_LAB, MARKET } = LOCATION;
const { THE_ARCHWING } = QUEST;
const { FOMORIAN_SABOTAGE } = REWARD;

const archwingGuns = [
  {
    name: 'Corvas',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Cyngas',
    acquisition: MARKET,
    masteryRank: 4,
  },
  {
    name: 'Dual Decurion',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Fluctus',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Grattler',
    acquisition: DOJO_CHEM_LAB,
    masteryRank: 0,
  },
  {
    name: 'Imperator',
    acquisition: THE_ARCHWING,
    masteryRank: 0,
  },
  {
    name: 'Imperator Vandal',
    acquisition: FOMORIAN_SABOTAGE,
    masteryRank: 0,
  },
  {
    name: 'Phaedra',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Velocitus',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
];

module.exports = archwingGuns.map(object => ({ ...object, type: ARCHWING_GUN }));
