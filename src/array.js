const { amps } = require('./data/amps.js');
const { archwings } = require('./data/archwings.js');
const { archguns, archmelees } = require('./data/archwingWeapons.js');
const { sentinels, kubrows, kavats } = require('./data/companions.js');
const { sentinelWeapons } = require('./data/sentinelWeapons.js');
const { warframes } = require('./data/warframes.js');
const { primaries, secondaries, melees } = require('./data/weapons.js');
const { zaws } = require('./data/zaws.js');

const constants = require('./constants.js');

const {
  AMP,
  ARCHWING,
  ARCHWING_GUN,
  ARCHWING_MELEE,
  COMPANION_SENTINEL,
  COMPANION_KUBROW,
  COMPANION_KAVAT,
  SENTINEL_WEAPON,
  WARFRAME,
  WEAPON_PRIMARY,
  WEAPON_SECONDARY,
  WEAPON_MELEE,
  ZAW,
} = constants.itemTypes;

function addTypeTo(list, type) {
  const result = [];
  list.forEach((k, i) => {
    const item = list[i];
    item.type = type;
    result.push(item);
  });
  return result;
}

let array = [];
array = array.concat(addTypeTo(amps, AMP));
array = array.concat(addTypeTo(archwings, ARCHWING));
array = array.concat(addTypeTo(archguns, ARCHWING_GUN));
array = array.concat(addTypeTo(archmelees, ARCHWING_MELEE));
array = array.concat(addTypeTo(sentinels, COMPANION_SENTINEL));
array = array.concat(addTypeTo(kubrows, COMPANION_KUBROW));
array = array.concat(addTypeTo(kavats, COMPANION_KAVAT));
array = array.concat(addTypeTo(sentinelWeapons, SENTINEL_WEAPON));
array = array.concat(addTypeTo(warframes, WARFRAME));
array = array.concat(addTypeTo(primaries, WEAPON_PRIMARY));
array = array.concat(addTypeTo(secondaries, WEAPON_SECONDARY));
array = array.concat(addTypeTo(melees, WEAPON_MELEE));
array = array.concat(addTypeTo(zaws, ZAW));

module.exports = {
  array,
};
