const constants = require('../constants.js');

const {
  TENNO_LAB,
  VAULTED,
} = constants.acquisition;

const {
  THE_ARCHWING,
} = constants.acquisitionQuests;

module.exports = {
  archwings: [
    {
      name: 'Amesha',
      acquisition: TENNO_LAB,
      masteryRank: 0,
    },
    {
      name: 'Elytron',
      acquisition: TENNO_LAB,
      masteryRank: 0,
    },
    {
      name: 'Itzal',
      acquisition: TENNO_LAB,
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
  ],
};
