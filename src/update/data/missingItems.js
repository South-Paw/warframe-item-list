/**
 * Add any missing items (those that don't appear in the endpoints or can't be seen in the `cache/json` files) to this
 * object.
 *
 * Also ensure that they have the correct type key otherwise you'll see weird and/or broken outputs.
 */

const MISSING_ITEMS = {
  Kavat: [
    {
      id: '/Lotus/Types/Game/CatbrowPet/CheshireCatbrowPetPowerSuit',
      name: 'Venari Kavat',
      type: 'Kavat',
      masteryRank: 0,
      wiki: 'http://warframe.wikia.com/wiki/Kavat#Venari',
    },
  ],
};

module.exports = { MISSING_ITEMS };
