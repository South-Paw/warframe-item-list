'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ARCHWING = require('../constants.js').ITEM_TYPE.ARCHWING;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    LOCATION = _require$ACQUISITION.LOCATION,
    QUEST = _require$ACQUISITION.QUEST,
    VAULTED = _require$ACQUISITION.VAULTED;

var DOJO_TENNO_LAB = LOCATION.DOJO_TENNO_LAB;
var THE_ARCHWING = QUEST.THE_ARCHWING;


var archwings = [{
  name: 'Amesha',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Elytron',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Itzal',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Odonata',
  acquisition: THE_ARCHWING,
  masteryRank: 0
}, {
  name: 'Odonata Prime',
  acquisition: VAULTED,
  masteryRank: 0
}];

module.exports = archwings.map(function (object) {
  return _extends({}, object, { type: ARCHWING });
});