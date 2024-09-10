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
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
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
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
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
