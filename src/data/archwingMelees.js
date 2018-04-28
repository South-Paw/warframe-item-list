const { ARCHWING_MELEE } = require('../constants.js').ITEM_TYPE;
const { LOCATION, QUEST } = require('../constants.js').ACQUISITION;

const { BARO_KITEER, DOJO_CHEM_LAB, MARKET } = LOCATION;
const { THE_ARCHWING } = QUEST;

const archwingMelees = [
  {
    name: 'Agkuza',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Centaur',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Kaszas',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Knux',
    acquisition: DOJO_CHEM_LAB,
    masteryRank: 0,
  },
  {
    name: 'Onorix',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Rathbone',
    acquisition: MARKET,
    masteryRank: 0,
  },
  {
    name: 'Veritux',
    acquisition: THE_ARCHWING,
    masteryRank: 0,
  },
  {
    name: 'Prisma Veritux',
    acquisition: BARO_KITEER,
    masteryRank: 0,
  },
];

module.exports = archwingMelees.map(object => ({ ...object, type: ARCHWING_MELEE }));
