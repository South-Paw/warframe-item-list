const constants = require('../constants.js');

const {
  VAULTED, TENNO_LAB, RELICS, UNOBTAINABLE, SPY_MISSIONS, ALERTS,
} = constants.acquisition;

const {
  THE_NEW_STRANGE, CHAINS_OF_HARROW, SANDS_OF_INAROS, THE_LIMBO_THEOREM, HIDDEN_MESSAGES,
  THE_GLAST_GAMBIT, OCTAVIAS_ANTHEM, THE_SILVER_GROVE, SAYAS_VIGIL,
} = constants.acquisitionQuests;

const {
  MANICS, JORDAS_GOLEM, SARGAS_RUK, TYL_REGOR, AMBULAS, LECH_KRILL, VAY_HEK, HYENA_PACK,
  THE_SERGEANT, MUTALIST_ALAD_V, LEPHANTIS, THE_RAPTORS, PHORID, EXIMUS_ENEMIES, JACKAL,
  KELA_DE_THAYM, VOR_AND_KRILL, ALAD_V,
} = constants.acquisitionEnemies;

module.exports = {
  warframes: [
    { name: 'Ash', acquisition: MANICS },
    { name: 'Ash Prime', acquisition: VAULTED },
    { name: 'Atlas', acquisition: JORDAS_GOLEM },
    { name: 'Banshee', acquisition: TENNO_LAB },
    { name: 'Banshee Prime', acquisition: RELICS, masteryRank: 8 },
    { name: 'Chroma', acquisition: THE_NEW_STRANGE },
    { name: 'Ember', acquisition: SARGAS_RUK },
    { name: 'Ember Prime', acquisition: VAULTED },
    { name: 'Equinox', acquisition: TYL_REGOR },
    { name: 'Excalibur', acquisition: AMBULAS },
    { name: 'Excalibur Prime', acquisition: UNOBTAINABLE },
    { name: 'Frost', acquisition: LECH_KRILL },
    { name: 'Frost Prime', acquisition: VAULTED },
    { name: 'Gara', acquisition: SAYAS_VIGIL },
    { name: 'Harrow', acquisition: CHAINS_OF_HARROW },
    { name: 'Hydroid', acquisition: VAY_HEK },
    { name: 'Hydroid Prime', acquisition: RELICS, masteryRank: 5 },
    { name: 'Inaros', acquisition: SANDS_OF_INAROS },
    { name: 'Ivara', acquisition: SPY_MISSIONS },
    { name: 'Limbo', acquisition: THE_LIMBO_THEOREM },
    { name: 'Loki', acquisition: HYENA_PACK },
    { name: 'Loki Prime', acquisition: VAULTED },
    { name: 'Mag', acquisition: THE_SERGEANT },
    { name: 'Mag Prime', acquisition: VAULTED },
    { name: 'Mesa', acquisition: MUTALIST_ALAD_V },
    { name: 'Mirage', acquisition: HIDDEN_MESSAGES },
    { name: 'Mirage Prime', acquisition: RELICS, masteryRank: 8 },
    { name: 'Nekros', acquisition: LEPHANTIS },
    { name: 'Nekros Prime', acquisition: RELICS },
    { name: 'Nezha', acquisition: TENNO_LAB },
    { name: 'Nidus', acquisition: THE_GLAST_GAMBIT },
    { name: 'Nova', acquisition: THE_RAPTORS },
    { name: 'Nova Prime', acquisition: VAULTED },
    { name: 'Nyx', acquisition: PHORID },
    { name: 'Nyx Prime', acquisition: VAULTED },
    { name: 'Oberon', acquisition: EXIMUS_ENEMIES },
    { name: 'Oberon Prime', acquisition: RELICS, masteryRank: 8 },
    { name: 'Octavia', acquisition: OCTAVIAS_ANTHEM },
    { name: 'Rhino', acquisition: JACKAL },
    { name: 'Rhino Prime', acquisition: VAULTED },
    { name: 'Saryn', acquisition: KELA_DE_THAYM },
    { name: 'Saryn Prime', acquisition: VAULTED },
    { name: 'Titania', acquisition: THE_SILVER_GROVE },
    { name: 'Trinity', acquisition: VOR_AND_KRILL },
    { name: 'Trinity Prime', acquisition: VAULTED },
    { name: 'Valkyr', acquisition: ALAD_V },
    { name: 'Valkyr Prime', acquisition: RELICS },
    { name: 'Vauban', acquisition: ALERTS },
    { name: 'Vauban Prime', acquisition: RELICS },
    { name: 'Volt', acquisition: TENNO_LAB },
    { name: 'Volt Prime', acquisition: VAULTED },
    { name: 'Wukong', acquisition: TENNO_LAB },
    { name: 'Zephyr', acquisition: TENNO_LAB },
  ],
};
