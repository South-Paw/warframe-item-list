const { archwings } = require('./data/archwings.js');
const { archgun, archmelee } = require('./data/archwingWeapons.js');
const { sentinels, kubrows, kavats } = require('./data/companions.js');
const { sentinelWeapons } = require('./data/sentinelWeapons.js');
const { warframes } = require('./data/warframes.js');
const { primary, secondary, melee } = require('./data/weapons.js');

const constants = require('./constants.js');

const {
  ARCHWING, ARCHWING_GUN, ARCHWING_MELEE, COMPANION_SENTINEL, COMPANION_KUBROW, COMPANION_KAVAT,
  SENTINEL_WEAPON, WARFRAME, WEAPON_PRIMARY, WEAPON_SECONDARY, WEAPON_MELEE,
} = constants.itemType;

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
array = array.concat(addTypeTo(archwings, ARCHWING));
array = array.concat(addTypeTo(archgun, ARCHWING_GUN));
array = array.concat(addTypeTo(archmelee, ARCHWING_MELEE));
array = array.concat(addTypeTo(sentinels, COMPANION_SENTINEL));
array = array.concat(addTypeTo(kubrows, COMPANION_KUBROW));
array = array.concat(addTypeTo(kavats, COMPANION_KAVAT));
array = array.concat(addTypeTo(sentinelWeapons, SENTINEL_WEAPON));
array = array.concat(addTypeTo(warframes, WARFRAME));
array = array.concat(addTypeTo(primary, WEAPON_PRIMARY));
array = array.concat(addTypeTo(secondary, WEAPON_SECONDARY));
array = array.concat(addTypeTo(melee, WEAPON_MELEE));

module.exports = {
  array,
};
