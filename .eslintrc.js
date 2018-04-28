module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
  },
  rules: {
    'max-len': ['error', 120],
    'object-curly-newline': 'off',
  },
  overrides: {
    files: ['**/__tests__/*.js'],
    env: {
      jest: true
    },
  },
};
