#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const boxenSettings = { borderStyle: 'double', padding: 1, margin: 1, backgroundColor: 'black' }

const output = chalk.bold.white('                 Luke Storry ') +
  '\n' + chalk.white('       Bristol-based Software Developer ')
  + '\n' + '\n' + chalk.cyan('               https://lkst.uk')
  + '\n'
  + '\n' + chalk.white('     GitHub: ') + chalk.gray('https://github.com/') + chalk.green('lukestorry')
  + '\n' + chalk.white('    Twitter: ') + chalk.gray('https://twitter.com/') + chalk.cyan('lukestorry')
  + '\n' + chalk.white('   LinkedIn: ') + chalk.gray('https://linkedin.com/in/') + chalk.blue('lukestorry')
  + '\n' + chalk.white('  this card: ') + chalk.red('npx luke')

console.log(chalk.cyan(boxen(output, boxenSettings)))
