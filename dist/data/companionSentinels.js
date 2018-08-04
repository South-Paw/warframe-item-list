'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var COMPANION_SENTINEL = require('../constants.js').ITEM_TYPE.COMPANION_SENTINEL;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    LOCATION = _require$ACQUISITION.LOCATION,
    REWARD = _require$ACQUISITION.REWARD,
    VAULTED = _require$ACQUISITION.VAULTED;

var BARO_KITEER = LOCATION.BARO_KITEER,
    DOJO_BIO_LAB = LOCATION.DOJO_BIO_LAB,
    DOJO_ENERGY_LAB = LOCATION.DOJO_ENERGY_LAB,
    MARKET = LOCATION.MARKET;
var RELICS = REWARD.RELICS;


var sentinels = [{
  name: 'Carrier',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Carrier Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Dethcube',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Diriga',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Djinn',
  acquisition: DOJO_BIO_LAB,
  masteryRank: 0
}, {
  name: 'Helios',
  acquisition: DOJO_ENERGY_LAB,
  masteryRank: 0
}, {
  name: 'Helios Prime',
  acquisition: RELICS,
  masteryRank: 8
}, {
  name: 'Shade',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Prisma Shade',
  acquisition: BARO_KITEER,
  masteryRank: 0
}, {
  name: 'Taxon',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Wyrm',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Wyrm Prime',
  acquisition: VAULTED,
  masteryRank: 0
}];

module.exports = sentinels.map(function (object) {
  return _extends({}, object, { type: COMPANION_SENTINEL });
});