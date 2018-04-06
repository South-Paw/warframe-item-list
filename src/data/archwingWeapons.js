const constants = require('../constants.js');

const {
  BARO_KITEER,
  CHEM_LAB,
  FOMORIAN_SABOTAGE,
  MARKET,
  TENNO_LAB,
} = constants.acquisitions;

const {
  THE_ARCHWING,
} = constants.acquisitionQuests;

module.exports = {
  archguns: [
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
      acquisition: TENNO_LAB,
      masteryRank: 0,
    },
    {
      name: 'Grattler',
      acquisition: CHEM_LAB,
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
      acquisition: TENNO_LAB,
      masteryRank: 0,
    },
  ],
  archmelees: [
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
      acquisition: CHEM_LAB,
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
  ],
};
