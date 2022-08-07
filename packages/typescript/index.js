const basicConfig = require('@uxuip/eslint-config-basic')

module.exports = {
  extends: '@antfu/ts',
  overrides: basicConfig.overrides,
  rules: {
    ...basicConfig.rules,
  },
}
