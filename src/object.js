const { amps } = require('./data/amps.js');
const { archwings } = require('./data/archwings.js');
const { archguns, archmelees } = require('./data/archwingWeapons.js');
const { sentinels, kubrows, kavats } = require('./data/companions.js');
const { sentinelWeapons } = require('./data/sentinelWeapons.js');
const { warframes } = require('./data/warframes.js');
const { primaries, secondaries, melees } = require('./data/weapons.js');
const { zaws } = require('./data/zaws.js');

const objects = {
  AMPS: amps,
  ARCHWINGS: archwings,
  ARCHWING_GUNS: archguns,
  ARCHWING_MELEES: archmelees,
  COMPANION_SENTINELS: sentinels,
  COMPANION_KUBROWS: kubrows,
  COMPANION_KAVATS: kavats,
  SENTINEL_WEAPONS: sentinelWeapons,
  WARFRAMES: warframes,
  WEAPON_PRIMARIES: primaries,
  WEAPON_SECONDARIES: secondaries,
  WEAPON_MELEES: melees,
  ZAWS: zaws,

  // DEPRECATED
  // Keeping singular names to avoid breaking applications
  AMP: amps,
  ARCHWING: archwings,
  ARCHWING_GUN: archguns,
  ARCHWING_MELEE: archmelees,
  COMPANION_SENTINEL: sentinels,
  COMPANION_KUBROW: kubrows,
  COMPANION_KAVAT: kavats,
  SENTINEL_WEAPON: sentinelWeapons,
  WARFRAME: warframes,
  WEAPON_PRIMARY: primaries,
  WEAPON_SECONDARY: secondaries,
  WEAPON_MELEE: melees,
  ZAW: zaws,
};

module.exports = {
  objects,
};
