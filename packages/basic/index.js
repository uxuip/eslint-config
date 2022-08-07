const basicConfig = require('@antfu/eslint-config-basic')

module.exports = {
  extends: '@antfu/basic',
  overrides: basicConfig.overrides,
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
}
