const { name } = require('../../package.json');
const { version, array, objects, constants } = require('../index.js');

const { SENTINEL_WEAPON, WEAPON_MELEE, WEAPON_PRIMARY, WEAPON_SECONDARY } = constants.ITEM_TYPE;

describe(name, () => {
  describe('version', () => {
    test('it has a version string', () => {
      expect(typeof version).toBe('string');
    });
  });

  describe('array', () => {
    const TYPES = [SENTINEL_WEAPON, WEAPON_MELEE, WEAPON_PRIMARY, WEAPON_SECONDARY];
    const TYPES_AS_STRING = '[SENTINEL_WEAPON, WEAPON_MELEE, WEAPON_PRIMARY, WEAPON_SECONDARY]';

    test("every object should have should have a 'name', 'acquisition', 'masteryRank' and 'type' key`", () => {
      array.forEach((item) => {
        expect(item).toHaveProperty('name');
        expect(item.name).toBeDefined();

        expect(item).toHaveProperty('acquisition');
        expect(item.acquisition).toBeDefined();

        expect(item).toHaveProperty('masteryRank');
        expect(item.masteryRank).toBeDefined();

        expect(item).toHaveProperty('type');
        expect(item.type).toBeDefined();
      });
    });

    test(`any object of type ${TYPES_AS_STRING} should also have a 'category' key`, () => {
      array.forEach((item) => {
        if (TYPES.indexOf(item.type) > -1) {
          expect(item).toHaveProperty('category');
          expect(item.category).not.toBeNull();
        }
      });
    });
  });

  describe('objects', () => {
    Object.keys(constants.ITEM_TYPES).forEach((type) => {
      test(`every object in ${type} should have a 'name', 'acquisition', 'masteryRank' and 'type' key`, () => {
        objects[type].forEach((item) => {
          expect(item).toHaveProperty('name');
          expect(item.name).toBeDefined();

          expect(item).toHaveProperty('acquisition');
          expect(item.acquisition).toBeDefined();

          expect(item).toHaveProperty('masteryRank');
          expect(item.masteryRank).toBeDefined();

          expect(item).toHaveProperty('type');
          expect(item.type).toBeDefined();
        });
      });
    });

    ['SENTINEL_WEAPONS', 'WEAPON_MELEES', 'WEAPON_PRIMARIES', 'WEAPON_SECONDARIES'].forEach((type) => {
      test(`every object in ${type} should also have a 'category' key`, () => {
        objects[type].forEach((item) => {
          expect(item).toHaveProperty('category');
          expect(item.category).not.toBeNull();
        });
      });
    });
  });
});
