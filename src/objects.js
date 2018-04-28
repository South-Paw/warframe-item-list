const AMPS = require('./data/amps.js');
const ARCHWINGS = require('./data/archwings.js');
const ARCHWING_GUNS = require('./data/archwingGuns.js');
const ARCHWING_MELEES = require('./data/archwingMelees.js');
const COMPANION_KAVATS = require('./data/companionKavats.js');
const COMPANION_KUBROWS = require('./data/companionKubrows.js');
const COMPANION_SENTINELS = require('./data/companionSentinels.js');
const SENTINEL_WEAPONS = require('./data/sentinelWeapons.js');
const WARFRAMES = require('./data/warframes.js');
const WEAPON_PRIMARIES = require('./data/weaponPrimaries.js');
const WEAPON_SECONDARIES = require('./data/weaponSecondaries.js');
const WEAPON_MELEES = require('./data/weaponMelees.js');
const ZAWS = require('./data/zaws.js');
const { sortListByInnerKey } = require('./utils.js');

const SORT_KEY = 'name';

const objects = {
  AMPS: sortListByInnerKey(AMPS, SORT_KEY),
  ARCHWINGS: sortListByInnerKey(ARCHWINGS, SORT_KEY),
  ARCHWING_GUNS: sortListByInnerKey(ARCHWING_GUNS, SORT_KEY),
  ARCHWING_MELEES: sortListByInnerKey(ARCHWING_MELEES, SORT_KEY),
  COMPANION_KAVATS: sortListByInnerKey(COMPANION_KAVATS, SORT_KEY),
  COMPANION_KUBROWS: sortListByInnerKey(COMPANION_KUBROWS, SORT_KEY),
  COMPANION_SENTINELS: sortListByInnerKey(COMPANION_SENTINELS, SORT_KEY),
  SENTINEL_WEAPONS: sortListByInnerKey(SENTINEL_WEAPONS, SORT_KEY),
  WARFRAMES: sortListByInnerKey(WARFRAMES, SORT_KEY),
  WEAPON_PRIMARIES: sortListByInnerKey(WEAPON_PRIMARIES, SORT_KEY),
  WEAPON_SECONDARIES: sortListByInnerKey(WEAPON_SECONDARIES, SORT_KEY),
  WEAPON_MELEES: sortListByInnerKey(WEAPON_MELEES, SORT_KEY),
  ZAWS: sortListByInnerKey(ZAWS, SORT_KEY),
};

module.exports = { ...objects };
