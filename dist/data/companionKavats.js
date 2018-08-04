'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var COMPANION_KAVAT = require('../constants.js').ITEM_TYPE.COMPANION_KAVAT;

var INCUBATOR_UPGRADE_KAVAT = require('../constants.js').ACQUISITION.LOCATION.INCUBATOR_UPGRADE_KAVAT;

var kavats = [{
  name: 'Adarza Kavat',
  acquisition: INCUBATOR_UPGRADE_KAVAT,
  masteryRank: 0
}, {
  name: 'Smeeta Kavat',
  acquisition: INCUBATOR_UPGRADE_KAVAT,
  masteryRank: 0
}];

module.exports = kavats.map(function (object) {
  return _extends({}, object, { type: COMPANION_KAVAT });
});