'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var WEAPON_SECONDARY = require('../constants.js').ITEM_TYPE.WEAPON_SECONDARY;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    ENEMY = _require$ACQUISITION.ENEMY,
    FACTION_REWARD = _require$ACQUISITION.FACTION_REWARD,
    LOCATION = _require$ACQUISITION.LOCATION,
    REWARD = _require$ACQUISITION.REWARD,
    UNOBTAINABLE = _require$ACQUISITION.UNOBTAINABLE,
    VAULTED = _require$ACQUISITION.VAULTED;

var _require$SECONDARY_CA = require('../constants.js').SECONDARY_CATEGORIES,
    DUAL_PISTOLS = _require$SECONDARY_CA.DUAL_PISTOLS,
    SINGLE_PISTOL = _require$SECONDARY_CA.SINGLE_PISTOL,
    THROWN_SECONDARY = _require$SECONDARY_CA.THROWN_SECONDARY;

var GRUSTRAG_THREE = ENEMY.GRUSTRAG_THREE,
    KELA_DE_THAYM = ENEMY.KELA_DE_THAYM,
    STALKER = ENEMY.STALKER,
    VOR = ENEMY.VOR,
    VOR_AND_KRILL = ENEMY.VOR_AND_KRILL;
var ARBITERS_OF_HEXIS = FACTION_REWARD.ARBITERS_OF_HEXIS,
    CEPHALON_SUDA = FACTION_REWARD.CEPHALON_SUDA,
    NEW_LOKA = FACTION_REWARD.NEW_LOKA,
    RED_VEIL = FACTION_REWARD.RED_VEIL,
    STEEL_MERIDIAN = FACTION_REWARD.STEEL_MERIDIAN,
    THE_PERRIN_SEQUENCE = FACTION_REWARD.THE_PERRIN_SEQUENCE;
var BARO_KITEER = LOCATION.BARO_KITEER,
    DOJO_BIO_LAB = LOCATION.DOJO_BIO_LAB,
    DOJO_CHEM_LAB = LOCATION.DOJO_CHEM_LAB,
    DOJO_ENERGY_LAB = LOCATION.DOJO_ENERGY_LAB,
    DOJO_TENNO_LAB = LOCATION.DOJO_TENNO_LAB,
    MARKET = LOCATION.MARKET;
var ANNIVERSARY = REWARD.ANNIVERSARY,
    CETUS_BOUNTY_GHOUL = REWARD.CETUS_BOUNTY_GHOUL,
    INVASIONS = REWARD.INVASIONS,
    LOGIN_REWARD = REWARD.LOGIN_REWARD,
    RELICS = REWARD.RELICS,
    SANCTUARY_ONSLAUGHT = REWARD.SANCTUARY_ONSLAUGHT;


var weaponSecondaries = [{
  name: 'Acrid',
  acquisition: DOJO_BIO_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Angstrum',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Prisma Angstrum',
  acquisition: BARO_KITEER,
  category: SINGLE_PISTOL,
  masteryRank: 8
}, {
  name: 'Arca Scisco',
  acquisition: DOJO_ENERGY_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Azima',
  acquisition: LOGIN_REWARD,
  category: SINGLE_PISTOL,
  masteryRank: 6
}, {
  name: 'Ballistica',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'Ballistica Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 14
}, {
  name: 'Rakta Ballistica',
  acquisition: RED_VEIL,
  category: SINGLE_PISTOL,
  masteryRank: 6
}, {
  name: 'Bolto',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Cestra',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Furis',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'MK1-Furis',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'Hystrix',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Knell',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Kraken',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Kulstar',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 5
}, {
  name: 'Lato',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Lato Prime',
  acquisition: UNOBTAINABLE,
  category: SINGLE_PISTOL,
  masteryRank: 14
}, {
  name: 'Lato Vandal',
  acquisition: SANCTUARY_ONSLAUGHT,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Lex',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 3
}, {
  name: 'Lex Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 8
}, {
  name: 'Magnus',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Marelok',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Vaykor Marelok',
  acquisition: STEEL_MERIDIAN,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Pandero',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Seer',
  acquisition: VOR,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Sicarus',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 3
}, {
  name: 'Sicarus Prime',
  acquisition: VAULTED,
  category: SINGLE_PISTOL,
  masteryRank: 14
}, {
  name: 'Sonicor',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'Stubba',
  acquisition: CETUS_BOUNTY_GHOUL,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Stug',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'Tysis',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 9
}, {
  name: 'Vasto',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Vasto Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Viper',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Viper Wraith',
  acquisition: BARO_KITEER,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Zakti',
  acquisition: DOJO_TENNO_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 10
}, {
  name: 'Atomos',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 5
}, {
  name: 'Cycron',
  acquisition: DOJO_ENERGY_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 8
}, {
  name: 'Embolist',
  acquisition: DOJO_BIO_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 9
}, {
  name: 'Gammacor',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 2
}, {
  name: 'Synoid Gammacor',
  acquisition: CEPHALON_SUDA,
  category: SINGLE_PISTOL,
  masteryRank: 7
}, {
  name: 'Nukor',
  acquisition: DOJO_CHEM_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Spectra',
  acquisition: DOJO_ENERGY_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Brakk',
  acquisition: GRUSTRAG_THREE,
  category: SINGLE_PISTOL,
  masteryRank: 6
}, {
  name: 'Bronco',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 0
}, {
  name: 'Bronco Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 4
}, {
  name: 'Detron',
  acquisition: MARKET,
  category: SINGLE_PISTOL,
  masteryRank: 6
}, {
  name: 'Mara Detron',
  acquisition: BARO_KITEER,
  category: SINGLE_PISTOL,
  masteryRank: 9
}, {
  name: 'Euphona Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 14
}, {
  name: 'Kohmak',
  acquisition: DOJO_CHEM_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 5
}, {
  name: 'Pyrana',
  acquisition: DOJO_TENNO_LAB,
  category: SINGLE_PISTOL,
  masteryRank: 12
}, {
  name: 'Pyrana Prime',
  acquisition: RELICS,
  category: SINGLE_PISTOL,
  masteryRank: 13
}, {
  name: 'Afuris',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 4
}, {
  name: 'Dex Furis',
  acquisition: ANNIVERSARY,
  category: DUAL_PISTOLS,
  masteryRank: 10
}, {
  name: 'Akbolto',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 0
}, {
  name: 'Akbolto Prime',
  acquisition: RELICS,
  category: DUAL_PISTOLS,
  masteryRank: 13
}, {
  name: 'Telos Akbolto',
  acquisition: ARBITERS_OF_HEXIS,
  category: DUAL_PISTOLS,
  masteryRank: 11
}, {
  name: 'Akbronco',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 2
}, {
  name: 'Akbronco Prime',
  acquisition: RELICS,
  category: DUAL_PISTOLS,
  masteryRank: 10
}, {
  name: 'Akjagara',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 8
}, {
  name: 'Aklato',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 3
}, {
  name: 'Aklex',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 4
}, {
  name: 'Aklex Prime',
  acquisition: VAULTED,
  category: DUAL_PISTOLS,
  masteryRank: 13
}, {
  name: 'Akmagnus',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 12
}, {
  name: 'Aksomati',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 9
}, {
  name: 'Akstiletto',
  acquisition: DOJO_TENNO_LAB,
  category: DUAL_PISTOLS,
  masteryRank: 8
}, {
  name: 'Akstiletto Prime',
  acquisition: VAULTED,
  category: DUAL_PISTOLS,
  masteryRank: 10
}, {
  name: 'Akvasto',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 8
}, {
  name: 'Akzani',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 4
}, {
  name: 'Dual Cestra',
  acquisition: DOJO_ENERGY_LAB,
  category: DUAL_PISTOLS,
  masteryRank: 7
}, {
  name: 'Secura Dual Cestra',
  acquisition: THE_PERRIN_SEQUENCE,
  category: DUAL_PISTOLS,
  masteryRank: 10
}, {
  name: 'Dual Toxocyst',
  acquisition: DOJO_BIO_LAB,
  category: DUAL_PISTOLS,
  masteryRank: 11
}, {
  name: 'Staticor',
  acquisition: DOJO_ENERGY_LAB,
  category: DUAL_PISTOLS,
  masteryRank: 5
}, {
  name: 'Twin Grakatas',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 9
}, {
  name: 'Twin Gremlins',
  acquisition: VOR_AND_KRILL,
  category: DUAL_PISTOLS,
  masteryRank: 5
}, {
  name: 'Twin Kohmak',
  acquisition: KELA_DE_THAYM,
  category: DUAL_PISTOLS,
  masteryRank: 10
}, {
  name: 'Twin Rogga',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 9
}, {
  name: 'Twin Vipers',
  acquisition: MARKET,
  category: DUAL_PISTOLS,
  masteryRank: 5
}, {
  name: 'Twin Vipers Wraith',
  acquisition: INVASIONS,
  category: DUAL_PISTOLS,
  masteryRank: 7
}, {
  name: 'Castanas',
  acquisition: DOJO_TENNO_LAB,
  category: THROWN_SECONDARY,
  masteryRank: 3
}, {
  name: 'Sancti Castanas',
  acquisition: NEW_LOKA,
  category: THROWN_SECONDARY,
  masteryRank: 6
}, {
  name: 'Despair',
  acquisition: STALKER,
  category: THROWN_SECONDARY,
  masteryRank: 4
}, {
  name: 'Fusilai',
  acquisition: MARKET,
  category: THROWN_SECONDARY,
  masteryRank: 7
}, {
  name: 'Hikou',
  acquisition: MARKET,
  category: THROWN_SECONDARY,
  masteryRank: 2
}, {
  name: 'Hikou Prime',
  acquisition: VAULTED,
  category: THROWN_SECONDARY,
  masteryRank: 2
}, {
  name: 'Kunai',
  acquisition: MARKET,
  category: THROWN_SECONDARY,
  masteryRank: 2
}, {
  name: 'MK1-Kunai',
  acquisition: MARKET,
  category: THROWN_SECONDARY,
  masteryRank: 0
}, {
  name: 'Pox',
  acquisition: DOJO_BIO_LAB,
  category: THROWN_SECONDARY,
  masteryRank: 9
}, {
  name: 'Spira',
  acquisition: MARKET,
  category: THROWN_SECONDARY,
  masteryRank: 8
}, {
  name: 'Spira Prime',
  acquisition: VAULTED,
  category: THROWN_SECONDARY,
  masteryRank: 10
}, {
  name: 'Talons',
  acquisition: DOJO_TENNO_LAB,
  category: THROWN_SECONDARY,
  masteryRank: 8
}];

module.exports = weaponSecondaries.map(function (object) {
  return _extends({}, object, { type: WEAPON_SECONDARY });
});