'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ngx-loopback:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'myProject', dbName: 'dbTest'});
  });

  it('creates files', () => {
    assert.file([
      'README.md'
    ]);
  });
});
