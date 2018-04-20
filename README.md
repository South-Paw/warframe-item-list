# Warframe Item List

👾 A list of all Warframe items that contribute to player mastery rank.

[![warframe-item-list on npm](https://nodei.co/npm/warframe-item-list.png)](https://nodei.co/npm/warframe-item-list/)

[![warframe update](https://img.shields.io/badge/warframe_update-22.17.2-blue.svg)](http://warframe.wikia.com/wiki/Update_22#Hotfix_22.17.2)
[![Dependencies](https://david-dm.org/South-Paw/warframe-item-list/status.svg)](https://david-dm.org/South-Paw/warframe-item-list)
[![Dev Dependencies](https://david-dm.org/South-Paw/warframe-item-list/dev-status.svg)](https://david-dm.org/South-Paw/warframe-item-list?type=dev)

---

## Why?

Because I couldn't find a near complete list of all Warframe items that contributed to mastery rank... so I spent 2 evenings cataloguing the [Warframe Wiki](http://warframe.wikia.com/wiki/Weapons) item mastery lists and making some objects up that would be easy to reuse in a Javascript app.

Since there isn't an official public API or anything to get this information, this project is managed manually with the help of the Warframe wiki. This of course means that it may also contain mistakes and/or inaccuracies on items.

If you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request. See contributing section for more info.

## Install

`npm i warframe-item-list`

## Usage

```js
const { array, objects, constants } = require('warframe-item-list');

console.log(array);     // returns a big list of every item.
console.log(objects);   // returns an object containing named lists and objects for more specific uses.
console.log(constants); // returns the same lists used to define the `acquisition`, `category` and `type` keys.
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
    COMPANION_SENTINELS: [...],
    COMPANION_KUBROWS: [...],
    COMPANION_KAVATS: [...],
    SENTINEL_WEAPONS: [...],
    WARFRAMES: [...],
    WEAPON_PRIMARIES: [...],
    WEAPON_SECONDARIES: [...],
    WEAPON_MELEES: [...],
    ZAWS: [...],
  },
  constants: {
    acquisitions: {...},
    acquisitionQuests: {...},
    acquisitionFactions: {...},
    acquisitionEnemies: {...},
    primaryCategories: {...},
    secondaryCategories: {...},
    meleeCategories: {...},
    itemTypes: {...},
  },
};
```

Within each list, the objects are pretty similarly structured:

```js
{
  name: 'string',        // name of the item (required).
  acquisition: 'string', // where to acquire the item (required).
  category: 'string',    // category of weapon - this is only used for primary/secondary/melee weapons.
  masteryRank: 0,        // the mastery rank required to craft (required).
  type: 'string',        // if the using the array export, items will have a type attached as well.
},
```

And the `constants` provided are the same that are used to define the `acquisition`, `type` and `group` in the item objects.

## Contributing

Again, if you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or feel free to have a shot at [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request.

Please ensure that any PRs are linted and keep with the general flow of things.

* Items should be grouped by `category` (categories follow the wiki order)
* Items are alphabetically sorted by `name` within each `category`

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
