# Warframe Item List

👾 A list of all Warframe items that contribute to player mastery rank.

[![npm](https://img.shields.io/npm/v/warframe-item-list.svg)](https://www.npmjs.com/package/warframe-item-list)
[![warframe update](https://img.shields.io/badge/warframe_update-23.6.2-blue.svg)](http://warframe.wikia.com/wiki/Update_23#Hotfix_23.6.2)
[![CI Status](https://img.shields.io/travis/South-Paw/warframe-item-list.svg)](https://travis-ci.org/South-Paw/warframe-item-list)
[![Coveralls Status](https://img.shields.io/coveralls/github/South-Paw/warframe-item-list.svg)](https://coveralls.io/github/South-Paw/warframe-item-list)
[![Dependencies](https://david-dm.org/South-Paw/warframe-item-list/status.svg)](https://david-dm.org/South-Paw/warframe-item-list)
[![Dev Dependencies](https://david-dm.org/South-Paw/warframe-item-list/dev-status.svg)](https://david-dm.org/South-Paw/warframe-item-list?type=dev)

---

## Why?

Because I couldn't find a near complete list of all Warframe items that contributed specifically to player mastery rank... so I originally spent 2 evenings cataloguing the [Warframe Wiki](http://warframe.wikia.com/wiki/Weapons) item mastery lists and making some objects up that would be easy to reuse in a Javascript app.

A fair few commits later, this project uses an updater script which fetches the latest content from the `http://content.warframe.com/MobileExport` endpoints and transforms it into this mastery rank list. This is the same endpoints/urls that the [Warframe Mobile app](https://play.google.com/store/apps/details?id=com.digitalextremes.warframenexus) uses to get the current game data - so assuming the endpoints/urls are left as-is, this repo will remain reasonably up to date.

Please note that the endpoints are NOT publicly documented by Digital Extremes (so they could disappear or change at any time) and they do not provide information such a weapon categories. Because of this, we maintain the categories manually in this repo and there may be mistakes and/or inaccuracies with our data or the endpoint/urls.

If you come across any missing items, problems or mistakes - please let us know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or even [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request. See contributing section for more info.

## Install

`yarn add warframe-item-list`

or

`npm i warframe-item-list`

## Usage

```js
const { version, array, objects, constants } = require('warframe-item-list');

console.log(version);   // returns the warframe game version of the item list.
console.log(array);     // returns a big list of every item object.
console.log(objects);   // returns an object keyed by type, these contain lists of item objects.
console.log(constants); // returns the constants used to define item attributes.
```

## Objects

If you `console.log` the root object, you'll get the following:

```js
{
  version: 'string',
  array: [...],
  objects: {
    Amp: [...],
    Archwing: [...],
    ArchwingMelee: [...],
    ArchwingPrimary: [...],
    Kavat: [...],
    Kubrow: [...],
    Melee: [...],
    Primary: [...],
    Secondary: [...],
    Sentinel: [...],
    SentinelWeapon: [...],
    Warframe: [...],
    Zaw: [...],
  },
  constants: {
    TYPE: {...},
    TYPES: {...},
    MELEE_CATEGORIES: {...},
    PRIMARY_CATEGORIES: {...},
    SECONDARY_CATEGORIES: {...},
  },
};
```

Within each list, the objects are pretty similarly structured:

```js
{
  id: 'string',          // unique id for the item.
  name: 'string',        // name of the item.
  type: 'string',        // type the item belongs to.
  category: 'string',    // category of the weapon - this is only used on primary/secondary/melee and sentinel weapons.
  masteryRank: 0,        // mastery rank required for the item.
  image: 'string',       // TODO: unimplemented at the moment.
  wiki: 'string',        // url for the items warframe wiki page.
},
```

And the `constants` contains the strings that are used to define the `category` and `type` keys in the item objects.

There is also a handy `types` exposed in the `constants` where by using a `type` key you can get it's pural.

```js
const { TYPE, TYPES } = require('warframe-item-list').constants;

console.log(TYPE.PRIMARY);        // returns string 'primary'.
console.log(TYPES[TYPE.PRIMARY]); // returns string 'primaries'.
```

## Contributing

If you come across any missing items, problems or mistakes - please let me know by [creating an issue](https://github.com/South-Paw/warframe-item-list/issues/new) or feel free to have a shot at [fixing it yourself](https://github.com/South-Paw/warframe-item-list/pulls) with a pull-request.

Please ensure that any PRs are linted + tested and keep with the general flow of things.

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
