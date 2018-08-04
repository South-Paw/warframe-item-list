'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SENTINEL_WEAPON = require('../constants.js').ITEM_TYPE.SENTINEL_WEAPON;

var _require$PRIMARY_CATE = require('../constants.js').PRIMARY_CATEGORIES,
    RIFLE = _require$PRIMARY_CATE.RIFLE,
    SHOTGUN = _require$PRIMARY_CATE.SHOTGUN,
    SNIPER = _require$PRIMARY_CATE.SNIPER;

var SINGLE_PISTOL = require('../constants.js').SECONDARY_CATEGORIES.SINGLE_PISTOL;

var THROWN_MELEE = require('../constants.js').MELEE_CATEGORIES.THROWN_MELEE;

var sentinelWeapons = [{
  name: 'Artax',
  acquisition: 'Taxon Sentinel',
  category: RIFLE,
  masteryRank: 0
}, {
  name: 'Burst Laser',
  acquisition: 'Shade Sentinel',
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Prisma Burst Laser',
  acquisition: 'Prisma Shade Sentinel',
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Deconstructor',
  acquisition: 'Helios Sentinel',
  category: THROWN_MELEE,
  masteryRank: 0
}, {
  name: 'Deconstructor Prime',
  acquisition: 'Helios Prime Sentinel',
  category: THROWN_MELEE,
  masteryRank: 8
}, {
  name: 'Deth Machine Rifle',
  acquisition: 'Dethcube Sentinel',
  category: RIFLE,
  masteryRank: 0
}, {
  name: 'Laser Rifle',
  acquisition: 'Wyrm Sentinel',
  category: RIFLE,
  masteryRank: 0
}, {
  name: 'Prime Laser Rifle',
  acquisition: 'Wyrm Prime Sentinel',
  category: RIFLE,
  masteryRank: 0
}, {
  name: 'Stinger',
  acquisition: 'Djinn Sentinel',
  category: RIFLE,
  masteryRank: 0
}, {
  name: 'Sweeper',
  acquisition: 'Carrier Sentinel',
  category: SHOTGUN,
  masteryRank: 0
}, {
  name: 'Sweeper Prime',
  acquisition: 'Carrier Prime Sentinel',
  category: SHOTGUN,
  masteryRank: 0
}, {
  name: 'Vulklok',
  acquisition: 'Diriga Sentinel',
  category: SNIPER,
  masteryRank: 0
}];

module.exports = sentinelWeapons.map(function (object) {
  return _extends({}, object, { type: SENTINEL_WEAPON });
});