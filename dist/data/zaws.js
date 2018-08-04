'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ZAW = require('../constants.js').ITEM_TYPE.ZAW;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    LOCATION = _require$ACQUISITION.LOCATION,
    REWARD = _require$ACQUISITION.REWARD;

var HOKS_ANVIL = LOCATION.HOKS_ANVIL;
var OPERATION_PLAGUE_STAR = REWARD.OPERATION_PLAGUE_STAR;


var zaws = [{
  name: 'Balla Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Cyath Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Dehtat Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Dokrahm Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Kronsh Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Mewan Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Ooltha Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Plague Keewar Strike',
  acquisition: OPERATION_PLAGUE_STAR,
  masteryRank: 0
}, {
  name: 'Plague Kripath Strike',
  acquisition: OPERATION_PLAGUE_STAR,
  masteryRank: 0
}, {
  name: 'Rabvee Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}, {
  name: 'Sepfahn Strike',
  acquisition: HOKS_ANVIL,
  masteryRank: 0
}];

module.exports = zaws.map(function (object) {
  return _extends({}, object, { type: ZAW });
});