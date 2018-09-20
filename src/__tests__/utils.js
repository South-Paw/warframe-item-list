const { name } = require('../../package.json');
const { asyncForEach, capitalize, sortListByInnerKey, stringify } = require('../utils.js');

describe(name, () => {
  describe('utils', () => {
    describe('asyncForEach', () => {
      test('that given a list of objects, async foreach will ', async () => {
        const items = [{ key: 'a' }, { key: 'b' }, { key: 'c' }];
        const expected = [];
        let cbCount = 0;

        await asyncForEach(items, async (item) => {
          expected.push(item.key);
          cbCount += 1;
        });

        expect(expected).toEqual(['a', 'b', 'c']);
        expect(cbCount).toBe(3);
      });
    });

    describe('capitalize', () => {
      test('that given a word, the word is capitalized', () => {
        const given = 'apples';
        const expected = 'Apples';

        expect(capitalize(given)).toBe(expected);
      });

      test('that given a sentence, each word is capitalized', () => {
        const given = 'the quick brown fox jumped over the lazy dog.';
        const expected = 'The Quick Brown Fox Jumped Over The Lazy Dog.';

        expect(capitalize(given)).toBe(expected);
      });
    });

    describe('sortListByInnerKey', () => {
      test('that given an unordered list of objects, they are returned ordered alphabetically', () => {
        const given = [
          { name: 'aaa' },
          { name: 'b' },
          { name: 'a' },
          { name: 'df' },
          { name: 'de' },
          { name: 'c' },
          { name: 'ab' },
          { name: 'ac' },
        ];

        const result = sortListByInnerKey(given, 'name');

        expect(result[0].name).toBe(given[2].name);
        expect(result[7].name).toBe(given[3].name);
      });
    });

    describe('stringify', () => {
      test('that given a javascript array, the stringify function will return a formatted string of the array', () => {
        const object = [
          { key: 1, items: ['a', 'b', 'c'] },
          { key: 2, items: ['d', 'e', 'f'] },
          { key: 3, items: ['g', 'h', 'i'] },
        ];

        const expected = `[
  {
    "key": 1,
    "items": [ "a", "b", "c" ]
  },
  {
    "key": 2,
    "items": [ "d", "e", "f" ]
  },
  {
    "key": 3,
    "items": [ "g", "h", "i" ]
  }
]`;

        expect(stringify(object)).toBe(expected);
      });
    });
  });
});
