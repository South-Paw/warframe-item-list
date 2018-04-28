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

const array = [
  ...sortListByInnerKey(AMPS, SORT_KEY),
  ...sortListByInnerKey(ARCHWINGS, SORT_KEY),
  ...sortListByInnerKey(ARCHWING_GUNS, SORT_KEY),
  ...sortListByInnerKey(ARCHWING_MELEES, SORT_KEY),
  ...sortListByInnerKey(COMPANION_KAVATS, SORT_KEY),
  ...sortListByInnerKey(COMPANION_KUBROWS, SORT_KEY),
  ...sortListByInnerKey(COMPANION_SENTINELS, SORT_KEY),
  ...sortListByInnerKey(SENTINEL_WEAPONS, SORT_KEY),
  ...sortListByInnerKey(WARFRAMES, SORT_KEY),
  ...sortListByInnerKey(WEAPON_PRIMARIES, SORT_KEY),
  ...sortListByInnerKey(WEAPON_SECONDARIES, SORT_KEY),
  ...sortListByInnerKey(WEAPON_MELEES, SORT_KEY),
  ...sortListByInnerKey(ZAWS, SORT_KEY),
];

module.exports = [...array];
