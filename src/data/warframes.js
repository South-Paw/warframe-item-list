const { WARFRAME } = require('../constants.js').ITEM_TYPE;
const { ENEMY, LOCATION, QUEST, REWARD, UNOBTAINABLE, VAULTED } = require('../constants.js').ACQUISITION;

const {
  ALAD_V,
  AMBULAS,
  EXIMUS_ENEMIES,
  HYENA_PACK,
  JACKAL,
  JORDAS_GOLEM,
  KELA_DE_THAYM,
  LECH_KRILL,
  LEPHANTIS,
  MANICS,
  MUTALIST_ALAD_V,
  PHORID,
  SARGAS_RUK,
  THE_RAPTORS,
  THE_SERGEANT,
  TYL_REGOR,
  VAY_HEK,
  VOR_AND_KRILL,
} = ENEMY;
const { DOJO_TENNO_LAB } = LOCATION;
const {
  OCTAVIAS_ANTHEM,
  THE_SILVER_GROVE,
  CHAINS_OF_HARROW,
  HIDDEN_MESSAGES,
  SAYAS_VIGIL,
  SANDS_OF_INAROS,
  THE_LIMBO_THEOREM,
  THE_NEW_STRANGE,
  THE_GLAST_GAMBIT,
  THE_SACRIFICE
} = QUEST;
const { ALERTS, RELICS, SANCTUARY_ONSLAUGHT, SPY_MISSIONS } = REWARD;

const warframes = [
  {
    name: 'Ash',
    acquisition: MANICS,
    masteryRank: 0,
  },
  {
    name: 'Ash Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Atlas',
    acquisition: JORDAS_GOLEM,
    masteryRank: 0,
  },
  {
    name: 'Banshee',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Banshee Prime',
    acquisition: RELICS,
    masteryRank: 8,
  },
  {
    name: 'Chroma',
    acquisition: THE_NEW_STRANGE,
    masteryRank: 0,
  },
  {
    name: 'Ember',
    acquisition: SARGAS_RUK,
    masteryRank: 0,
  },
  {
    name: 'Ember Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Equinox',
    acquisition: TYL_REGOR,
    masteryRank: 0,
  },
  {
    name: 'Excalibur',
    acquisition: LECH_KRILL,
    masteryRank: 0,
  },
  {
    name: 'Excalibur Prime',
    acquisition: UNOBTAINABLE,
    masteryRank: 0,
  },
  {
    name: 'Excalibur Umbra',
    acquisition: THE_SACRIFICE,
    masteryRank: 0,
  },
  {
    name: 'Frost',
    acquisition: VOR_AND_KRILL,
    masteryRank: 0,
  },
  {
    name: 'Frost Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Gara',
    acquisition: SAYAS_VIGIL,
    masteryRank: 0,
  },
  {
    name: 'Harrow',
    acquisition: CHAINS_OF_HARROW,
    masteryRank: 0,
  },
  {
    name: 'Hydroid',
    acquisition: VAY_HEK,
    masteryRank: 0,
  },
  {
    name: 'Hydroid Prime',
    acquisition: RELICS,
    masteryRank: 5,
  },
  {
    name: 'Inaros',
    acquisition: SANDS_OF_INAROS,
    masteryRank: 0,
  },
  {
    name: 'Ivara',
    acquisition: SPY_MISSIONS,
    masteryRank: 0,
  },
  {
    name: 'Khora',
    acquisition: SANCTUARY_ONSLAUGHT,
    masteryRank: 0,
  },
  {
    name: 'Limbo',
    acquisition: THE_LIMBO_THEOREM,
    masteryRank: 0,
  },
  {
    name: 'Limbo Prime',
    acquisition: RELICS,
    masteryRank: 4,
  },
  {
    name: 'Loki',
    acquisition: HYENA_PACK,
    masteryRank: 0,
  },
  {
    name: 'Loki Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Mag',
    acquisition: THE_SERGEANT,
    masteryRank: 0,
  },
  {
    name: 'Mag Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Mesa',
    acquisition: MUTALIST_ALAD_V,
    masteryRank: 0,
  },
  {
    name: 'Mirage',
    acquisition: HIDDEN_MESSAGES,
    masteryRank: 0,
  },
  {
    name: 'Mirage Prime',
    acquisition: RELICS,
    masteryRank: 8,
  },
  {
    name: 'Nekros',
    acquisition: LEPHANTIS,
    masteryRank: 0,
  },
  {
    name: 'Nekros Prime',
    acquisition: RELICS,
    masteryRank: 0,
  },
  {
    name: 'Nezha',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Nidus',
    acquisition: THE_GLAST_GAMBIT,
    masteryRank: 0,
  },
  {
    name: 'Nova',
    acquisition: THE_RAPTORS,
    masteryRank: 0,
  },
  {
    name: 'Nova Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Nyx',
    acquisition: PHORID,
    masteryRank: 0,
  },
  {
    name: 'Nyx Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Oberon',
    acquisition: EXIMUS_ENEMIES,
    masteryRank: 0,
  },
  {
    name: 'Oberon Prime',
    acquisition: RELICS,
    masteryRank: 8,
  },
  {
    name: 'Octavia',
    acquisition: OCTAVIAS_ANTHEM,
    masteryRank: 0,
  },
  {
    name: 'Rhino',
    acquisition: JACKAL,
    masteryRank: 0,
  },
  {
    name: 'Rhino Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Saryn',
    acquisition: KELA_DE_THAYM,
    masteryRank: 0,
  },
  {
    name: 'Saryn Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Titania',
    acquisition: THE_SILVER_GROVE,
    masteryRank: 0,
  },
  {
    name: 'Trinity',
    acquisition: AMBULAS,
    masteryRank: 0,
  },
  {
    name: 'Trinity Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Valkyr',
    acquisition: ALAD_V,
    masteryRank: 0,
  },
  {
    name: 'Valkyr Prime',
    acquisition: RELICS,
    masteryRank: 0,
  },
  {
    name: 'Vauban',
    acquisition: ALERTS,
    masteryRank: 0,
  },
  {
    name: 'Vauban Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Volt',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Volt Prime',
    acquisition: VAULTED,
    masteryRank: 0,
  },
  {
    name: 'Wukong',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Zephyr',
    acquisition: DOJO_TENNO_LAB,
    masteryRank: 0,
  },
  {
    name: 'Zephyr Prime',
    acquisition: RELICS,
    masteryRank: 6,
  },
];

module.exports = warframes.map(object => ({ ...object, type: WARFRAME }));
