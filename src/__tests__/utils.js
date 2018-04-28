const { name } = require('../../package.json');
const { sortListByInnerKey } = require('../utils.js');

describe(name, () => {
  describe('utils', () => {
    test('that given an unordered list of objects, the function will order them alphabetically', () => {
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
});
