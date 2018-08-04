'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ARCHWING_MELEE = require('../constants.js').ITEM_TYPE.ARCHWING_MELEE;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    LOCATION = _require$ACQUISITION.LOCATION,
    QUEST = _require$ACQUISITION.QUEST;

var BARO_KITEER = LOCATION.BARO_KITEER,
    DOJO_CHEM_LAB = LOCATION.DOJO_CHEM_LAB,
    MARKET = LOCATION.MARKET;
var THE_ARCHWING = QUEST.THE_ARCHWING;


var archwingMelees = [{
  name: 'Agkuza',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Centaur',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Kaszas',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Knux',
  acquisition: DOJO_CHEM_LAB,
  masteryRank: 0
}, {
  name: 'Onorix',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Rathbone',
  acquisition: MARKET,
  masteryRank: 0
}, {
  name: 'Veritux',
  acquisition: THE_ARCHWING,
  masteryRank: 0
}, {
  name: 'Prisma Veritux',
  acquisition: BARO_KITEER,
  masteryRank: 0
}];

module.exports = archwingMelees.map(function (object) {
  return _extends({}, object, { type: ARCHWING_MELEE });
});