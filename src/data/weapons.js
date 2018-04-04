const constants = require('../constants.js');

const {
  ALERTS,
  ANNIVERSARY,
  BARO_KITEER,
  BIO_LAB,
  CEPHALON_SIMARIS,
  CETUS_BOUNTY_40_60,
  CETUS_BOUNTY_GHOUL,
  CHEM_LAB,
  ENERGY_LAB,
  GRUSTRAG_THREE,
  INVASIONS,
  LOGIN_REWARD,
  MARKET,
  RAZORBACK_ARMADA,
  RELICS,
  STALKER,
  TENNO_LAB,
  UNOBTAINABLE,
  VAULTED,
} = constants.acquisitions;

const {
  THE_SECOND_DREAM,
  THE_WAR_WITHIN,
} = constants.acquisitionQuests;

const {
  ARBITERS_OF_HEXIS,
  CEPHALON_SUDA,
  NEW_LOKA,
  RED_VEIL,
  STEEL_MERIDIAN,
  THE_PERRIN_SEQUENCE,
} = constants.acquisitionFactions;

const {
  DREKAR_TROOPERS,
  HEAVY_GUNNERS,
  KELA_DE_THAYM,
  VOR_AND_KRILL,
  VOR,
} = constants.acquisitionEnemies;

const {
  BOW,
  LAUNCHER,
  SHOTGUN,
  SNIPER,
  SPEARGUN,
  RIFLE,
} = constants.primaryCategories;

const {
  DUAL_PISTOLS,
  SINGLE_PISTOL,
  THROWN,
} = constants.secondaryCategories;

const {
  BLADE_WHIP,
  CLAWS,
  DAGGER,
  DUAL_DAGGERS,
  DUAL_SWORDS,
  FIST,
  GLAIVE,
  GUNBLADE,
  HAMMER,
  HEAVY_BLADE,
  HYBRID,
  MACHETE,
  NIKANA,
  NUNCHAKU,
  POLEARM,
  RAPIER,
  SCYTHE,
  SPARRING,
  STAFF,
  SWORD,
  SWORD_SHEILD,
  TONFA,
  WARFANS,
  WHIP,
} = constants.meleeCategories;

module.exports = {
  primaries: [
    {
      name: 'Argonak',
      acquisition: CHEM_LAB,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Baza',
      acquisition: TENNO_LAB,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Boltor',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 2,
    },
    {
      name: 'Boltor Prime',
      acquisition: VAULTED,
      category: RIFLE,
      masteryRank: 13,
    },
    {
      name: 'Telos Boltor',
      acquisition: ARBITERS_OF_HEXIS,
      category: RIFLE,
      masteryRank: 12,
    },
    {
      name: 'Braton',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 0,
    },
    {
      name: 'MK1-Braton',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 0,
    },
    {
      name: 'Braton Prime',
      acquisition: RELICS,
      category: RIFLE,
      masteryRank: 8,
    },
    {
      name: 'Braton Vandal',
      acquisition: UNOBTAINABLE,
      category: RIFLE,
      masteryRank: 4,
    },
    {
      name: 'Burston',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 0,
    },
    {
      name: 'Burston Prime',
      acquisition: RELICS,
      category: RIFLE,
      masteryRank: 12,
    },
    {
      name: 'Buzlok',
      acquisition: CHEM_LAB,
      category: RIFLE,
      masteryRank: 11,
    },
    {
      name: 'Dera',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 4,
    },
    {
      name: 'Dera Vandal',
      acquisition: INVASIONS,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Gorgon',
      acquisition: HEAVY_GUNNERS,
      category: RIFLE,
      masteryRank: 3,
    },
    {
      name: 'Prisma Gorgon',
      acquisition: BARO_KITEER,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Gorgon Wraith',
      acquisition: RAZORBACK_ARMADA,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Grakata',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 5,
    },
    {
      name: 'Prisma Grakata',
      acquisition: BARO_KITEER,
      category: RIFLE,
      masteryRank: 11,
    },
    {
      name: 'Grinlok',
      acquisition: CHEM_LAB,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Harpak',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 3,
    },
    {
      name: 'Hema',
      acquisition: BIO_LAB,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Hind',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 0,
    },
    {
      name: 'Karak',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 1,
    },
    {
      name: 'Karak Wraith',
      acquisition: INVASIONS,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Latron',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 0,
    },
    {
      name: 'Latron Prime',
      acquisition: RELICS,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Latron Wraith',
      acquisition: INVASIONS,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Mutalist Quanta',
      acquisition: BIO_LAB,
      category: RIFLE,
      masteryRank: 2,
    },
    {
      name: 'Opticor',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 14,
    },
    {
      name: 'Paracyst',
      acquisition: BIO_LAB,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Soma',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 6,
    },
    {
      name: 'Soma Prime',
      acquisition: VAULTED,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Stradavar',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 8,
    },
    {
      name: 'Supra',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 12,
    },
    {
      name: 'Supra Vandal',
      acquisition: UNOBTAINABLE,
      category: RIFLE,
      masteryRank: 14,
    },
    {
      name: 'Sybaris',
      acquisition: TENNO_LAB,
      category: RIFLE,
      masteryRank: 5,
    },
    {
      name: 'Sybaris Prime',
      acquisition: RELICS,
      category: RIFLE,
      masteryRank: 12,
    },
    {
      name: 'Dex Sybaris',
      acquisition: UNOBTAINABLE,
      category: RIFLE,
      masteryRank: 7,
    },
    {
      name: 'Tenora',
      acquisition: TENNO_LAB,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Tetra',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 3,
    },
    {
      name: 'Prisma Tetra',
      acquisition: BARO_KITEER,
      category: RIFLE,
      masteryRank: 4,
    },
    {
      name: 'Tiberon',
      acquisition: MARKET,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Tiberon Prime',
      acquisition: RELICS,
      category: RIFLE,
      masteryRank: 14,
    },
    {
      name: 'Zenith',
      acquisition: LOGIN_REWARD,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Amprex',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Flux Rifle',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 6,
    },
    {
      name: 'Glaxion',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 8,
    },
    {
      name: 'Ignis',
      acquisition: CHEM_LAB,
      category: RIFLE,
      masteryRank: 5,
    },
    {
      name: 'Ignis Wraith',
      acquisition: `${CHEM_LAB} [Limited]`,
      category: RIFLE,
      masteryRank: 9,
    },
    {
      name: 'Quanta',
      acquisition: ENERGY_LAB,
      category: RIFLE,
      masteryRank: 4,
    },
    {
      name: 'Quanta Vandal',
      acquisition: BARO_KITEER,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Quartakk',
      acquisition: CETUS_BOUNTY_GHOUL,
      category: RIFLE,
      masteryRank: 10,
    },
    {
      name: 'Synapse',
      acquisition: BIO_LAB,
      category: RIFLE,
      masteryRank: 11,
    },
    {
      name: 'Arca Plasmor',
      acquisition: ENERGY_LAB,
      category: SHOTGUN,
      masteryRank: 10,
    },
    {
      name: 'Astilla',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 10,
    },
    {
      name: 'Boar',
      acquisition: DREKAR_TROOPERS,
      category: SHOTGUN,
      masteryRank: 2,
    },
    {
      name: 'Boar Prime',
      acquisition: VAULTED,
      category: SHOTGUN,
      masteryRank: 12,
    },
    {
      name: 'Convectrix',
      acquisition: ENERGY_LAB,
      category: SHOTGUN,
      masteryRank: 7,
    },
    {
      name: 'Corinth',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 10,
    },
    {
      name: 'Drakgoon',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 5,
    },
    {
      name: 'Hek',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 4,
    },
    {
      name: 'Vaykor Hek',
      acquisition: STEEL_MERIDIAN,
      category: SHOTGUN,
      masteryRank: 12,
    },
    {
      name: 'Kohm',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 5,
    },
    {
      name: 'Phage',
      acquisition: BIO_LAB,
      category: SHOTGUN,
      masteryRank: 11,
    },
    {
      name: 'Sobek',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 7,
    },
    {
      name: 'Strun',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 1,
    },
    {
      name: 'MK1-Strun',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 0,
    },
    {
      name: 'Strun Wraith',
      acquisition: INVASIONS,
      category: SHOTGUN,
      masteryRank: 10,
    },
    {
      name: 'Tigris',
      acquisition: MARKET,
      category: SHOTGUN,
      masteryRank: 9,
    },
    {
      name: 'Tigris Prime',
      acquisition: RELICS,
      category: SHOTGUN,
      masteryRank: 13,
    },
    {
      name: 'Sancti Tigris',
      acquisition: NEW_LOKA,
      category: SHOTGUN,
      masteryRank: 12,
    },
    {
      name: 'Lanka',
      acquisition: ENERGY_LAB,
      category: SNIPER,
      masteryRank: 10,
    },
    {
      name: 'Rubico',
      acquisition: MARKET,
      category: SNIPER,
      masteryRank: 6,
    },
    {
      name: 'Snipetron',
      acquisition: UNOBTAINABLE,
      category: SNIPER,
      masteryRank: 0,
    },
    {
      name: 'Snipetron Vandal',
      acquisition: INVASIONS,
      category: SNIPER,
      masteryRank: 5,
    },
    {
      name: 'Vectis',
      acquisition: MARKET,
      category: SNIPER,
      masteryRank: 2,
    },
    {
      name: 'Vectis Prime',
      acquisition: VAULTED,
      category: SNIPER,
      masteryRank: 14,
    },
    {
      name: 'Vulkar',
      acquisition: MARKET,
      category: SNIPER,
      masteryRank: 3,
    },
    {
      name: 'Vulkar Wraith',
      acquisition: BARO_KITEER,
      category: SNIPER,
      masteryRank: 7,
    },
    {
      name: 'Attica',
      acquisition: TENNO_LAB,
      category: BOW,
      masteryRank: 7,
    },
    {
      name: 'Cernos',
      acquisition: MARKET,
      category: BOW,
      masteryRank: 6,
    },
    {
      name: 'Cernos Prime',
      acquisition: RELICS,
      category: BOW,
      masteryRank: 12,
    },
    {
      name: 'Rakta Cernos',
      acquisition: RED_VEIL,
      category: BOW,
      masteryRank: 12,
    },
    {
      name: 'Daikyu',
      acquisition: TENNO_LAB,
      category: BOW,
      masteryRank: 10,
    },
    {
      name: 'Dread',
      acquisition: STALKER,
      category: BOW,
      masteryRank: 5,
    },
    {
      name: 'Lenz',
      acquisition: ENERGY_LAB,
      category: BOW,
      masteryRank: 8,
    },
    {
      name: 'Mutalist Cernos',
      acquisition: MARKET,
      category: BOW,
      masteryRank: 7,
    },
    {
      name: 'Paris',
      acquisition: MARKET,
      category: BOW,
      masteryRank: 3,
    },
    {
      name: 'MK1-Paris',
      acquisition: MARKET,
      category: BOW,
      masteryRank: 0,
    },
    {
      name: 'Paris Prime',
      acquisition: RELICS,
      category: BOW,
      masteryRank: 8,
    },
    {
      name: 'Zhuge',
      acquisition: MARKET,
      category: BOW,
      masteryRank: 10,
    },
    {
      name: 'Miter',
      acquisition: VOR_AND_KRILL,
      category: LAUNCHER,
      masteryRank: 6,
    },
    {
      name: 'Ogris',
      acquisition: CHEM_LAB,
      category: LAUNCHER,
      masteryRank: 8,
    },
    {
      name: 'Panthera',
      acquisition: MARKET,
      category: LAUNCHER,
      masteryRank: 7,
    },
    {
      name: 'Penta',
      acquisition: MARKET,
      category: LAUNCHER,
      masteryRank: 6,
    },
    {
      name: 'Secura Penta',
      acquisition: THE_PERRIN_SEQUENCE,
      category: LAUNCHER,
      masteryRank: 12,
    },
    {
      name: 'Simulor',
      acquisition: CEPHALON_SIMARIS,
      category: LAUNCHER,
      masteryRank: 5,
    },
    {
      name: 'Synoid Simulor',
      acquisition: CEPHALON_SUDA,
      category: LAUNCHER,
      masteryRank: 12,
    },
    {
      name: 'Tonkor',
      acquisition: MARKET,
      category: LAUNCHER,
      masteryRank: 5,
    },
    {
      name: 'Torid',
      acquisition: BIO_LAB,
      category: LAUNCHER,
      masteryRank: 4,
    },
    {
      name: 'Zarr',
      acquisition: MARKET,
      category: LAUNCHER,
      masteryRank: 7,
    },
    {
      name: 'Ferrox',
      acquisition: ENERGY_LAB,
      category: SPEARGUN,
      masteryRank: 14,
    },
    {
      name: 'Javlok',
      acquisition: CHEM_LAB,
      category: SPEARGUN,
      masteryRank: 7,
    },
    {
      name: 'Scourge',
      acquisition: TENNO_LAB,
      category: SPEARGUN,
      masteryRank: 6,
    },
  ],
  secondaries: [
    {
      name: 'Acrid',
      acquisition: BIO_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Angstrum',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Prisma Angstrum',
      acquisition: BARO_KITEER,
      category: SINGLE_PISTOL,
      masteryRank: 8,
    },
    {
      name: 'Arca Scisco',
      acquisition: ENERGY_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Azima',
      acquisition: LOGIN_REWARD,
      category: SINGLE_PISTOL,
      masteryRank: 6,
    },
    {
      name: 'Ballistica',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'Ballistica Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 14,
    },
    {
      name: 'Rakta Ballistica',
      acquisition: RED_VEIL,
      category: SINGLE_PISTOL,
      masteryRank: 6,
    },
    {
      name: 'Bolto',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Cestra',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Furis',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'MK1-Furis',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'Knell',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Kraken',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Kulstar',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 5,
    },
    {
      name: 'Lato',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Lato Prime',
      acquisition: UNOBTAINABLE,
      category: SINGLE_PISTOL,
      masteryRank: 14,
    },
    {
      name: 'Lato Vandal',
      acquisition: UNOBTAINABLE,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Lex',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 3,
    },
    {
      name: 'Lex Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 8,
    },
    {
      name: 'Magnus',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Marelok',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Vaykor Marelok',
      acquisition: STEEL_MERIDIAN,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Pandero',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Seer',
      acquisition: VOR,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Sicarus',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 3,
    },
    {
      name: 'Sicarus Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 14,
    },
    {
      name: 'Sonicor',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'Stubba',
      acquisition: CETUS_BOUNTY_GHOUL,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Stug',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'Tysis',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 9,
    },
    {
      name: 'Vasto',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Vasto Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Viper',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Viper Wraith',
      acquisition: BARO_KITEER,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Zakti',
      acquisition: TENNO_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 10,
    },
    {
      name: 'Atomos',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 5,
    },
    {
      name: 'Cycron',
      acquisition: ENERGY_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 8,
    },
    {
      name: 'Embolist',
      acquisition: BIO_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 9,
    },
    {
      name: 'Gammacor',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 2,
    },
    {
      name: 'Synoid Gammacor',
      acquisition: CEPHALON_SUDA,
      category: SINGLE_PISTOL,
      masteryRank: 7,
    },
    {
      name: 'Nukor',
      acquisition: CHEM_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Spectra',
      acquisition: ENERGY_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Brakk',
      acquisition: GRUSTRAG_THREE,
      category: SINGLE_PISTOL,
      masteryRank: 6,
    },
    {
      name: 'Bronco',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 0,
    },
    {
      name: 'Bronco Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 4,
    },
    {
      name: 'Detron',
      acquisition: MARKET,
      category: SINGLE_PISTOL,
      masteryRank: 6,
    },
    {
      name: 'Mara Detron',
      acquisition: BARO_KITEER,
      category: SINGLE_PISTOL,
      masteryRank: 9,
    },
    {
      name: 'Euphona Prime',
      acquisition: RELICS,
      category: SINGLE_PISTOL,
      masteryRank: 14,
    },
    {
      name: 'Kohmak',
      acquisition: CHEM_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 5,
    },
    {
      name: 'Pyrana',
      acquisition: TENNO_LAB,
      category: SINGLE_PISTOL,
      masteryRank: 12,
    },
    {
      name: 'Afuris',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 4,
    },
    {
      name: 'Dex Furis',
      acquisition: ANNIVERSARY,
      category: DUAL_PISTOLS,
      masteryRank: 10,
    },
    {
      name: 'Akbolto',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 0,
    },
    {
      name: 'Akbolto Prime',
      acquisition: RELICS,
      category: DUAL_PISTOLS,
      masteryRank: 13,
    },
    {
      name: 'Telos Akbolto',
      acquisition: ARBITERS_OF_HEXIS,
      category: DUAL_PISTOLS,
      masteryRank: 11,
    },
    {
      name: 'Akbronco',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 2,
    },
    {
      name: 'Akbronco Prime',
      acquisition: RELICS,
      category: DUAL_PISTOLS,
      masteryRank: 10,
    },
    {
      name: 'Akjagara',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 8,
    },
    {
      name: 'Aklato',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 3,
    },
    {
      name: 'Aklex',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 4,
    },
    {
      name: 'Aklex Prime',
      acquisition: VAULTED,
      category: DUAL_PISTOLS,
      masteryRank: 13,
    },
    {
      name: 'Akmagnus',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 12,
    },
    {
      name: 'Aksomati',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 9,
    },
    {
      name: 'Akstiletto',
      acquisition: TENNO_LAB,
      category: DUAL_PISTOLS,
      masteryRank: 8,
    },
    {
      name: 'Akstiletto Prime',
      acquisition: VAULTED,
      category: DUAL_PISTOLS,
      masteryRank: 10,
    },
    {
      name: 'Akvasto',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 8,
    },
    {
      name: 'Akzani',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 4,
    },
    {
      name: 'Dual Cestra',
      acquisition: ENERGY_LAB,
      category: DUAL_PISTOLS,
      masteryRank: 7,
    },
    {
      name: 'Secura Dual Cestra',
      acquisition: THE_PERRIN_SEQUENCE,
      category: DUAL_PISTOLS,
      masteryRank: 10,
    },
    {
      name: 'Dual Toxocyst',
      acquisition: BIO_LAB,
      category: DUAL_PISTOLS,
      masteryRank: 11,
    },
    {
      name: 'Staticor',
      acquisition: ENERGY_LAB,
      category: DUAL_PISTOLS,
      masteryRank: 5,
    },
    {
      name: 'Twin Grakatas',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 9,
    },
    {
      name: 'Twin Gremlins',
      acquisition: VOR_AND_KRILL,
      category: DUAL_PISTOLS,
      masteryRank: 5,
    },
    {
      name: 'Twin Kohmak',
      acquisition: KELA_DE_THAYM,
      category: DUAL_PISTOLS,
      masteryRank: 10,
    },
    {
      name: 'Twin Rogga',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 9,
    },
    {
      name: 'Twin Vipers',
      acquisition: MARKET,
      category: DUAL_PISTOLS,
      masteryRank: 5,
    },
    {
      name: 'Twin Vipers Wraith',
      acquisition: INVASIONS,
      category: DUAL_PISTOLS,
      masteryRank: 7,
    },
    {
      name: 'Castanas',
      acquisition: TENNO_LAB,
      category: THROWN,
      masteryRank: 3,
    },
    {
      name: 'Sancti Castanas',
      acquisition: NEW_LOKA,
      category: THROWN,
      masteryRank: 6,
    },
    {
      name: 'Despair',
      acquisition: STALKER,
      category: THROWN,
      masteryRank: 4,
    },
    {
      name: 'Fusilai',
      acquisition: MARKET,
      category: THROWN,
      masteryRank: 7,
    },
    {
      name: 'Hikou',
      acquisition: MARKET,
      category: THROWN,
      masteryRank: 2,
    },
    {
      name: 'Hikou Prime',
      acquisition: VAULTED,
      category: THROWN,
      masteryRank: 2,
    },
    {
      name: 'Kunai',
      acquisition: MARKET,
      category: THROWN,
      masteryRank: 2,
    },
    {
      name: 'MK1-Kunai',
      acquisition: MARKET,
      category: THROWN,
      masteryRank: 0,
    },
    {
      name: 'Pox',
      acquisition: BIO_LAB,
      category: THROWN,
      masteryRank: 9,
    },
    {
      name: 'Spira',
      acquisition: MARKET,
      category: THROWN,
      masteryRank: 8,
    },
    {
      name: 'Spira Prime',
      acquisition: VAULTED,
      category: THROWN,
      masteryRank: 10,
    },
    {
      name: 'Talons',
      acquisition: TENNO_LAB,
      category: THROWN,
      masteryRank: 8,
    },
  ],
  melees: [
    {
      name: 'Broken War',
      acquisition: THE_SECOND_DREAM,
      category: SWORD,
      masteryRank: 10,
    },
    {
      name: 'Cronus',
      acquisition: VOR,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Dakra Prime',
      acquisition: VAULTED,
      category: SWORD,
      masteryRank: 6,
    },
    {
      name: 'Dark Sword',
      acquisition: ALERTS,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Ether Sword',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Heat Sword',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Jaw Sword',
      acquisition: ALERTS,
      category: SWORD,
      masteryRank: 1,
    },
    {
      name: 'Krohkur',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 5,
    },
    {
      name: 'Mire',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Pangolin Sword',
      acquisition: ALERTS,
      category: SWORD,
      masteryRank: 2,
    },
    {
      name: 'Plasma Sword',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Skana',
      acquisition: MARKET,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Skana Prime',
      acquisition: UNOBTAINABLE,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Prisma Skana',
      acquisition: BARO_KITEER,
      category: SWORD,
      masteryRank: 0,
    },
    {
      name: 'Dex Dakra',
      acquisition: ANNIVERSARY,
      category: DUAL_SWORDS,
      masteryRank: 0,
    },
    {
      name: 'Dual Cleavers',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 3,
    },
    {
      name: 'Prisma Dual Cleavers',
      acquisition: BARO_KITEER,
      category: DUAL_SWORDS,
      masteryRank: 3,
    },
    {
      name: 'Dual Ether',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 0,
    },
    {
      name: 'Dual Heat Swords',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 0,
    },
    {
      name: 'Twin Krohkur',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 6,
    },
    {
      name: 'Dual Ichor',
      acquisition: BIO_LAB,
      category: DUAL_SWORDS,
      masteryRank: 6,
    },
    {
      name: 'Dual Kamas',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 1,
    },
    {
      name: 'Dual Kamas Prime',
      acquisition: VAULTED,
      category: DUAL_SWORDS,
      masteryRank: 6,
    },
    {
      name: 'Dual Raza',
      acquisition: TENNO_LAB,
      category: DUAL_SWORDS,
      masteryRank: 6,
    },
    {
      name: 'Dual Skana',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 0,
    },
    {
      name: 'Dual Zoren',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 2,
    },
    {
      name: 'Nami Skyla',
      acquisition: TENNO_LAB,
      category: DUAL_SWORDS,
      masteryRank: 0,
    },
    {
      name: 'Nami Skyla Prime',
      acquisition: RELICS,
      category: DUAL_SWORDS,
      masteryRank: 11,
    },
    {
      name: 'Twin Basolk',
      acquisition: MARKET,
      category: DUAL_SWORDS,
      masteryRank: 3,
    },
    {
      name: 'Ceramic Dagger',
      acquisition: MARKET,
      category: DAGGER,
      masteryRank: 3,
    },
    {
      name: 'Dark Dagger',
      acquisition: ALERTS,
      category: DAGGER,
      masteryRank: 0,
    },
    {
      name: 'Rakta Dark Dagger',
      acquisition: RED_VEIL,
      category: DAGGER,
      masteryRank: 8,
    },
    {
      name: 'Heat Dagger',
      acquisition: MARKET,
      category: DAGGER,
      masteryRank: 0,
    },
    {
      name: 'Karyst',
      acquisition: MARKET,
      category: DAGGER,
      masteryRank: 0,
    },
    {
      name: 'Sheev',
      acquisition: MARKET,
      category: DAGGER,
      masteryRank: 0,
    },
    {
      name: 'Kama',
      acquisition: MARKET,
      category: MACHETE,
      masteryRank: 1,
    },
    {
      name: 'Gazal Machete',
      acquisition: TENNO_LAB,
      category: MACHETE,
      masteryRank: 5,
    },
    {
      name: 'Machete',
      acquisition: LOGIN_REWARD,
      category: MACHETE,
      masteryRank: 1,
    },
    {
      name: 'Machete Wraith',
      acquisition: BARO_KITEER,
      category: MACHETE,
      masteryRank: 1,
    },
    {
      name: 'Nami Solo',
      acquisition: MARKET,
      category: MACHETE,
      masteryRank: 0,
    },
    {
      name: 'Prova',
      acquisition: ENERGY_LAB,
      category: MACHETE,
      masteryRank: 3,
    },
    {
      name: 'Prova Vandal',
      acquisition: BARO_KITEER,
      category: MACHETE,
      masteryRank: 0,
    },
    {
      name: 'Ether Daggers',
      acquisition: MARKET,
      category: DUAL_DAGGERS,
      masteryRank: 0,
    },
    {
      name: 'Fang',
      acquisition: MARKET,
      category: DUAL_DAGGERS,
      masteryRank: 0,
    },
    {
      name: 'Fang Prime',
      acquisition: RELICS,
      category: DUAL_DAGGERS,
      masteryRank: 0,
    },
    {
      name: 'Okina',
      acquisition: TENNO_LAB,
      category: DUAL_DAGGERS,
      masteryRank: 5,
    },
    {
      name: 'Ankyros',
      acquisition: MARKET,
      category: FIST,
      masteryRank: 0,
    },
    {
      name: 'Ankyros Prime',
      acquisition: VAULTED,
      category: FIST,
      masteryRank: 0,
    },
    {
      name: 'Furax',
      acquisition: MARKET,
      category: FIST,
      masteryRank: 0,
    },
    {
      name: 'MK1-Furax',
      acquisition: MARKET,
      category: FIST,
      masteryRank: 0,
    },
    {
      name: 'Furax Wraith',
      acquisition: CETUS_BOUNTY_40_60,
      category: FIST,
      masteryRank: 0,
    },
    {
      name: 'Tekko',
      acquisition: MARKET,
      category: FIST,
      masteryRank: 2,
    },
    {
      name: 'Ack & Brunt',
      acquisition: CHEM_LAB,
      category: SWORD_SHEILD,
      masteryRank: 3,
    },
    {
      name: 'Sigma & Octantis',
      acquisition: LOGIN_REWARD,
      category: SWORD_SHEILD,
      masteryRank: 0,
    },
    {
      name: 'Silva & Aegis',
      acquisition: TENNO_LAB,
      category: SWORD_SHEILD,
      masteryRank: 0,
    },
    {
      name: 'Silva & Aegis Prime',
      acquisition: RELICS,
      category: SWORD_SHEILD,
      masteryRank: 12,
    },
    {
      name: 'Hirudo',
      acquisition: MARKET,
      category: SPARRING,
      masteryRank: 7,
    },
    {
      name: 'Kogake',
      acquisition: MARKET,
      category: SPARRING,
      masteryRank: 0,
    },
    {
      name: 'Kogake Prime',
      acquisition: RELICS,
      category: SPARRING,
      masteryRank: 10,
    },
    {
      name: 'Obex',
      acquisition: MARKET,
      category: SPARRING,
      masteryRank: 0,
    },
    {
      name: 'Prisma Obex',
      acquisition: BARO_KITEER,
      category: SPARRING,
      masteryRank: 0,
    },
    {
      name: 'Cassowar',
      acquisition: TENNO_LAB,
      category: POLEARM,
      masteryRank: 5,
    },
    {
      name: 'Guandao',
      acquisition: TENNO_LAB,
      category: POLEARM,
      masteryRank: 4,
    },
    {
      name: 'Kesheg',
      acquisition: CHEM_LAB,
      category: POLEARM,
      masteryRank: 7,
    },
    {
      name: 'Lesion',
      acquisition: MARKET,
      category: POLEARM,
      masteryRank: 7,
    },
    {
      name: 'Orthos',
      acquisition: MARKET,
      category: POLEARM,
      masteryRank: 2,
    },
    {
      name: 'Orthos Prime',
      acquisition: RELICS,
      category: POLEARM,
      masteryRank: 2,
    },
    {
      name: 'Serro',
      acquisition: ENERGY_LAB,
      category: POLEARM,
      masteryRank: 2,
    },
    {
      name: 'Sydon',
      acquisition: CHEM_LAB,
      category: POLEARM,
      masteryRank: 2,
    },
    {
      name: 'Vaykor Sydon',
      acquisition: STEEL_MERIDIAN,
      category: POLEARM,
      masteryRank: 8,
    },
    {
      name: 'Tonbo',
      acquisition: TENNO_LAB,
      category: POLEARM,
      masteryRank: 3,
    },
    {
      name: 'Amphis',
      acquisition: MARKET,
      category: STAFF,
      masteryRank: 0,
    },
    {
      name: 'Bo',
      acquisition: MARKET,
      category: STAFF,
      masteryRank: 0,
    },
    {
      name: 'MK1-Bo',
      acquisition: MARKET,
      category: STAFF,
      masteryRank: 0,
    },
    {
      name: 'Bo Prime',
      acquisition: RELICS,
      category: STAFF,
      masteryRank: 5,
    },
    {
      name: 'Broken Scepter',
      acquisition: THE_WAR_WITHIN,
      category: STAFF,
      masteryRank: 5,
    },
    {
      name: 'Tipedo',
      acquisition: MARKET,
      category: STAFF,
      masteryRank: 3,
    },
    {
      name: 'Cerata',
      acquisition: BIO_LAB,
      category: GLAIVE,
      masteryRank: 3,
    },
    {
      name: 'Glaive',
      acquisition: MARKET,
      category: GLAIVE,
      masteryRank: 1,
    },
    {
      name: 'Glaive Prime',
      acquisition: RELICS,
      category: GLAIVE,
      masteryRank: 10,
    },
    {
      name: 'Halikar',
      acquisition: MARKET,
      category: GLAIVE,
      masteryRank: 7,
    },
    {
      name: 'Kestrel',
      acquisition: MARKET,
      category: GLAIVE,
      masteryRank: 0,
    },
    {
      name: 'Orvius',
      acquisition: THE_WAR_WITHIN,
      category: GLAIVE,
      masteryRank: 6,
    },
    {
      name: 'Atterax',
      acquisition: MARKET,
      category: WHIP,
      masteryRank: 2,
    },
    {
      name: 'Lecta',
      acquisition: MARKET,
      category: WHIP,
      masteryRank: 0,
    },
    {
      name: 'Secura Lecta',
      acquisition: THE_PERRIN_SEQUENCE,
      category: WHIP,
      masteryRank: 8,
    },
    {
      name: 'Scoliac',
      acquisition: BIO_LAB,
      category: WHIP,
      masteryRank: 6,
    },
    {
      name: 'Galatine',
      acquisition: MARKET,
      category: HEAVY_BLADE,
      masteryRank: 3,
    },
    {
      name: 'Galatine Prime',
      acquisition: RELICS,
      category: HEAVY_BLADE,
      masteryRank: 13,
    },
    {
      name: 'Gram',
      acquisition: MARKET,
      category: HEAVY_BLADE,
      masteryRank: 2,
    },
    {
      name: 'Scindo',
      acquisition: MARKET,
      category: HEAVY_BLADE,
      masteryRank: 2,
    },
    {
      name: 'Scindo Prime',
      acquisition: VAULTED,
      category: HEAVY_BLADE,
      masteryRank: 4,
    },
    {
      name: 'War',
      acquisition: THE_SECOND_DREAM,
      category: HEAVY_BLADE,
      masteryRank: 10,
    },
    {
      name: 'Zenistar',
      acquisition: LOGIN_REWARD,
      category: HEAVY_BLADE,
      masteryRank: 6,
    },
    {
      name: 'Arca Titron',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 10,
    },
    {
      name: 'Fragor',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 2,
    },
    {
      name: 'Fragor Prime',
      acquisition: VAULTED,
      category: HAMMER,
      masteryRank: 7,
    },
    {
      name: 'Heliocor',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 9,
    },
    {
      name: 'Synoid Heliocor',
      acquisition: CEPHALON_SUDA,
      category: HAMMER,
      masteryRank: 8,
    },
    {
      name: 'Jat Kittag',
      acquisition: CHEM_LAB,
      category: HAMMER,
      masteryRank: 5,
    },
    {
      name: 'Magistar',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 1,
    },
    {
      name: 'Sancti Magistar',
      acquisition: NEW_LOKA,
      category: HAMMER,
      masteryRank: 8,
    },
    {
      name: 'Sibear',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 6,
    },
    {
      name: 'Volnus',
      acquisition: MARKET,
      category: HAMMER,
      masteryRank: 4,
    },
    {
      name: 'Nikana',
      acquisition: TENNO_LAB,
      category: NIKANA,
      masteryRank: 4,
    },
    {
      name: 'Dragon Nikana',
      acquisition: MARKET,
      category: NIKANA,
      masteryRank: 8,
    },
    {
      name: 'Nikana Prime',
      acquisition: VAULTED,
      category: NIKANA,
      masteryRank: 0,
    },
    {
      name: 'Ripkas',
      acquisition: MARKET,
      category: CLAWS,
      masteryRank: 3,
    },
    {
      name: 'Venka',
      acquisition: TENNO_LAB,
      category: CLAWS,
      masteryRank: 3,
    },
    {
      name: 'Venka Prime',
      acquisition: RELICS,
      category: CLAWS,
      masteryRank: 8,
    },
    {
      name: 'Anku',
      acquisition: TENNO_LAB,
      category: SCYTHE,
      masteryRank: 3,
    },
    {
      name: 'Caustacyst',
      acquisition: BIO_LAB,
      category: SCYTHE,
      masteryRank: 7,
    },
    {
      name: 'Ether Reaper',
      acquisition: MARKET,
      category: SCYTHE,
      masteryRank: 3,
    },
    {
      name: 'Hate',
      acquisition: STALKER,
      category: SCYTHE,
      masteryRank: 2,
    },
    {
      name: 'Reaper Prime',
      acquisition: RELICS,
      category: SCYTHE,
      masteryRank: 2,
    },
    {
      name: 'Boltace',
      acquisition: MARKET,
      category: TONFA,
      masteryRank: 2,
    },
    {
      name: 'Telos Boltace',
      acquisition: ARBITERS_OF_HEXIS,
      category: TONFA,
      masteryRank: 8,
    },
    {
      name: 'Kronen',
      acquisition: MARKET,
      category: TONFA,
      masteryRank: 3,
    },
    {
      name: 'Kronen Prime',
      acquisition: RELICS,
      category: TONFA,
      masteryRank: 8,
    },
    {
      name: 'Ohma',
      acquisition: MARKET,
      category: TONFA,
      masteryRank: 8,
    },
    {
      name: 'Redeemer',
      acquisition: MARKET,
      category: GUNBLADE,
      masteryRank: 4,
    },
    {
      name: 'Sarpa',
      acquisition: MARKET,
      category: GUNBLADE,
      masteryRank: 8,
    },
    {
      name: 'Ninkondi',
      acquisition: MARKET,
      category: NUNCHAKU,
      masteryRank: 0,
    },
    {
      name: 'Shaku',
      acquisition: TENNO_LAB,
      category: NUNCHAKU,
      masteryRank: 0,
    },
    {
      name: 'Jat Kusar',
      acquisition: CHEM_LAB,
      category: BLADE_WHIP,
      masteryRank: 10,
    },
    {
      name: 'Lacera',
      acquisition: TENNO_LAB,
      category: BLADE_WHIP,
      masteryRank: 7,
    },
    {
      name: 'Mios',
      acquisition: BIO_LAB,
      category: BLADE_WHIP,
      masteryRank: 8,
    },
    {
      name: 'Dark Split-Sword',
      acquisition: TENNO_LAB,
      category: HYBRID,
      masteryRank: 5,
    },
    {
      name: 'Destreza',
      acquisition: MARKET,
      category: RAPIER,
      masteryRank: 7,
    },
    {
      name: 'Endura',
      acquisition: TENNO_LAB,
      category: RAPIER,
      masteryRank: 7,
    },
    {
      name: 'Gunsen',
      acquisition: TENNO_LAB,
      category: WARFANS,
      masteryRank: 10,
    },
  ],
};
