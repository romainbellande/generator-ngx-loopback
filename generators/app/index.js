'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const prompts = require('./prompts.json');
const writings = require('./writings');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the incredible ' + chalk.red('generator-ngx-loopback') + ' generator!'
    ));

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    writings(this);
  }

  install() {
    this.spawnCommand('yarn');
    var npmdir = process.cwd() + '/angular';
    process.chdir(npmdir);
    this.spawnCommand('yarn');
  }
};
