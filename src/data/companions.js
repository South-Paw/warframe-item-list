const constants = require('../constants.js');

const {
  MARKET, VAULTED, BIO_LAB, ENERGY_LAB, RELICS, BARO_KITEER, INCUBATOR_SEGMENT,
} = constants.acquisition;

module.exports = {
  sentinels: [
    { name: 'Carrier', acquisition: MARKET },
    { name: 'Carrier Prime', acquisition: VAULTED },
    { name: 'Dethcube', acquisition: MARKET },
    { name: 'Diriga', acquisition: MARKET },
    { name: 'Djinn', acquisition: BIO_LAB },
    { name: 'Helios', acquisition: ENERGY_LAB },
    { name: 'Helios Prime', acquisition: RELICS },
    { name: 'Shade', acquisition: MARKET },
    { name: 'Prisma Shade', acquisition: BARO_KITEER },
    { name: 'Taxon', acquisition: MARKET },
    { name: 'Wyrm', acquisition: MARKET },
    { name: 'Wyrm Prime', acquisition: RELICS },
  ],
  kubrows: [
    { name: 'Huras Kubrow', acquisition: INCUBATOR_SEGMENT },
    { name: 'Raksa Kubrow', acquisition: INCUBATOR_SEGMENT },
    { name: 'Sahasa Kubrow', acquisition: INCUBATOR_SEGMENT },
    { name: 'Sunika Kubrow', acquisition: INCUBATOR_SEGMENT },
    { name: 'Chesa Kubrow', acquisition: INCUBATOR_SEGMENT },
    { name: 'Helminth Charger', acquisition: INCUBATOR_SEGMENT },
  ],
  kavats: [
    { name: 'Adarza Kavat', acquisition: INCUBATOR_SEGMENT },
    { name: 'Smeeta Kavat', acquisition: INCUBATOR_SEGMENT },
  ],
};
