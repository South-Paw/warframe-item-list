'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ARCHWING_GUN = require('../constants.js').ITEM_TYPE.ARCHWING_GUN;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    LOCATION = _require$ACQUISITION.LOCATION,
    QUEST = _require$ACQUISITION.QUEST,
    REWARD = _require$ACQUISITION.REWARD;

var DOJO_TENNO_LAB = LOCATION.DOJO_TENNO_LAB,
    DOJO_CHEM_LAB = LOCATION.DOJO_CHEM_LAB,
    MARKET = LOCATION.MARKET;
var THE_ARCHWING = QUEST.THE_ARCHWING;
var FOMORIAN_SABOTAGE = REWARD.FOMORIAN_SABOTAGE;


var archwingGuns = [{
  name: 'Corvas',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Cyngas',
  acquisition: MARKET,
  masteryRank: 4
}, {
  name: 'Dual Decurion',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Fluctus',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Grattler',
  acquisition: DOJO_CHEM_LAB,
  masteryRank: 0
}, {
  name: 'Imperator',
  acquisition: THE_ARCHWING,
  masteryRank: 0
}, {
  name: 'Imperator Vandal',
  acquisition: FOMORIAN_SABOTAGE,
  masteryRank: 0
}, {
  name: 'Phaedra',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Velocitus',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}];

module.exports = archwingGuns.map(function (object) {
  return _extends({}, object, { type: ARCHWING_GUN });
});