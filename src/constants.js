const TYPE = {
  AMP: 'Amp',
  ARCHWING: 'Archwing',
  ARCHWING_MELEE: 'ArchwingMelee',
  ARCHWING_PRIMARY: 'ArchwingPrimary',
  KAVAT: 'Kavat',
  KUBROW: 'Kubrow',
  MELEE: 'Melee',
  MISC: 'Misc',
  PRIMARY: 'Primary',
  QUEST: 'Quest',
  SECONDARY: 'Secondary',
  SENTINEL: 'Sentinel',
  SENTINEL_WEAPON: 'SentinelWeapon',
  UNKNOWN: 'Unknown',
  WARFRAME: 'Warframe',
  ZAW: 'Zaw',
};

const TYPES = {
  [TYPE.AMP]: 'Amps',
  [TYPE.ARCHWING]: 'Archwings',
  [TYPE.ARCHWING_MELEE]: 'Archwing Melees',
  [TYPE.ARCHWING_PRIMARY]: 'Archwing Primaries',
  [TYPE.KAVAT]: 'Kavats',
  [TYPE.KUBROW]: 'Kubrows',
  [TYPE.MELEE]: 'Melee',
  [TYPE.MISC]: 'Misc',
  [TYPE.PRIMARY]: 'Primaries',
  [TYPE.QUEST]: 'Quests',
  [TYPE.SECONDARY]: 'Secondaries',
  [TYPE.SENTINEL]: 'Sentinels',
  [TYPE.SENTINEL_WEAPON]: 'Sentinel Weapons',
  [TYPE.UNKNOWN]: 'Unknown',
  [TYPE.WARFRAME]: 'Warframes',
  [TYPE.ZAW]: 'Zaws',
};

const MELEE_CATEGORIES = {
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
  WARFAN: 'Warfan',
  WHIP: 'Whip',
};

const PRIMARY_CATEGORIES = {
  BOW: 'Bow',
  CONTINUOUS_RIFLE: 'Continuous Rifle',
  LAUNCHER: 'Launcher',
  RIFLE: 'Rifle',
  SHOTGUN: 'Shotgun',
  SNIPER: 'Sniper',
  SPEARGUN_RIFLE: 'Speargun Rifle',
};

const SECONDARY_CATEGORIES = {
  CONTINUOUS_PISTOL: 'Continuous Pistol',
  DUAL_PISTOLS: 'Dual Pistols',
  SHOTGUN_PISTOL: 'Shotgun Pistol',
  SINGLE_PISTOL: 'Single Pistol',
  THROWN_SECONDARY: 'Thrown',
};

module.exports = {
  TYPE,
  TYPES,
  MELEE_CATEGORIES,
  PRIMARY_CATEGORIES,
  SECONDARY_CATEGORIES,
};
