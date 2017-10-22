const { archwings } = require('./data/archwings.js');
const { archgun, archmelee } = require('./data/archwingWeapons.js');
const { sentinels, kubrows, kavats } = require('./data/companions.js');
const { sentinelWeapons } = require('./data/sentinelWeapons.js');
const { warframes } = require('./data/warframes.js');
const { primary, secondary, melee } = require('./data/weapons.js');

const objects = {
  ARCHWING: archwings,
  ARCHWING_GUN: archgun,
  ARCHWING_MELEE: archmelee,
  COMPANION_SENTINEL: sentinels,
  COMPANION_KUBROW: kubrows,
  COMPANION_KAVAT: kavats,
  SENTINEL_WEAPON: sentinelWeapons,
  WARFRAME: warframes,
  WEAPON_PRIMARY: primary,
  WEAPON_SECONDARY: secondary,
  WEAPON_MELEE: melee,
};

module.exports = {
  objects,
};
