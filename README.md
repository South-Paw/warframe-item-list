# warframe-item-list
> Warframe Update: h22.0.5

**Why?** Because I couldn't find a near complete list of all Warframe items that contributed to mastery rank... so I spent 2 evenings cataloguing the [Warframe Wiki](http://warframe.wikia.com/wiki/Weapons) item mastery lists and making some objects up that would be easy to reuse in a Javascript app.

Since there isn't an official public API or anything to get this information, this project is managed manually with the help of the wiki. This of course means that it may also contain mistakes and/or inaccuracies on items.

If you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request. See contributing section for more info.

## Install

`npm i warframe-item-list`

## Usage

```js
const warframeItemList = require('warframe-item-list');

console.log(warframeItemList);
```

## Objects

If you `console.log` the root object, you'll get the following:

```js
{
  archwings: [...],
  archwingWeapons: {
    gun: [...],
    melee: [...],
  },
  companions: {
    sentinels: [...],
    kubrows: [...],
    kavats: [...],
  },
  sentinelWeapons: [...],
  warframes: [...],
  weapons: {
    primary: [...],
    secondary: [...],
    melee: [...],
  },
  constants: {
    acquisition: {...},
    acquisitionQuests: {...},
    acquisitionFactions: {...},
    acquisitionEnemies: {...},
    primaryType: {...},
    secondaryType: {...},
    meleeType: {...},
  },
};
```

Within each list, the objects are pretty similarly structured:

```js
{
  name: 'string',         // Name of the item (required).
  acquisition: 'string',  // Where to acquire the item (required).
  type: 'string',         // Type of item - this is only really used for weapons.
  masteryRank: 0          // The mastery rank required to craft - if undefined, then it's 0.
},
```

And the `constants` provided are the same that are used to define the `acquisition` and `type` in the item objects.

## Contributing

Again, if you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request.

Please ensure that any PRs are linted and keep with the general flow of things.

## License

Copyright (C) 2017 Alex Gabites

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
