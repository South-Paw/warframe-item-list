'use strict';

var ACQUISITION = {
  ENEMY: {
    ALAD_V: 'Alad V (Boss)',
    AMBULAS: 'Ambulas (Boss)',
    DREKAR_TROOPERS: 'Drekar Troopers',
    EXIMUS_ENEMIES: 'Eximus Enemies',
    GRUSTRAG_THREE: 'The Grustrag Three',
    HEAVY_GUNNERS: 'Heavy Gunners',
    HYENA_PACK: 'Hyena Pack (Boss)',
    JACKAL: 'Jackal (Boss)',
    JORDAS_GOLEM: 'Jordas Golem (Boss)',
    KELA_DE_THAYM: 'Kela De Thaym (Boss)',
    LECH_KRILL: 'Lieutenant Lech Kril (Boss)',
    LEPHANTIS: 'Lephantis (Boss)',
    MANICS: 'Manics',
    MUTALIST_ALAD_V: 'Mutalist Alad V (Boss)',
    PHORID: 'Phorid (Boss)',
    SARGAS_RUK: 'General Sargas Ruk (Boss)',
    STALKER: 'Stalker',
    THE_RAPTORS: 'The Raptors (Boss)',
    THE_SERGEANT: 'The Sergeant (Boss)',
    TYL_REGOR: 'Tyl Regor (Boss)',
    VAY_HEK: 'Councilor Vay Hek (Boss)',
    VOR: 'Captain Vor (Boss)',
    VOR_AND_KRILL: 'Captain Vor and Lieutenant Lech Kril (Boss Duo)'
  },
  FACTION_REWARD: {
    ARBITERS_OF_HEXIS: 'Arbiters of Hexis (Maxim)',
    CEPHALON_SUDA: 'Cephalon Suda (Genius)',
    NEW_LOKA: 'New Loka (Flawless)',
    RED_VEIL: 'Red Veil (Exalted)',
    STEEL_MERIDIAN: 'Steel Meridian (General)',
    THE_PERRIN_SEQUENCE: 'The Perrin Sequence (Partner)'
  },
  LOCATION: {
    BARO_KITEER: 'Baro Ki\'Teer (Relay)',
    CEPHALON_SIMARIS: 'Cephalon Simaris (Relay)',
    DOJO_BIO_LAB: 'Bio Lab (Dojo)',
    DOJO_CHEM_LAB: 'Chem Lab (Dojo)',
    DOJO_ENERGY_LAB: 'Energy Lab (Dojo)',
    DOJO_OROKIN_LAB: 'Orokin Lab (Dojo)',
    DOJO_TENNO_LAB: 'Tenno Lab (Dojo)',
    HOKS_ANVIL: 'Hok\'s Anvil (Cetus)',
    INCUBATOR_SEGMENT: 'Incubator Segment (Ship)',
    INCUBATOR_UPGRADE_KAVAT: 'Kavat Incubator Upgrade Segment (Ship)',
    MARKET: 'Market (Ship)',
    THE_QUILLS: 'The Quills (Cetus)'
  },
  QUEST: {
    CHAINS_OF_HARROW: 'Chains of Harrow (Quest)',
    HIDDEN_MESSAGES: 'Hidden Messages (Quest)',
    OCTAVIAS_ANTHEM: 'Octavia\'s Anthem (Quest)',
    SANDS_OF_INAROS: 'Sands of Inaros (Quest)',
    SAYAS_VIGIL: 'Saya\'s Vigil (Quest)',
    THE_ARCHWING: 'The Archwing (Quest)',
    THE_GLAST_GAMBIT: 'The Glast Gambit (Quest)',
    THE_LIMBO_THEOREM: 'The Limbo Theorem (Quest)',
    THE_NEW_STRANGE: 'The New Strange (Quest)',
    THE_SACRIFICE: 'The Sacrifice (Quest)',
    THE_SECOND_DREAM: 'The Second Dream (Quest)',
    THE_SILVER_GROVE: 'The Silver Grove (Quest)',
    THE_WAR_WITHIN: 'The War Within (Quest)'
  },
  REWARD: {
    ALERTS: 'Alerts',
    ANNIVERSARY: 'Anniversary',
    CETUS_BOUNTY_GHOUL: 'Cetus Bounty (Ghoul)',
    CETUS_BOUNTY_40_60: 'Cetus Bounty (Levels 40 - 60)',
    FOMORIAN_SABOTAGE: 'Fomorian Sabotage',
    INVASIONS: 'Invasions',
    LOGIN_REWARD: 'Login Reward',
    OPERATION_PLAGUE_STAR: 'Operation Plague Star (Cetus)',
    RAZORBACK_ARMADA: 'Razorback Armada',
    RELICS: 'Relics',
    SANCTUARY_ONSLAUGHT: 'Sanctuary Onslaught',
    SPY_MISSIONS: 'Spy Missions'
  },
  UNOBTAINABLE: 'Unobtainable',
  VAULTED: 'Vaulted'
};

var ITEM_TYPE = {
  AMP: 'Amp',
  ARCHWING: 'Archwing',
  ARCHWING_GUN: 'Archwing Gun',
  ARCHWING_MELEE: 'Archwing Melee',
  COMPANION_KAVAT: 'Kavat',
  COMPANION_KUBROW: 'Kubrow',
  COMPANION_SENTINEL: 'Sentinel',
  SENTINEL_WEAPON: 'Sentinel Weapon',
  WARFRAME: 'Warframe',
  WEAPON_PRIMARY: 'Primary Weapon',
  WEAPON_MELEE: 'Melee Weapon',
  WEAPON_SECONDARY: 'Secondary Weapon',
  ZAW: 'Zaw'
};

var ITEM_TYPES = {
  AMPS: 'Amps',
  ARCHWINGS: 'Archwings',
  ARCHWING_GUNS: 'Archwing Guns',
  ARCHWING_MELEES: 'Archwing Melees',
  COMPANION_KAVATS: 'Kavats',
  COMPANION_KUBROWS: 'Kubrows',
  COMPANION_SENTINELS: 'Sentinels',
  SENTINEL_WEAPONS: 'Sentinel Weapons',
  WARFRAMES: 'Warframes',
  WEAPON_PRIMARIES: 'Primary Weapons',
  WEAPON_MELEES: 'Melee Weapons',
  WEAPON_SECONDARIES: 'Secondary Weapons',
  ZAWS: 'Zaws'
};

var MELEE_CATEGORIES = {
  BLADE_WHIP: 'Blade-Whip',
  CLAWS: 'Claws',
  DAGGER: 'Dagger',
  DUAL_DAGGERS: 'Dual Daggers',
  DUAL_SWORDS: 'Dual Swords',
  FIST: 'Fist',
  GLAIVE: 'Glaive',
  GUNBLADE: 'Gunblade',
  HAMMER: 'Hammer',
  HEAVY_BLADE: 'Heavy Blade',
  HYBRID: 'Hybrid',
  MACHETE: 'Machete',
  NIKANA: 'Nikana',
  NUNCHAKU: 'Nunchaku',
  POLEARM: 'Polearm',
  RAPIER: 'Rapier',
  SCYTHE: 'Scythe',
  SPARRING: 'Sparring',
  STAFF: 'Staff',
  SWORD: 'Sword',
  SWORD_SHEILD: 'Sword-Shield',
  TONFA: 'Tonfa',
  THROWN_MELEE: 'Thrown Melee',
  WARFANS: 'Warfans',
  WHIP: 'Whip'
};

var PRIMARY_CATEGORIES = {
  BOW: 'Bow',
  LAUNCHER: 'Launcher',
  RIFLE: 'Rifle',
  SHOTGUN: 'Shotgun',
  SNIPER: 'Sniper',
  SPEARGUN: 'Speargun'
};

var SECONDARY_CATEGORIES = {
  DUAL_PISTOLS: 'Dual Pistols',
  SINGLE_PISTOL: 'Single Pistol',
  THROWN_SECONDARY: 'Thrown'
};

module.exports = {
  ACQUISITION: ACQUISITION,
  ITEM_TYPE: ITEM_TYPE,
  ITEM_TYPES: ITEM_TYPES,
  MELEE_CATEGORIES: MELEE_CATEGORIES,
  PRIMARY_CATEGORIES: PRIMARY_CATEGORIES,
  SECONDARY_CATEGORIES: SECONDARY_CATEGORIES
};