'use strict'
const path = require('path')
const requireindex = require('requireindex')

const configs = requireindex(path.join(__dirname, './configs'))

const plugin = {
  configs: {},
  rules: requireindex(path.join(__dirname, './rules')),
}

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      vuetify: plugin,
    },
    rules: {
      ...configs.recommended.rules,
    },
  },
  base: {
    plugins: {
      vuetify: plugin,
    },
    rules: {
      ...configs.base.rules,
    },
  },
})

module.exports = plugin
