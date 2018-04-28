const { ARCHWING } = require('../constants.js').ITEM_TYPE;
const { LOCATION, QUEST, VAULTED } = require('../constants.js').ACQUISITION;

const { DOJO_TENNO_LAB } = LOCATION;
const { THE_ARCHWING } = QUEST;

const archwings = [
  {
    name: 'Amesha',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Elytron',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Itzal',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Odonata',
    acquisition: THE_ARCHWING,
    masteryRank: 0,
  },
  {
    name: 'Odonata Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
];

module.exports = archwings.map(object => ({ ...object, type: ARCHWING }));
