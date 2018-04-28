const { SENTINEL_WEAPON } = require('../constants.js').ITEM_TYPE;
const { RIFLE, SHOTGUN, SNIPER } = require('../constants.js').PRIMARY_CATEGORIES;
const { SINGLE_PISTOL } = require('../constants.js').SECONDARY_CATEGORIES;
const { THROWN_MELEE } = require('../constants.js').MELEE_CATEGORIES;

const sentinelWeapons = [
  {
    name: 'Artax',
    acquisition: 'Taxon Sentinel',
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Burst Laser',
    acquisition: 'Shade Sentinel',
    category: SINGLE_PISTOL,
    masteryRank: 0,
  },
  {
    name: 'Prisma Burst Laser',
    acquisition: 'Prisma Shade Sentinel',
    category: SINGLE_PISTOL,
    masteryRank: 0,
  },
  {
    name: 'Deconstructor',
    acquisition: 'Helios Sentinel',
    category: THROWN_MELEE,
    masteryRank: 0,
  },
  {
    name: 'Deconstructor Prime',
    acquisition: 'Helios Prime Sentinel',
    category: THROWN_MELEE,
    masteryRank: 8,
  },
  {
    name: 'Deth Machine Rifle',
    acquisition: 'Dethcube Sentinel',
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Laser Rifle',
    acquisition: 'Wyrm Sentinel',
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Prime Laser Rifle',
    acquisition: 'Wyrm Prime Sentinel',
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Stinger',
    acquisition: 'Djinn Sentinel',
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Sweeper',
    acquisition: 'Carrier Sentinel',
    category: SHOTGUN,
    masteryRank: 0,
  },
  {
    name: 'Sweeper Prime',
    acquisition: 'Carrier Prime Sentinel',
    category: SHOTGUN,
    masteryRank: 0,
  },
  {
    name: 'Vulklok',
    acquisition: 'Diriga Sentinel',
    category: SNIPER,
    masteryRank: 0,
  },
];

module.exports = sentinelWeapons.map(object => ({ ...object, type: SENTINEL_WEAPON }));
