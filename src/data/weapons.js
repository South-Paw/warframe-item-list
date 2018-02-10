const constants = require('../constants.js');

const {
  CHEM_LAB, MARKET, VAULTED, RELICS, UNOBTAINABLE, ENERGY_LAB, INVASIONS, BARO_KITEER,
  RAZORBACK_ARMADA, BIO_LAB, TENNO_LAB, LOGIN_REWARD, STALKER, CEPHALON_SIMARIS, GRUSTRAG_THREE,
  ANNIVERSARY, ALERTS, CETUS_BOUNTY_40_60, CETUS_BOUNTY_GHOUL,
} = constants.acquisition;

const {
  THE_SECOND_DREAM, THE_WAR_WITHIN,
} = constants.acquisitionQuests;

const {
  ARBITERS_OF_HEXIS, STEEL_MERIDIAN, NEW_LOKA, RED_VEIL, THE_PERRIN_SEQUENCE, CEPHALON_SUDA,
} = constants.acquisitionFactions;

const {
  HEAVY_GUNNERS, DREKAR_TROOPERS, VOR_AND_KRILL, VOR, KELA_DE_THAYM,
} = constants.acquisitionEnemies;

const {
  RIFLE, SHOTGUN, SNIPER, BOW, LAUNCHER, SPEARGUN,
} = constants.primaryCategory;

const {
  SINGLE_PISTOL, DUAL_PISTOLS, THROWN,
} = constants.secondaryCategory;

const {
  SWORD, DUAL_SWORDS, DAGGER, MACHETE, DUAL_DAGGERS, FIST, SWORD_SHEILD, SPARRING, POLEARM, STAFF,
  GLAIVE, WHIP, HEAVY_BLADE, HAMMER, NIKANA, CLAWS, SCYTHE, TONFA, GUNBLADE, NUNCHAKU, BLADE_WHIP,
  HYBRID, RAPIER, WARFANS,
} = constants.meleeCategory;

module.exports = {
  primary: [
    { name: 'Argonak', acquisition: CHEM_LAB, category: RIFLE, masteryRank: 7 },
    { name: 'Baza', acquisition: TENNO_LAB, category: RIFLE, masteryRank: 7 },
    { name: 'Boltor', acquisition: MARKET, category: RIFLE, masteryRank: 2 },
    { name: 'Boltor Prime', acquisition: VAULTED, category: RIFLE, masteryRank: 2 },
    { name: 'Telos Boltor', acquisition: ARBITERS_OF_HEXIS, category: RIFLE, masteryRank: 12 },
    { name: 'Braton', acquisition: MARKET, category: RIFLE },
    { name: 'MK1-Braton', acquisition: MARKET, category: RIFLE },
    { name: 'Braton Prime', acquisition: RELICS, category: RIFLE },
    { name: 'Braton Vandal', acquisition: UNOBTAINABLE, category: RIFLE },
    { name: 'Burston', acquisition: MARKET, category: RIFLE },
    { name: 'Burston Prime', acquisition: RELICS, category: RIFLE },
    { name: 'Buzlok', acquisition: CHEM_LAB, category: RIFLE, masteryRank: 9 },
    { name: 'Dera', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 4 },
    { name: 'Dera Vandal', acquisition: INVASIONS, category: RIFLE, masteryRank: 4 },
    { name: 'Gorgon', acquisition: HEAVY_GUNNERS, category: RIFLE, masteryRank: 3 },
    { name: 'Prisma Gorgon', acquisition: BARO_KITEER, category: RIFLE, masteryRank: 3 },
    { name: 'Gorgon Wraith', acquisition: RAZORBACK_ARMADA, category: RIFLE, masteryRank: 3 },
    { name: 'Grakata', acquisition: MARKET, category: RIFLE },
    { name: 'Prisma Grakata', acquisition: BARO_KITEER, category: RIFLE },
    { name: 'Grinlok', acquisition: CHEM_LAB, category: RIFLE, masteryRank: 5 },
    { name: 'Harpak', acquisition: MARKET, category: RIFLE, masteryRank: 3 },
    { name: 'Hema', acquisition: BIO_LAB, category: RIFLE, masteryRank: 7 },
    { name: 'Hind', acquisition: MARKET, category: RIFLE },
    { name: 'Karak', acquisition: MARKET, category: RIFLE },
    { name: 'Karak Wraith', acquisition: INVASIONS, category: RIFLE },
    { name: 'Latron', acquisition: MARKET, category: RIFLE },
    { name: 'Latron Prime', acquisition: RELICS, category: RIFLE },
    { name: 'Latron Wraith', acquisition: INVASIONS, category: RIFLE },
    { name: 'Mutalist Quanta', acquisition: BIO_LAB, category: RIFLE, masteryRank: 2 },
    { name: 'Opticor', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 6 },
    { name: 'Paracyst', acquisition: BIO_LAB, category: RIFLE, masteryRank: 5 },
    { name: 'Soma', acquisition: MARKET, category: RIFLE, masteryRank: 6 },
    { name: 'Soma Prime', acquisition: VAULTED, category: RIFLE, masteryRank: 6 },
    { name: 'Stradavar', acquisition: MARKET, category: RIFLE, masteryRank: 8 },
    { name: 'Supra', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 7 },
    { name: 'Supra Vandal', acquisition: UNOBTAINABLE, category: RIFLE, masteryRank: 10 },
    { name: 'Sybaris', acquisition: TENNO_LAB, category: RIFLE, masteryRank: 5 },
    { name: 'Sybaris Prime', acquisition: RELICS, category: RIFLE, masteryRank: 12 },
    { name: 'Dex Sybaris', acquisition: UNOBTAINABLE, category: RIFLE },
    { name: 'Tenora', acquisition: TENNO_LAB, category: RIFLE, masteryRank: 10 },
    { name: 'Tetra', acquisition: MARKET, category: RIFLE, masteryRank: 3 },
    { name: 'Prisma Tetra', acquisition: BARO_KITEER, category: RIFLE, masteryRank: 4 },
    { name: 'Tiberon', acquisition: MARKET, category: RIFLE, masteryRank: 4 },
    { name: 'Zenith', acquisition: LOGIN_REWARD, category: RIFLE, masteryRank: 5 },
    { name: 'Amprex', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 5 },
    { name: 'Flux Rifle', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 6 },
    { name: 'Glaxion', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 6 },
    { name: 'Ignis', acquisition: CHEM_LAB, category: RIFLE, masteryRank: 4 },
    { name: 'Ignis Wraith', acquisition: `${CHEM_LAB} [Limited]`, category: RIFLE, masteryRank: 6 },
    { name: 'Quanta', acquisition: ENERGY_LAB, category: RIFLE, masteryRank: 4 },
    { name: 'Quanta Vandal', acquisition: BARO_KITEER, category: RIFLE, masteryRank: 4 },
    { name: 'Quartakk', acquisition: CETUS_BOUNTY_GHOUL, category: RIFLE, masteryRank: 9 },
    { name: 'Synapse', acquisition: BIO_LAB, category: RIFLE, masteryRank: 6 },
    { name: 'Arca Plasmor', acquisition: ENERGY_LAB, category: SHOTGUN, masteryRank: 10 },
    { name: 'Astilla', acquisition: MARKET, category: SHOTGUN, masteryRank: 7 },
    { name: 'Boar', acquisition: DREKAR_TROOPERS, category: SHOTGUN, masteryRank: 2 },
    { name: 'Boar Prime', acquisition: VAULTED, category: SHOTGUN, masteryRank: 2 },
    { name: 'Convectrix', acquisition: ENERGY_LAB, category: SHOTGUN, masteryRank: 2 },
    { name: 'Corinth', acquisition: MARKET, category: SHOTGUN, masteryRank: 10 },
    { name: 'Drakgoon', acquisition: MARKET, category: SHOTGUN, masteryRank: 3 },
    { name: 'Hek', acquisition: MARKET, category: SHOTGUN, masteryRank: 4 },
    { name: 'Vaykor Hek', acquisition: STEEL_MERIDIAN, category: SHOTGUN, masteryRank: 12 },
    { name: 'Kohm', acquisition: MARKET, category: SHOTGUN, masteryRank: 2 },
    { name: 'Phage', acquisition: BIO_LAB, category: SHOTGUN, masteryRank: 6 },
    { name: 'Sobek', acquisition: MARKET, category: SHOTGUN, masteryRank: 4 },
    { name: 'Strun', acquisition: MARKET, category: SHOTGUN, masteryRank: 1 },
    { name: 'MK1-Strun', acquisition: MARKET, category: SHOTGUN },
    { name: 'Strun Wraith', acquisition: INVASIONS, category: SHOTGUN },
    { name: 'Tigris', acquisition: MARKET, category: SHOTGUN, masteryRank: 4 },
    { name: 'Tigris Prime', acquisition: RELICS, category: SHOTGUN, masteryRank: 13 },
    { name: 'Sancti Tigris', acquisition: NEW_LOKA, category: SHOTGUN, masteryRank: 12 },
    { name: 'Lanka', acquisition: ENERGY_LAB, category: SNIPER, masteryRank: 7 },
    { name: 'Rubico', acquisition: MARKET, category: SNIPER, masteryRank: 5 },
    { name: 'Snipetron', acquisition: UNOBTAINABLE, category: SNIPER },
    { name: 'Snipetron Vandal', acquisition: INVASIONS, category: SNIPER },
    { name: 'Vectis', acquisition: MARKET, category: SNIPER, masteryRank: 3 },
    { name: 'Vectis Prime', acquisition: VAULTED, category: SNIPER },
    { name: 'Vulkar', acquisition: MARKET, category: SNIPER },
    { name: 'Vulkar Wraith', acquisition: BARO_KITEER, category: SNIPER },
    { name: 'Attica', acquisition: TENNO_LAB, category: BOW },
    { name: 'Cernos', acquisition: MARKET, category: BOW },
    { name: 'Cernos Prime', acquisition: RELICS, category: BOW },
    { name: 'Rakta Cernos', acquisition: RED_VEIL, category: BOW, masteryRank: 12 },
    { name: 'Daikyu', acquisition: TENNO_LAB, category: BOW },
    { name: 'Dread', acquisition: STALKER, category: BOW },
    { name: 'Lenz', acquisition: ENERGY_LAB, category: BOW, masteryRank: 8 },
    { name: 'Mutalist Cernos', acquisition: MARKET, category: BOW, masteryRank: 5 },
    { name: 'Paris', acquisition: MARKET, category: BOW },
    { name: 'MK1-Paris', acquisition: MARKET, category: BOW },
    { name: 'Paris Prime', acquisition: RELICS, category: BOW, masteryRank: 4 },
    { name: 'Zhuge', acquisition: MARKET, category: BOW },
    { name: 'Miter', acquisition: VOR_AND_KRILL, category: LAUNCHER, masteryRank: 6 },
    { name: 'Ogris', acquisition: CHEM_LAB, category: LAUNCHER, masteryRank: 8 },
    { name: 'Panthera', acquisition: MARKET, category: LAUNCHER, masteryRank: 7 },
    { name: 'Penta', acquisition: MARKET, category: LAUNCHER, masteryRank: 6 },
    { name: 'Secura Penta', acquisition: THE_PERRIN_SEQUENCE, category: LAUNCHER, masteryRank: 12 },
    { name: 'Simulor', acquisition: CEPHALON_SIMARIS, category: LAUNCHER, masteryRank: 5 },
    { name: 'Synoid Simulor', acquisition: CEPHALON_SUDA, category: LAUNCHER, masteryRank: 12 },
    { name: 'Tonkor', acquisition: MARKET, category: LAUNCHER, masteryRank: 5 },
    { name: 'Torid', acquisition: BIO_LAB, category: LAUNCHER, masteryRank: 4 },
    { name: 'Zarr', acquisition: MARKET, category: LAUNCHER, masteryRank: 7 },
    { name: 'Ferrox', acquisition: ENERGY_LAB, category: SPEARGUN, masteryRank: 7 },
    { name: 'Javlok', acquisition: CHEM_LAB, category: SPEARGUN, masteryRank: 6 },
    { name: 'Scourge', acquisition: TENNO_LAB, category: SPEARGUN, masteryRank: 6 },
  ],
  secondary: [
    { name: 'Acrid', acquisition: BIO_LAB, category: SINGLE_PISTOL, masteryRank: 7 },
    { name: 'Angstrum', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Prisma Angstrum', acquisition: BARO_KITEER, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Arca Scisco', acquisition: ENERGY_LAB, category: SINGLE_PISTOL, masteryRank: 10 },
    { name: 'Azima', acquisition: LOGIN_REWARD, category: SINGLE_PISTOL, masteryRank: 5 },
    { name: 'Ballistica', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'Ballistica Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 7 },
    { name: 'Rakta Ballistica', acquisition: RED_VEIL, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Bolto', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Cestra', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Furis', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'MK1-Furis', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'Knell', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 10 },
    { name: 'Kraken', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Kulstar', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Lato', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Lato Prime', acquisition: UNOBTAINABLE, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Lato Vandal', acquisition: UNOBTAINABLE, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Lex', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 3 },
    { name: 'Lex Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 5 },
    { name: 'Magnus', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Marelok', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 5 },
    { name: 'Vaykor Marelok', acquisition: STEEL_MERIDIAN, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Pandero', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 7 },
    { name: 'Seer', acquisition: VOR, category: SINGLE_PISTOL },
    { name: 'Sicarus', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 3 },
    { name: 'Sicarus Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 7 },
    { name: 'Sonicor', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'Stubba', acquisition: CETUS_BOUNTY_GHOUL, category: SINGLE_PISTOL, masteryRank: 5 },
    { name: 'Stug', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'Tysis', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Vasto', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Vasto Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 3 },
    { name: 'Viper', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Viper Wraith', acquisition: BARO_KITEER, category: SINGLE_PISTOL },
    { name: 'Zakti', acquisition: TENNO_LAB, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Atomos', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Cycron', acquisition: ENERGY_LAB, category: SINGLE_PISTOL, masteryRank: 9 },
    { name: 'Embolist', acquisition: BIO_LAB, category: SINGLE_PISTOL, masteryRank: 8 },
    { name: 'Gammacor', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 2 },
    { name: 'Synoid Gammacor', acquisition: CEPHALON_SUDA, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Nukor', acquisition: CHEM_LAB, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Spectra', acquisition: ENERGY_LAB, category: SINGLE_PISTOL, masteryRank: 4 },
    { name: 'Brakk', acquisition: GRUSTRAG_THREE, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Bronco', acquisition: MARKET, category: SINGLE_PISTOL },
    { name: 'Bronco Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 10 },
    { name: 'Detron', acquisition: MARKET, category: SINGLE_PISTOL, masteryRank: 6 },
    { name: 'Mara Detron', acquisition: BARO_KITEER, category: SINGLE_PISTOL, masteryRank: 9 },
    { name: 'Euphona Prime', acquisition: RELICS, category: SINGLE_PISTOL, masteryRank: 14 },
    { name: 'Kohmak', acquisition: CHEM_LAB, category: SINGLE_PISTOL, masteryRank: 10 },
    { name: 'Pyrana', acquisition: TENNO_LAB, category: SINGLE_PISTOL, masteryRank: 12 },
    { name: 'Afuris', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 4 },
    { name: 'Dex Furis', acquisition: ANNIVERSARY, category: DUAL_PISTOLS, masteryRank: 5 },
    { name: 'Akbolto', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Akbolto Prime', acquisition: RELICS, category: DUAL_PISTOLS, masteryRank: 13 },
    { name: 'Telos Akbolto', acquisition: ARBITERS_OF_HEXIS, category: DUAL_PISTOLS, masteryRank: 6 },
    { name: 'Akbronco', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 2 },
    { name: 'Akbronco Prime', acquisition: RELICS, category: DUAL_PISTOLS, masteryRank: 11 },
    { name: 'Akjagara', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 3 },
    { name: 'Aklato', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 1 },
    { name: 'Aklex', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 4 },
    { name: 'Aklex Prime', acquisition: VAULTED, category: DUAL_PISTOLS, masteryRank: 8 },
    { name: 'Akmagnus', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Aksomati', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 6 },
    { name: 'Akstiletto', acquisition: TENNO_LAB, category: DUAL_PISTOLS, masteryRank: 2 },
    { name: 'Akstiletto Prime', acquisition: RELICS, category: DUAL_PISTOLS, masteryRank: 5 },
    { name: 'Akvasto', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Akzani', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Dual Cestra', acquisition: ENERGY_LAB, category: DUAL_PISTOLS, masteryRank: 4 },
    { name: 'Secura Dual Cestra', acquisition: THE_PERRIN_SEQUENCE, category: DUAL_PISTOLS, masteryRank: 6 },
    { name: 'Dual Toxocyst', acquisition: BIO_LAB, category: DUAL_PISTOLS, masteryRank: 8 },
    { name: 'Staticor', acquisition: ENERGY_LAB, category: DUAL_PISTOLS, masteryRank: 5 },
    { name: 'Twin Grakatas', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Twin Gremlins', acquisition: VOR_AND_KRILL, category: DUAL_PISTOLS },
    { name: 'Twin Kohmak', acquisition: KELA_DE_THAYM, category: DUAL_PISTOLS, masteryRank: 6 },
    { name: 'Twin Rogga', acquisition: MARKET, category: DUAL_PISTOLS, masteryRank: 8 },
    { name: 'Twin Vipers', acquisition: MARKET, category: DUAL_PISTOLS },
    { name: 'Twin Vipers Wraith', acquisition: INVASIONS, category: DUAL_PISTOLS },
    { name: 'Castanas', acquisition: TENNO_LAB, category: THROWN, masteryRank: 3 },
    { name: 'Sancti Castanas', acquisition: NEW_LOKA, category: THROWN, masteryRank: 6 },
    { name: 'Despair', acquisition: STALKER, category: THROWN },
    { name: 'Fusilai', acquisition: MARKET, category: THROWN, masteryRank: 5 },
    { name: 'Hikou', acquisition: MARKET, category: THROWN, masteryRank: 2 },
    { name: 'Hikou Prime', acquisition: VAULTED, category: THROWN, masteryRank: 2 },
    { name: 'Kunai', acquisition: MARKET, category: THROWN, masteryRank: 2 },
    { name: 'MK1-Kunai', acquisition: MARKET, category: THROWN },
    { name: 'Pox', acquisition: BIO_LAB, category: THROWN, masteryRank: 6 },
    { name: 'Spira', acquisition: MARKET, category: THROWN, masteryRank: 1 },
    { name: 'Spira Prime', acquisition: VAULTED, category: THROWN, masteryRank: 3 },
    { name: 'Talons', acquisition: TENNO_LAB, category: THROWN, masteryRank: 5 },
  ],
  melee: [
    { name: 'Broken War', acquisition: THE_SECOND_DREAM, category: SWORD, masteryRank: 10 },
    { name: 'Cronus', acquisition: VOR, category: SWORD },
    { name: 'Dakra Prime', acquisition: VAULTED, category: SWORD, masteryRank: 6 },
    { name: 'Dark Sword', acquisition: ALERTS, category: SWORD },
    { name: 'Ether Sword', acquisition: MARKET, category: SWORD },
    { name: 'Heat Sword', acquisition: MARKET, category: SWORD },
    { name: 'Jaw Sword', acquisition: ALERTS, category: SWORD, masteryRank: 1 },
    { name: 'Krohkur', acquisition: MARKET, category: SWORD, masteryRank: 5 },
    { name: 'Mire', acquisition: MARKET, category: SWORD },
    { name: 'Pangolin Sword', acquisition: ALERTS, category: SWORD, masteryRank: 2 },
    { name: 'Plasma Sword', acquisition: MARKET, category: SWORD },
    { name: 'Skana', acquisition: MARKET, category: SWORD },
    { name: 'Skana Prime', acquisition: UNOBTAINABLE, category: SWORD },
    { name: 'Prisma Skana', acquisition: BARO_KITEER, category: SWORD },
    { name: 'Dex Dakra', acquisition: ANNIVERSARY, category: DUAL_SWORDS },
    { name: 'Dual Cleavers', acquisition: MARKET, category: DUAL_SWORDS, mastery_Rank: 3 },
    { name: 'Prisma Dual Cleavers', acquisition: BARO_KITEER, category: DUAL_SWORDS, mastery_Rank: 3 },
    { name: 'Dual Ether', acquisition: MARKET, category: DUAL_SWORDS },
    { name: 'Dual Heat Swords', acquisition: MARKET, category: DUAL_SWORDS },
    { name: 'Twin Krohkur', acquisition: MARKET, category: DUAL_SWORDS, mastery_Rank: 6 },
    { name: 'Dual Ichor', acquisition: BIO_LAB, category: DUAL_SWORDS, mastery_Rank: 6 },
    { name: 'Dual Kamas', acquisition: MARKET, category: DUAL_SWORDS, mastery_Rank: 1 },
    { name: 'Dual Kamas Prime', acquisition: VAULTED, category: DUAL_SWORDS, mastery_Rank: 6 },
    { name: 'Dual Raza', acquisition: TENNO_LAB, category: DUAL_SWORDS, mastery_Rank: 6 },
    { name: 'Dual Skana', acquisition: MARKET, category: DUAL_SWORDS },
    { name: 'Dual Zoren', acquisition: MARKET, category: DUAL_SWORDS, mastery_Rank: 2 },
    { name: 'Nami Skyla', acquisition: TENNO_LAB, category: DUAL_SWORDS },
    { name: 'Nami Skyla Prime', acquisition: RELICS, category: DUAL_SWORDS, mastery_Rank: 11 },
    { name: 'Twin Basolk', acquisition: MARKET, category: DUAL_SWORDS, mastery_Rank: 3 },
    { name: 'Ceramic Dagger', acquisition: MARKET, category: DAGGER, mastery_Rank: 3 },
    { name: 'Dark Dagger', acquisition: ALERTS, category: DAGGER },
    { name: 'Rakta Dark Dagger', acquisition: RED_VEIL, category: DAGGER, mastery_Rank: 8 },
    { name: 'Heat Dagger', acquisition: MARKET, category: DAGGER },
    { name: 'Karyst', acquisition: MARKET, category: DAGGER },
    { name: 'Sheev', acquisition: MARKET, category: DAGGER },
    { name: 'Kama', acquisition: MARKET, category: MACHETE, mastery_Rank: 1 },
    { name: 'Gazal Machete', acquisition: TENNO_LAB, category: MACHETE, mastery_Rank: 5 },
    { name: 'Machete', acquisition: LOGIN_REWARD, category: MACHETE, mastery_Rank: 1 },
    { name: 'Machete Wraith', acquisition: BARO_KITEER, category: MACHETE, mastery_Rank: 1 },
    { name: 'Nami Solo', acquisition: MARKET, category: MACHETE },
    { name: 'Prova', acquisition: ENERGY_LAB, category: MACHETE, mastery_Rank: 3 },
    { name: 'Prova Vandal', acquisition: BARO_KITEER, category: MACHETE },
    { name: 'Ether Daggers', acquisition: MARKET, category: DUAL_DAGGERS },
    { name: 'Fang', acquisition: MARKET, category: DUAL_DAGGERS },
    { name: 'Fang Prime', acquisition: RELICS, category: DUAL_DAGGERS },
    { name: 'Okina', acquisition: TENNO_LAB, category: DUAL_DAGGERS, mastery_Rank: 5 },
    { name: 'Ankyros', acquisition: MARKET, category: FIST },
    { name: 'Ankyros Prime', acquisition: VAULTED, category: FIST },
    { name: 'Furax', acquisition: MARKET, category: FIST },
    { name: 'MK1-Furax', acquisition: MARKET, category: FIST },
    { name: 'Furax Wraith', acquisition: CETUS_BOUNTY_40_60, category: FIST },
    { name: 'Tekko', acquisition: MARKET, category: FIST, mastery_Rank: 2 },
    { name: 'Ack & Brunt', acquisition: CHEM_LAB, category: SWORD_SHEILD, mastery_Rank: 3 },
    { name: 'Sigma & Octantis', acquisition: LOGIN_REWARD, category: SWORD_SHEILD },
    { name: 'Silva & Aegis', acquisition: TENNO_LAB, category: SWORD_SHEILD },
    { name: 'Silva & Aegis Prime', acquisition: RELICS, category: SWORD_SHEILD, mastery_Rank: 12 },
    { name: 'Hirudo', acquisition: MARKET, category: SPARRING, mastery_Rank: 7 },
    { name: 'Kogake', acquisition: MARKET, category: SPARRING },
    { name: 'Kogake Prime', acquisition: RELICS, category: SPARRING, mastery_Rank: 10 },
    { name: 'Obex', acquisition: MARKET, category: SPARRING },
    { name: 'Prisma Obex', acquisition: BARO_KITEER, category: SPARRING },
    { name: 'Cassowar', acquisition: TENNO_LAB, category: POLEARM, mastery_Rank: 5 },
    { name: 'Guandao', acquisition: TENNO_LAB, category: POLEARM, mastery_Rank: 4 },
    { name: 'Kesheg', acquisition: CHEM_LAB, category: POLEARM, mastery_Rank: 7 },
    { name: 'Lesion', acquisition: MARKET, category: POLEARM, mastery_Rank: 7 },
    { name: 'Orthos', acquisition: MARKET, category: POLEARM, mastery_Rank: 2 },
    { name: 'Orthos Prime', acquisition: RELICS, category: POLEARM, mastery_Rank: 2 },
    { name: 'Serro', acquisition: ENERGY_LAB, category: POLEARM, mastery_Rank: 2 },
    { name: 'Sydon', acquisition: CHEM_LAB, category: POLEARM, mastery_Rank: 2 },
    { name: 'Vaykor Sydon', acquisition: STEEL_MERIDIAN, category: POLEARM, mastery_Rank: 8 },
    { name: 'Tonbo', acquisition: TENNO_LAB, category: POLEARM, mastery_Rank: 3 },
    { name: 'Amphis', acquisition: MARKET, category: STAFF },
    { name: 'Bo', acquisition: MARKET, category: STAFF },
    { name: 'MK1-Bo', acquisition: MARKET, category: STAFF },
    { name: 'Bo Prime', acquisition: RELICS, category: STAFF, mastery_Rank: 5 },
    { name: 'Broken Scepter', acquisition: THE_WAR_WITHIN, category: STAFF, mastery_Rank: 5 },
    { name: 'Tipedo', acquisition: MARKET, category: STAFF, mastery_Rank: 3 },
    { name: 'Cerata', acquisition: BIO_LAB, category: GLAIVE, mastery_Rank: 3 },
    { name: 'Glaive', acquisition: MARKET, category: GLAIVE, mastery_Rank: 1 },
    { name: 'Glaive Prime', acquisition: RELICS, category: GLAIVE, mastery_Rank: 10 },
    { name: 'Halikar', acquisition: MARKET, category: GLAIVE, mastery_Rank: 7 },
    { name: 'Kestrel', acquisition: MARKET, category: GLAIVE },
    { name: 'Orvius', acquisition: THE_WAR_WITHIN, category: GLAIVE, mastery_Rank: 6 },
    { name: 'Atterax', acquisition: MARKET, category: WHIP, mastery_Rank: 2 },
    { name: 'Lecta', acquisition: MARKET, category: WHIP },
    { name: 'Secura Lecta', acquisition: THE_PERRIN_SEQUENCE, category: WHIP, mastery_Rank: 8 },
    { name: 'Scoliac', acquisition: BIO_LAB, category: WHIP, mastery_Rank: 6 },
    { name: 'Galatine', acquisition: MARKET, category: HEAVY_BLADE, mastery_Rank: 3 },
    { name: 'Galatine Prime', acquisition: RELICS, category: HEAVY_BLADE, mastery_Rank: 13 },
    { name: 'Gram', acquisition: MARKET, category: HEAVY_BLADE, mastery_Rank: 2 },
    { name: 'Scindo', acquisition: MARKET, category: HEAVY_BLADE, mastery_Rank: 2 },
    { name: 'Scindo Prime', acquisition: VAULTED, category: HEAVY_BLADE, mastery_Rank: 4 },
    { name: 'War', acquisition: THE_SECOND_DREAM, category: HEAVY_BLADE, mastery_Rank: 10 },
    { name: 'Zenistar', acquisition: LOGIN_REWARD, category: HEAVY_BLADE, mastery_Rank: 6 },
    { name: 'Arca Titron', acquisition: MARKET, category: HAMMER, mastery_Rank: 10 },
    { name: 'Fragor', acquisition: MARKET, category: HAMMER, mastery_Rank: 2 },
    { name: 'Fragor Prime', acquisition: RELICS, category: HAMMER, mastery_Rank: 7 },
    { name: 'Heliocor', acquisition: MARKET, category: HAMMER, mastery_Rank: 9 },
    { name: 'Synoid Heliocor', acquisition: CEPHALON_SUDA, category: HAMMER, mastery_Rank: 8 },
    { name: 'Jat Kittag', acquisition: CHEM_LAB, category: HAMMER, mastery_Rank: 5 },
    { name: 'Magistar', acquisition: MARKET, category: HAMMER, mastery_Rank: 1 },
    { name: 'Sancti Magistar', acquisition: NEW_LOKA, category: HAMMER, mastery_Rank: 8 },
    { name: 'Sibear', acquisition: MARKET, category: HAMMER, mastery_Rank: 6 },
    { name: 'Volnus', acquisition: MARKET, category: HAMMER, mastery_Rank: 4 },
    { name: 'Nikana', acquisition: TENNO_LAB, category: NIKANA, mastery_Rank: 4 },
    { name: 'Dragon Nikana', acquisition: MARKET, category: NIKANA, mastery_Rank: 8 },
    { name: 'Nikana Prime', acquisition: VAULTED, category: NIKANA },
    { name: 'Ripkas', acquisition: MARKET, category: CLAWS, mastery_Rank: 3 },
    { name: 'Venka', acquisition: TENNO_LAB, category: CLAWS, mastery_Rank: 3 },
    { name: 'Venka Prime', acquisition: RELICS, category: CLAWS, mastery_Rank: 8 },
    { name: 'Anku', acquisition: TENNO_LAB, category: SCYTHE, mastery_Rank: 3 },
    { name: 'Caustacyst', acquisition: BIO_LAB, category: SCYTHE, mastery_Rank: 7 },
    { name: 'Ether Reaper', acquisition: MARKET, category: SCYTHE, mastery_Rank: 3 },
    { name: 'Hate', acquisition: STALKER, category: SCYTHE, mastery_Rank: 2 },
    { name: 'Reaper Prime', acquisition: RELICS, category: SCYTHE, mastery_Rank: 2 },
    { name: 'Boltace', acquisition: MARKET, category: TONFA, mastery_Rank: 2 },
    { name: 'Telos Boltace', acquisition: ARBITERS_OF_HEXIS, category: TONFA, mastery_Rank: 8 },
    { name: 'Kronen', acquisition: MARKET, category: TONFA, mastery_Rank: 3 },
    { name: 'Ohma', acquisition: MARKET, category: TONFA, mastery_Rank: 8 },
    { name: 'Redeemer', acquisition: MARKET, category: GUNBLADE, mastery_Rank: 4 },
    { name: 'Sarpa', acquisition: MARKET, category: GUNBLADE, mastery_Rank: 8 },
    { name: 'Ninkondi', acquisition: MARKET, category: NUNCHAKU },
    { name: 'Shaku', acquisition: TENNO_LAB, category: NUNCHAKU },
    { name: 'Jat Kusar', acquisition: CHEM_LAB, category: BLADE_WHIP, mastery_Rank: 10 },
    { name: 'Lacera', acquisition: TENNO_LAB, category: BLADE_WHIP, mastery_Rank: 7 },
    { name: 'Mios', acquisition: BIO_LAB, category: BLADE_WHIP, mastery_Rank: 8 },
    { name: 'Dark Split-Sword', acquisition: TENNO_LAB, category: HYBRID, mastery_Rank: 5 },
    { name: 'Destreza', acquisition: MARKET, category: RAPIER, mastery_Rank: 7 },
    { name: 'Endura', acquisition: TENNO_LAB, category: RAPIER, mastery_Rank: 7 },
    { name: 'Gunsen', acquisition: TENNO_LAB, category: WARFANS, mastery_Rank: 10 },
  ],
};
