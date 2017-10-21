const constants = require('../constants.js');

const {
  MARKET, TENNO_LAB, CHEM_LAB, FOMORIAN_SABOTAGE, BARO_KITEER,
} = constants.acquisition;

const { THE_ARCHWING } = constants.acquisitionQuests;

module.exports = {
  archgun: [
    { name: 'Corvas', acquisition: MARKET },
    { name: 'Cyngas', acquisition: MARKET, masteryRank: 4 },
    { name: 'Dual Decurion', acquisition: MARKET },
    { name: 'Fluctus', acquisition: TENNO_LAB },
    { name: 'Grattler', acquisition: CHEM_LAB },
    { name: 'Imperator', acquisition: THE_ARCHWING },
    { name: 'Imperator Vandal', acquisition: FOMORIAN_SABOTAGE },
    { name: 'Phaedra', acquisition: MARKET },
    { name: 'Velocitus', acquisition: TENNO_LAB },
  ],
  archmelee: [
    { name: 'Agkuza', acquisition: MARKET },
    { name: 'Centaur', acquisition: MARKET },
    { name: 'Kaszas', acquisition: MARKET },
    { name: 'Knux', acquisition: CHEM_LAB },
    { name: 'Onorix', acquisition: MARKET },
    { name: 'Rathbone', acquisition: MARKET },
    { name: 'Veritux', acquisition: THE_ARCHWING },
    { name: 'Prisma Veritux', acquisition: BARO_KITEER },
  ],
};
