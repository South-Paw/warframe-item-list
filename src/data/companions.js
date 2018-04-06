const constants = require('../constants.js');

const {
  BARO_KITEER,
  BIO_LAB,
  ENERGY_LAB,
  INCUBATOR_SEGMENT,
  MARKET,
  RELICS,
  VAULTED,
} = constants.acquisitions;

module.exports = {
  sentinels: [
    {
      name: 'Carrier',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Carrier Prime',
      acquisition: VAULTED,
      masteryRank: 0,
    },
    {
      name: 'Dethcube',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Diriga',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Djinn',
      acquisition: BIO_LAB,
      masteryRank: 0,
    },
    {
      name: 'Helios',
      acquisition: ENERGY_LAB,
      masteryRank: 0,
    },
    {
      name: 'Helios Prime',
      acquisition: RELICS,
      masteryRank: 8,
    },
    {
      name: 'Shade',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Prisma Shade',
      acquisition: BARO_KITEER,
      masteryRank: 0,
    },
    {
      name: 'Taxon',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Wyrm',
      acquisition: MARKET,
      masteryRank: 0,
    },
    {
      name: 'Wyrm Prime',
      acquisition: RELICS,
      masteryRank: 0,
    },
  ],
  kubrows: [
    {
      name: 'Huras Kubrow',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Raksa Kubrow',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Sahasa Kubrow',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Sunika Kubrow',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Chesa Kubrow',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Helminth Charger',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
  ],
  kavats: [
    {
      name: 'Adarza Kavat',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
    {
      name: 'Smeeta Kavat',
      acquisition: INCUBATOR_SEGMENT,
      masteryRank: 0,
    },
  ],
};
