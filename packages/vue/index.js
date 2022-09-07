const tsConfig = require('@uxuip/eslint-config-ts')

module.exports = {
  extends: '@antfu/vue',
  overrides: tsConfig.overrides,
  rules: {
    ...tsConfig.rules,
    'vue/max-attributes-per-line': [
      'error', {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
}
