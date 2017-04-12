#!/usr/bin/env node 
var shell = require('shelljs')

if (shell.exec('yarn test:coverage').code !== 0) {
  shell.echo('You cannot commit with broken tests');
  shell.exit(1);
}
