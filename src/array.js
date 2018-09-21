const Amp = require('../data/json/Amp.json');
const Archwing = require('../data/json/Archwing.json');
const ArchwingMelee = require('../data/json/ArchwingMelee.json');
const ArchwingPrimary = require('../data/json/ArchwingPrimary.json');
const Kavat = require('../data/json/Kavat.json');
const Kubrow = require('../data/json/Kubrow.json');
const Melee = require('../data/json/Melee.json');
const Primary = require('../data/json/Primary.json');
const Secondary = require('../data/json/Secondary.json');
const Sentinel = require('../data/json/Sentinel.json');
const SentinelWeapon = require('../data/json/SentinelWeapon.json');
const Warframe = require('../data/json/Warframe.json');
const Zaw = require('../data/json/Zaw.json');

const { sortListByInnerKey } = require('./utils.js');

const SORT_KEY = 'name';

const array = [
  ...sortListByInnerKey(Amp, SORT_KEY),
  ...sortListByInnerKey(Archwing, SORT_KEY),
  ...sortListByInnerKey(ArchwingMelee, SORT_KEY),
  ...sortListByInnerKey(ArchwingPrimary, SORT_KEY),
  ...sortListByInnerKey(Kavat, SORT_KEY),
  ...sortListByInnerKey(Kubrow, SORT_KEY),
  ...sortListByInnerKey(Melee, SORT_KEY),
  ...sortListByInnerKey(Primary, SORT_KEY),
  ...sortListByInnerKey(Secondary, SORT_KEY),
  ...sortListByInnerKey(Sentinel, SORT_KEY),
  ...sortListByInnerKey(SentinelWeapon, SORT_KEY),
  ...sortListByInnerKey(Warframe, SORT_KEY),
  ...sortListByInnerKey(Zaw, SORT_KEY),
];

module.exports = [...array];
