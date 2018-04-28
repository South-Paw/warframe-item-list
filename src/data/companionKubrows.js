const { COMPANION_KUBROW } = require('../constants.js').ITEM_TYPE;
const { INCUBATOR_SEGMENT } = require('../constants.js').ACQUISITION.LOCATION;

const kubrows = [
  {
    name: 'Huras Kubrow',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
  {
    name: 'Raksa Kubrow',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
  {
    name: 'Sahasa Kubrow',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
  {
    name: 'Sunika Kubrow',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
  {
    name: 'Chesa Kubrow',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
  {
    name: 'Helminth Charger',
    acquisition: INCUBATOR_SEGMENT,
    masteryRank: 0,
  },
];

module.exports = kubrows.map(object => ({ ...object, type: COMPANION_KUBROW }));
