'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var array = [].concat(_toConsumableArray(sortListByInnerKey(AMPS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(ARCHWINGS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(ARCHWING_GUNS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(ARCHWING_MELEES, SORT_KEY)), _toConsumableArray(sortListByInnerKey(COMPANION_KAVATS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(COMPANION_KUBROWS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(COMPANION_SENTINELS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(SENTINEL_WEAPONS, SORT_KEY)), _toConsumableArray(sortListByInnerKey(WARFRAMES, SORT_KEY)), _toConsumableArray(sortListByInnerKey(WEAPON_PRIMARIES, SORT_KEY)), _toConsumableArray(sortListByInnerKey(WEAPON_SECONDARIES, SORT_KEY)), _toConsumableArray(sortListByInnerKey(WEAPON_MELEES, SORT_KEY)), _toConsumableArray(sortListByInnerKey(ZAWS, SORT_KEY)));

module.exports = [].concat(_toConsumableArray(array));