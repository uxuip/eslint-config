const basicConfig = require('@uxuip/eslint-config-basic')

module.exports = {
  extends: '@antfu/ts',
  overrides: basicConfig.overrides,
  rules: {
    ...basicConfig.rules,
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'] }],
  },
}
