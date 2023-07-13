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
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'SLOT',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'ATTR_DYNAMIC',
        'ATTR_STATIC',
        'ATTR_SHORTHAND_BOOL',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true,
    }],
  },
}
