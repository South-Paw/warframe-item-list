'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var AMP = require('../constants.js').ITEM_TYPE.AMP;

var THE_QUILLS = require('../constants.js').ACQUISITION.LOCATION.THE_QUILLS;

var amps = [{
  name: 'Granmu Prism',
  acquisition: THE_QUILLS,
  masteryRank: 0
}, {
  name: 'Mote Prism',
  acquisition: THE_QUILLS,
  masteryRank: 0
}, {
  name: 'Raplak Prism',
  acquisition: THE_QUILLS,
  masteryRank: 0
}, {
  name: 'Shwaak Prism',
  acquisition: THE_QUILLS,
  masteryRank: 0
}];

module.exports = amps.map(function (object) {
  return _extends({}, object, { type: AMP });
});