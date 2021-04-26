module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'import/no-cycle': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': ['error', { skipUndeclared: true }]
  },
};
