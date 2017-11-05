# warframe-item-list
> Warframe Update: 22.1.2

**Why?** Because I couldn't find a near complete list of all Warframe items that contributed to mastery rank... so I spent 2 evenings cataloguing the [Warframe Wiki](http://warframe.wikia.com/wiki/Weapons) item mastery lists and making some objects up that would be easy to reuse in a Javascript app.

Since there isn't an official public API or anything to get this information, this project is managed manually with the help of the wiki. This of course means that it may also contain mistakes and/or inaccuracies on items.

If you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request. See contributing section for more info.

## Install

`npm i warframe-item-list`

## Usage

```js
const items = require('warframe-item-list');

console.log(items.array);     // gives a big list of every item.
console.log(items.objects);   // gives a object of arrays and objects for more specific uses
console.log(items.constants); // same list used to define the `acquisition`, `type` and `group`.
```

## Objects

If you `console.log` the root object, you'll get the following:

```js
{
  version: '',
  array: [...],
  objects: {
    ARCHWING: [...],
    ARCHWING_GUN: [...],
    ARCHWING_MELEE: [...],
    COMPANION_SENTINEL: [...],
    COMPANION_KUBROW: [...],
    COMPANION_KAVAT: [...],
    SENTINEL_WEAPON: [...],
    WARFRAME: [...],
    WEAPON_PRIMARY: [...],
    WEAPON_SECONDARY: [...],
    WEAPON_MELEE: [...],
  },
  constants: {
    acquisition: {...},
    acquisitionQuests: {...},
    acquisitionFactions: {...},
    acquisitionEnemies: {...},
    primaryCategory: {...},
    secondaryCategory: {...},
    meleeCategory: {...},
    itemType: {...},
  },
};
```

Within each list, the objects are pretty similarly structured:

```js
{
  name: 'string',        // Name of the item (required).
  acquisition: 'string', // Where to acquire the item (required).
  category: 'string',    // Type of item - this is only used for primary/secondary/melee weapons.
  masteryRank: 0,        // The mastery rank required to craft - if undefined, then it's 0.
  type: 'string',        // If the using the array export, items will have a type attached as well.
},
```

And the `constants` provided are the same that are used to define the `acquisition`, `type` and `group` in the item objects.

## Contributing

Again, if you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request.

Please ensure that any PRs are linted and keep with the general flow of things.

## License

Copyright (C) 2017 Alex Gabites

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
