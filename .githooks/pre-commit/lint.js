#!/usr/bin/env node 
var shell = require('shelljs')

if (shell.exec('yarn eslint -- src/').code !== 0) {
  shell.echo('You cannot commit with broken tests');
  shell.exit(1);
}
