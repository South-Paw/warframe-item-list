# Warframe Item List

👾 A list of all Warframe items that contribute to player mastery rank.

[![npm](https://img.shields.io/npm/v/warframe-item-list.svg)](https://www.npmjs.com/package/warframe-item-list)
[![warframe update](https://img.shields.io/badge/warframe_update-23.2.1-blue.svg)](http://warframe.wikia.com/wiki/Update_23#Hotfix_23.2.1)
[![CI Status](https://img.shields.io/travis/South-Paw/warframe-item-list.svg)](https://travis-ci.org/South-Paw/warframe-item-list)
[![Coveralls Status](https://img.shields.io/coveralls/github/South-Paw/warframe-item-list.svg)](https://coveralls.io/github/South-Paw/warframe-item-list)
[![Dependencies](https://david-dm.org/South-Paw/warframe-item-list/status.svg)](https://david-dm.org/South-Paw/warframe-item-list)
[![Dev Dependencies](https://david-dm.org/South-Paw/warframe-item-list/dev-status.svg)](https://david-dm.org/South-Paw/warframe-item-list?type=dev)

---

## Why?

Because I couldn't find a near complete list of all Warframe items that contributed to mastery rank... so I spent 2 evenings cataloguing the [Warframe Wiki](http://warframe.wikia.com/wiki/Weapons) item mastery lists and making some objects up that would be easy to reuse in a Javascript app.

Since there isn't an official public API or anything to get this information, this project is managed manually with the help of the Warframe wiki. This of course means that it may also contain mistakes and/or inaccuracies on items.

If you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request. See contributing section for more info.

## Install

`yarn add warframe-item-list`

or

`npm i warframe-item-list`

## Usage

```js
const { version, array, objects, constants } = require('warframe-item-list');

console.log(version);   // returns the warframe game version of the item list.
console.log(array);     // returns a big list of every item.
console.log(objects);   // returns an object containing named lists and objects for more specific uses.
console.log(constants); // returns the constant keys used to define keys in the `array` and `objects`.
```

## Objects

If you `console.log` the root object, you'll get the following:

```js
{
  version: 'string',
  array: [...],
  objects: {
    AMPS: [...],
    ARCHWINGS: [...],
    ARCHWING_GUNS: [...],
    ARCHWING_MELEES: [...],
    COMPANION_KAVATS: [...],
    COMPANION_KUBROWS: [...],
    COMPANION_SENTINELS: [...],
    SENTINEL_WEAPONS: [...],
    WARFRAMES: [...],
    WEAPON_PRIMARIES: [...],
    WEAPON_SECONDARIES: [...],
    WEAPON_MELEES: [...],
    ZAWS: [...],
  },
  constants: {
    ACQUISITION: {...},
    ITEM_TYPE: {...},
    ITEM_TYPES: {...},
    MELEE_CATEGORIES: {...},
    PRIMARY_CATEGORIES: {...},
    SECONDARY_CATEGORIES: {...},
  },
};
```

Within each list, the objects are pretty similarly structured:

```js
{
  name: 'string',        // name of the item.
  acquisition: 'string', // where to acquire the item.
  category: 'string',    // category of weapon - this is only used in primary/secondary/melee and sentinel weapons.
  masteryRank: 0,        // the mastery rank required for the item.
  type: 'string',        // the type the item belongs to.
},
```

And the `constants` contains those that are provided to define the `acquisition`, `category` and `type` in the item objects.

## Contributing

Again, if you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or feel free to have a shot at [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request.

Please ensure that any PRs are linted + tested and keep with the general flow of things.

* Items should be grouped in files by `category` (categories follow the wiki order)
* Ideally; items are alphabetically sorted by `name` within each `category` file

## License

This project is licensed under [GNU GPLv3](https://github.com/South-Paw/warframe-item-list/blob/master/LICENSE)

```
Copyright (C) 2017 Alex Gabites

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```
