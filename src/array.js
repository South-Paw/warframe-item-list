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
} = constants.itemGroups;

function addGroupsTo(list, group) {
  const result = [];
  list.forEach((k, i) => {
    const item = list[i];
    item.group = group;
    result.push(item);
  });
  return result;
}

let array = [];
array = array.concat(addGroupsTo(archwings, ARCHWING));
array = array.concat(addGroupsTo(archgun, ARCHWING_GUN));
array = array.concat(addGroupsTo(archmelee, ARCHWING_MELEE));
array = array.concat(addGroupsTo(sentinels, COMPANION_SENTINEL));
array = array.concat(addGroupsTo(kubrows, COMPANION_KUBROW));
array = array.concat(addGroupsTo(kavats, COMPANION_KAVAT));
array = array.concat(addGroupsTo(sentinelWeapons, SENTINEL_WEAPON));
array = array.concat(addGroupsTo(warframes, WARFRAME));
array = array.concat(addGroupsTo(primary, WEAPON_PRIMARY));
array = array.concat(addGroupsTo(secondary, WEAPON_SECONDARY));
array = array.concat(addGroupsTo(melee, WEAPON_MELEE));

module.exports = {
  array,
};
