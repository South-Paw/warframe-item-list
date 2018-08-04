'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var AMPS = require('./data/amps.js');
var ARCHWINGS = require('./data/archwings.js');
var ARCHWING_GUNS = require('./data/archwingGuns.js');
var ARCHWING_MELEES = require('./data/archwingMelees.js');
var COMPANION_KAVATS = require('./data/companionKavats.js');
var COMPANION_KUBROWS = require('./data/companionKubrows.js');
var COMPANION_SENTINELS = require('./data/companionSentinels.js');
var SENTINEL_WEAPONS = require('./data/sentinelWeapons.js');
var WARFRAMES = require('./data/warframes.js');
var WEAPON_PRIMARIES = require('./data/weaponPrimaries.js');
var WEAPON_SECONDARIES = require('./data/weaponSecondaries.js');
var WEAPON_MELEES = require('./data/weaponMelees.js');
var ZAWS = require('./data/zaws.js');

var _require = require('./utils.js'),
    sortListByInnerKey = _require.sortListByInnerKey;

var SORT_KEY = 'name';

var objects = {
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
  ZAWS: sortListByInnerKey(ZAWS, SORT_KEY)
};

module.exports = _extends({}, objects);