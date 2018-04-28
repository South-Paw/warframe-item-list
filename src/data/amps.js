const { AMP } = require('../constants.js').ITEM_TYPE;
const { THE_QUILLS } = require('../constants.js').ACQUISITION.LOCATION;

const amps = [
  {
    name: 'Granmu Prism',
    acquisition: THE_QUILLS,
    masteryRank: 0,
  },
  {
    name: 'Mote Prism',
    acquisition: THE_QUILLS,
    masteryRank: 0,
  },
  {
    name: 'Raplak Prism',
    acquisition: THE_QUILLS,
    masteryRank: 0,
  },
  {
    name: 'Shwaak Prism',
    acquisition: THE_QUILLS,
    masteryRank: 0,
  },
];

module.exports = amps.map(object => ({ ...object, type: AMP }));
