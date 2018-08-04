"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var sortListByInnerKey = function sortListByInnerKey(list, innerKey) {
  var unordered = {};

  // Create unordered object so we can sort on the given innerKey.
  list.forEach(function (object) {
    unordered[object[innerKey]] = _extends({}, object);
  });

  // Sort the keys, map on that list and return an ordered list from the unordered object.
  return Object.keys(unordered).sort().map(function (key) {
    return unordered[key];
  });
};

module.exports = { sortListByInnerKey: sortListByInnerKey };