import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

import antfu from '@antfu/eslint-config'

type Options = Omit<OptionsConfig, 'stylistic'> & {
  stylistic?: boolean
  vue2?: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never

const eslintConfig = (
  options: Options = {},
  ...args: RestParameters<typeof antfu>
) =>
  antfu(
    {
      ...options,
      vue: options.vue || options.vue2,
    },
    {
      rules: {
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'curly': ['error', 'all'],
        'import/order': 'off',
        'perfectionist/sort-imports': ['error', {
          type: 'natural',
          newlinesBetween: 'ignore',
          groups: [
            'type',
            'internal-type',
            ['parent-type', 'sibling-type', 'index-type'],
            'side-effect',
            'side-effect-style',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        }],
        'antfu/top-level-function': 'off',
        'unused-imports/no-unused-vars': 'warn',
        'ts/no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTernary: true,
        }],
        ...(options.vue || options.vue2) && {
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
        ...options.vue2 && {
          'vue/custom-event-name-casing': 'off',
          'vue/no-deprecated-v-on-native-modifier': 'off',
          'vue/no-deprecated-slot-scope-attribute': 'off',
          'vue/no-deprecated-slot-attribute': 'off',
          'vue/no-deprecated-v-bind-sync': 'off',
          'node/prefer-global/process': 'off',
        },
        ...options.react && {
          'react/prefer-shorthand-fragment': 'off',
          'react/avoid-shorthand-fragment': 'error',
          'react/no-default-props': 'error',
          'react/no-prop-types': 'error',
        },
        ...((options.vue || options.vue2) && options.unocss) && {
          'unocss/order-attributify': 'off',
        },
      },
    },
    ...args,
  ) as unknown as FlatConfigComposer<TypedFlatConfigItem, ConfigNames>

export default eslintConfig

export const reactConfig = (
  options: Omit<Options, 'react'> = {},
  ...args: RestParameters<typeof antfu>
) => eslintConfig({ ...options, react: true }, ...args)

export const vueConfig = (
  options: Omit<Options, 'vue'> = {},
  ...args: RestParameters<typeof antfu>
) => eslintConfig({ ...options, vue: true }, ...args)

export const vue2Config = (
  options: Omit<Options, 'vue2'> = {},
  ...args: RestParameters<typeof antfu>
) => eslintConfig({ ...options, vue2: true }, ...args)
