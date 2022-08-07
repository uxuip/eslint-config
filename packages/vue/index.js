const tsConfig = require('@uxuip/eslint-config-ts')

module.exports = {
  extends: '@antfu/vue',
  overrides: tsConfig.overrides,
  rules: {
    ...tsConfig.rules,
  },
}
