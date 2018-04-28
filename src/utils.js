const sortListByInnerKey = (list, innerKey) => {
  const unordered = {};

  // Create unordered object so we can sort on the given innerKey.
  list.forEach((object) => { unordered[object[innerKey]] = { ...object }; });

  // Sort the keys, map on that list and return an ordered list from the unordered object.
  return Object.keys(unordered).sort().map(key => unordered[key]);
};

module.exports = { sortListByInnerKey };
