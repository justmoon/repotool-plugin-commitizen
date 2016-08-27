'use strict'

const execSync = require('child_process').execSync
const fs = require('fs')
const every = require('lodash/every')
const npm = require('repotool-utils/npm')
const combine = require('repotool-utils/combine')

const dependencies = npm.dependencies([
  'cz-conventional-changelog',
  'ghooks',
  'validate-commit-msg'
])

const packageJson = npm.packageJson({
  "config": {
    "ghooks": {
      "commit-msg": "validate-commit-msg"
    },
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
})

module.exports = (opts, state) => combine(dependencies, packageJson)
