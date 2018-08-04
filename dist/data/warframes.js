'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var WARFRAME = require('../constants.js').ITEM_TYPE.WARFRAME;

var _require$ACQUISITION = require('../constants.js').ACQUISITION,
    ENEMY = _require$ACQUISITION.ENEMY,
    LOCATION = _require$ACQUISITION.LOCATION,
    QUEST = _require$ACQUISITION.QUEST,
    REWARD = _require$ACQUISITION.REWARD,
    UNOBTAINABLE = _require$ACQUISITION.UNOBTAINABLE,
    VAULTED = _require$ACQUISITION.VAULTED;

var ALAD_V = ENEMY.ALAD_V,
    AMBULAS = ENEMY.AMBULAS,
    EXIMUS_ENEMIES = ENEMY.EXIMUS_ENEMIES,
    HYENA_PACK = ENEMY.HYENA_PACK,
    JACKAL = ENEMY.JACKAL,
    JORDAS_GOLEM = ENEMY.JORDAS_GOLEM,
    KELA_DE_THAYM = ENEMY.KELA_DE_THAYM,
    LECH_KRILL = ENEMY.LECH_KRILL,
    LEPHANTIS = ENEMY.LEPHANTIS,
    MANICS = ENEMY.MANICS,
    MUTALIST_ALAD_V = ENEMY.MUTALIST_ALAD_V,
    PHORID = ENEMY.PHORID,
    SARGAS_RUK = ENEMY.SARGAS_RUK,
    THE_RAPTORS = ENEMY.THE_RAPTORS,
    THE_SERGEANT = ENEMY.THE_SERGEANT,
    TYL_REGOR = ENEMY.TYL_REGOR,
    VAY_HEK = ENEMY.VAY_HEK,
    VOR_AND_KRILL = ENEMY.VOR_AND_KRILL;
var DOJO_TENNO_LAB = LOCATION.DOJO_TENNO_LAB;
var OCTAVIAS_ANTHEM = QUEST.OCTAVIAS_ANTHEM,
    THE_SILVER_GROVE = QUEST.THE_SILVER_GROVE,
    CHAINS_OF_HARROW = QUEST.CHAINS_OF_HARROW,
    HIDDEN_MESSAGES = QUEST.HIDDEN_MESSAGES,
    SAYAS_VIGIL = QUEST.SAYAS_VIGIL,
    SANDS_OF_INAROS = QUEST.SANDS_OF_INAROS,
    THE_LIMBO_THEOREM = QUEST.THE_LIMBO_THEOREM,
    THE_NEW_STRANGE = QUEST.THE_NEW_STRANGE,
    THE_GLAST_GAMBIT = QUEST.THE_GLAST_GAMBIT,
    THE_SACRIFICE = QUEST.THE_SACRIFICE;
var ALERTS = REWARD.ALERTS,
    RELICS = REWARD.RELICS,
    SANCTUARY_ONSLAUGHT = REWARD.SANCTUARY_ONSLAUGHT,
    SPY_MISSIONS = REWARD.SPY_MISSIONS;


var warframes = [{
  name: 'Ash',
  acquisition: MANICS,
  masteryRank: 0
}, {
  name: 'Ash Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Atlas',
  acquisition: JORDAS_GOLEM,
  masteryRank: 0
}, {
  name: 'Banshee',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Banshee Prime',
  acquisition: RELICS,
  masteryRank: 8
}, {
  name: 'Chroma',
  acquisition: THE_NEW_STRANGE,
  masteryRank: 0
}, {
  name: 'Ember',
  acquisition: SARGAS_RUK,
  masteryRank: 0
}, {
  name: 'Ember Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Equinox',
  acquisition: TYL_REGOR,
  masteryRank: 0
}, {
  name: 'Excalibur',
  acquisition: LECH_KRILL,
  masteryRank: 0
}, {
  name: 'Excalibur Prime',
  acquisition: UNOBTAINABLE,
  masteryRank: 0
}, {
  name: 'Excalibur Umbra',
  acquisition: THE_SACRIFICE,
  masteryRank: 0
}, {
  name: 'Frost',
  acquisition: VOR_AND_KRILL,
  masteryRank: 0
}, {
  name: 'Frost Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Gara',
  acquisition: SAYAS_VIGIL,
  masteryRank: 0
}, {
  name: 'Harrow',
  acquisition: CHAINS_OF_HARROW,
  masteryRank: 0
}, {
  name: 'Hydroid',
  acquisition: VAY_HEK,
  masteryRank: 0
}, {
  name: 'Hydroid Prime',
  acquisition: RELICS,
  masteryRank: 5
}, {
  name: 'Inaros',
  acquisition: SANDS_OF_INAROS,
  masteryRank: 0
}, {
  name: 'Ivara',
  acquisition: SPY_MISSIONS,
  masteryRank: 0
}, {
  name: 'Khora',
  acquisition: SANCTUARY_ONSLAUGHT,
  masteryRank: 0
}, {
  name: 'Limbo',
  acquisition: THE_LIMBO_THEOREM,
  masteryRank: 0
}, {
  name: 'Limbo Prime',
  acquisition: RELICS,
  masteryRank: 4
}, {
  name: 'Loki',
  acquisition: HYENA_PACK,
  masteryRank: 0
}, {
  name: 'Loki Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Mag',
  acquisition: THE_SERGEANT,
  masteryRank: 0
}, {
  name: 'Mag Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Mesa',
  acquisition: MUTALIST_ALAD_V,
  masteryRank: 0
}, {
  name: 'Mirage',
  acquisition: HIDDEN_MESSAGES,
  masteryRank: 0
}, {
  name: 'Mirage Prime',
  acquisition: RELICS,
  masteryRank: 8
}, {
  name: 'Nekros',
  acquisition: LEPHANTIS,
  masteryRank: 0
}, {
  name: 'Nekros Prime',
  acquisition: RELICS,
  masteryRank: 0
}, {
  name: 'Nezha',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Nidus',
  acquisition: THE_GLAST_GAMBIT,
  masteryRank: 0
}, {
  name: 'Nova',
  acquisition: THE_RAPTORS,
  masteryRank: 0
}, {
  name: 'Nova Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Nyx',
  acquisition: PHORID,
  masteryRank: 0
}, {
  name: 'Nyx Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Oberon',
  acquisition: EXIMUS_ENEMIES,
  masteryRank: 0
}, {
  name: 'Oberon Prime',
  acquisition: RELICS,
  masteryRank: 8
}, {
  name: 'Octavia',
  acquisition: OCTAVIAS_ANTHEM,
  masteryRank: 0
}, {
  name: 'Rhino',
  acquisition: JACKAL,
  masteryRank: 0
}, {
  name: 'Rhino Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Saryn',
  acquisition: KELA_DE_THAYM,
  masteryRank: 0
}, {
  name: 'Saryn Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Titania',
  acquisition: THE_SILVER_GROVE,
  masteryRank: 0
}, {
  name: 'Trinity',
  acquisition: AMBULAS,
  masteryRank: 0
}, {
  name: 'Trinity Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Valkyr',
  acquisition: ALAD_V,
  masteryRank: 0
}, {
  name: 'Valkyr Prime',
  acquisition: RELICS,
  masteryRank: 0
}, {
  name: 'Vauban',
  acquisition: ALERTS,
  masteryRank: 0
}, {
  name: 'Vauban Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Volt',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Volt Prime',
  acquisition: VAULTED,
  masteryRank: 0
}, {
  name: 'Wukong',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Zephyr',
  acquisition: DOJO_TENNO_LAB,
  masteryRank: 0
}, {
  name: 'Zephyr Prime',
  acquisition: RELICS,
  masteryRank: 6
}];

module.exports = warframes.map(function (object) {
  return _extends({}, object, { type: WARFRAME });
});