const asyncForEach = async (a, cb) => {
  for (let i = 0; i < a.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await cb(a[i], i, a);
  }
};

const capitalize = s => s.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

const sortListByInnerKey = (list, innerKey) => {
  const unordered = {};

  // Create unordered object so we can sort on the given innerKey.
  list.forEach((object) => { unordered[object[innerKey]] = { ...object }; });

  // Sort the keys, map on that list and return an ordered list from the unordered object.
  return Object.keys(unordered).sort().map(key => unordered[key]);
};

// Human readable json stringify where simple arrays use only one line.
// https://gist.github.com/nrkn/c7a89bb7039182314415
const stringify = (object) => {
  const isPrimitive = obj => obj === null || ['string', 'number', 'boolean'].includes(typeof obj);
  const isArrayOfPrimitive = obj => Array.isArray(obj) && obj.every(isPrimitive);
  const format = arr => `^^^[ ${arr.map(val => JSON.stringify(val)).join(', ')} ]`;
  const replacer = (key, value) => (isArrayOfPrimitive(value) ? format(value) : value);
  const expand = str => str.replace(/(?:"\^\^\^)(\[ .* \])(?:")/g, (match, a) => a.replace(/\\"/g, '"'));
  return expand(JSON.stringify(object, replacer, 2));
};

module.exports = { asyncForEach, capitalize, sortListByInnerKey, stringify };
