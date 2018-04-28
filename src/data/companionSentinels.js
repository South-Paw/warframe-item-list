const { COMPANION_SENTINEL } = require('../constants.js').ITEM_TYPE;
const { LOCATION, REWARD, VAULTED } = require('../constants.js').ACQUISITION;

const { BARO_KITEER, DOJO_BIO_LAB, DOJO_ENERGY_LAB, MARKET } = LOCATION;
const { RELICS } = REWARD;

const sentinels = [
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
    acquisition: DOJO_BIO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Helios',
    acquisition: DOJO_ENERGY_LAB,
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
    acquisition: VAULTED,
    masteryRank: 0,
  },
];

module.exports = sentinels.map(object => ({ ...object, type: COMPANION_SENTINEL }));
