const constants = require('../constants.js');

const { TENNO_LAB, VAULTED } = constants.acquisition;

const { THE_ARCHWING } = constants.acquisitionQuests;

module.exports = {
  archwings: [
    { name: 'Amesha', acquisition: TENNO_LAB },
    { name: 'Elytron', acquisition: TENNO_LAB },
    { name: 'Itzal', acquisition: TENNO_LAB },
    { name: 'Odonata', acquisition: THE_ARCHWING },
    { name: 'Odonata Prime', acquisition: VAULTED },
  ],
};
