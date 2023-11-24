# @uxuip/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## Defaults
- Single quotes, no semi, tabs
- TypeScript, JSX, React, Vue support
- Use ESLint Stylistic for formatting by default, can be disabled to use other formatter.

## Usage

By default, Vue and React settings are not enabled. You can enable them by importing `reactConfig()` or `vueConfig()` from `@uxuip/eslint-config` or call `uxuip({ react: true })` / `uxuip({ vue: true })`.

### Install
```
pnpm i -D @uxuip/eslint-config
```

### React Install
```
pnpm i -D @uxuip/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### Create config file
With `"type": "module"` in `package.json` (recommended):

```js
// eslint.config.js
import eslint from '@uxuip/eslint-config'
// import { reactConfig, vueConfig } from '@uxuip/eslint-config'

export default await eslint({
  // react: true,
  // vue: true,
  // stylistic: false,
})

// utils for react/vue
// export default await reactConfig()
// export default await vueConfig()
```

With CJS:

```js
// eslint.config.js
const eslint = require('@uxuip/eslint-config').default
// const eslint = require('@uxuip/eslint-config').reactConfig
// const eslint = require('@uxuip/eslint-config').vueConfig

module.exports = eslint()
```

### VSCode Support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:
```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

## Prettier
Disable ESLint Stylistic rules:

```js
// eslint.config.js
import eslint from '@uxuip/eslint-config'

export default await eslint({
  stylistic: false,
})
```

## FAQ
### Why extends @antfu/eslint-config?
Good default, reasonable strict, well maintained.

### Why peer dependencies for React?
`eslint-plugin-react` too bloat to install in non-react project.
