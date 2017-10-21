const { archwings } = require('./data/archwings.js');
const { archgun, archmelee } = require('./data/archwingWeapons.js');
const { sentinels, kubrows, kavats } = require('./data/companions.js');
const { sentinelWeapons } = require('./data/sentinelWeapons.js');
const { warframes } = require('./data/warframes.js');
const { primary, secondary, melee } = require('./data/weapons.js');

const objects = {
  archwings,
  archgun,
  archmelee,
  sentinels,
  kubrows,
  kavats,
  sentinelWeapons,
  warframes,
  primary,
  secondary,
  melee,
};

module.exports = {
  objects,
};
