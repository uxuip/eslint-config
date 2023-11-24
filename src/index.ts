import antfu from '@antfu/eslint-config'
import type { OptionsConfig } from '@antfu/eslint-config'

type Options = Omit<OptionsConfig, 'stylistic'> & {
  stylistic?: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never

const eslintConfig = (
  options: Options = { react: false, vue: false },
  ...args: RestParameters<typeof antfu>
) =>
  antfu(
    {
      ...options,
      stylistic: options?.stylistic === false
        ? false
        : { indent: 2, jsx: true, quotes: 'single', semi: false },
    },
    {
      rules: {
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'curly': ['error', 'all'],
        'antfu/top-level-function': 'off',
        'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'] }],
        'unused-imports/no-unused-vars': 'warn',
      },
    },
    ...args,
  )

export default eslintConfig

export const reactConfig = (
  options: Omit<Options, 'react'> = {},
  ...args: RestParameters<typeof antfu>
) =>
  eslintConfig(
    { ...options, react: true },
    ...args,
  )

export const vueConfig = (
  options: Omit<Options, 'vue'> = {},
  ...args: RestParameters<typeof antfu>
) =>
  eslintConfig(
    { ...options, vue: true },
    {
      rules: {
        'vue/max-attributes-per-line': [
          'error',
          {
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
    },
    ...args,
  )
