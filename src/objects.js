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
const {
  AMP,
  ARCHWING,
  ARCHWING_MELEE,
  ARCHWING_PRIMARY,
  KAVAT,
  KUBROW,
  MELEE,
  PRIMARY,
  SECONDARY,
  SENTINEL,
  SENTINEL_WEAPON,
  WARFRAME,
  ZAW,
} = require('./constants').TYPE;
const { sortListByInnerKey } = require('./utils.js');

const SORT_KEY = 'name';

const objects = {
  [AMP]: sortListByInnerKey(Amp, SORT_KEY),
  [ARCHWING]: sortListByInnerKey(Archwing, SORT_KEY),
  [ARCHWING_MELEE]: sortListByInnerKey(ArchwingMelee, SORT_KEY),
  [ARCHWING_PRIMARY]: sortListByInnerKey(ArchwingPrimary, SORT_KEY),
  [KAVAT]: sortListByInnerKey(Kavat, SORT_KEY),
  [KUBROW]: sortListByInnerKey(Kubrow, SORT_KEY),
  [MELEE]: sortListByInnerKey(Melee, SORT_KEY),
  [PRIMARY]: sortListByInnerKey(Primary, SORT_KEY),
  [SECONDARY]: sortListByInnerKey(Secondary, SORT_KEY),
  [SENTINEL]: sortListByInnerKey(Sentinel, SORT_KEY),
  [SENTINEL_WEAPON]: sortListByInnerKey(SentinelWeapon, SORT_KEY),
  [WARFRAME]: sortListByInnerKey(Warframe, SORT_KEY),
  [ZAW]: sortListByInnerKey(Zaw, SORT_KEY),
};

module.exports = { ...objects };
