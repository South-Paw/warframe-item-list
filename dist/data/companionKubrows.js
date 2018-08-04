'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var COMPANION_KUBROW = require('../constants.js').ITEM_TYPE.COMPANION_KUBROW;

var INCUBATOR_SEGMENT = require('../constants.js').ACQUISITION.LOCATION.INCUBATOR_SEGMENT;

var kubrows = [{
  name: 'Huras Kubrow',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}, {
  name: 'Raksa Kubrow',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}, {
  name: 'Sahasa Kubrow',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}, {
  name: 'Sunika Kubrow',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}, {
  name: 'Chesa Kubrow',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}, {
  name: 'Helminth Charger',
  acquisition: INCUBATOR_SEGMENT,
  masteryRank: 0
}];

module.exports = kubrows.map(function (object) {
  return _extends({}, object, { type: COMPANION_KUBROW });
});