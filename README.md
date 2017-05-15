# generator-ngx-loopback [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator with Angular and Loopback

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ngx-loopback using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ngx-loopback
```

Then generate your new project:

```bash
yo ngx-loopback
```

## Technologies used

- [Angular](https://angular.io/)
- [Loopback](https://loopback.io/)
- [MongoDb](https://www.mongodb.com/download-center#community) (optionnal)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
- [ng-bootstrap](https://ng-bootstrap.github.io)

## Requirements

- Mongodb installed (but you can use another datasource with loopback)
- [yarn](https://yarnpkg.com), a tool to perform a better dependency management than npm.

## Setup

- execute `mongod` in your your shell to start mongodb database
- start loopback with `npm start`
- start angular with `npm run angular`
- enjoy !

## Usage

### UserService

- User creation
```
this.userService.create({
  username: 'admin',
  password: 'admin',
  email: 'admin@example.com'
}).subscribe();
```
- User login
```
this.userService.login({
  username: 'admin',
  password: 'admin'
}).subscribe();
```
- User Logout
```
this.userService.logout().subscribe();
```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

unlicense © [Berelindis]()


[npm-image]: https://badge.fury.io/js/generator-ngx-loopback.svg
[npm-url]: https://npmjs.org/package/generator-ngx-loopback
[travis-image]: https://travis-ci.org/romainbellande/generator-ngx-loopback.svg?branch=master
[travis-url]: https://travis-ci.org/romainbellande/generator-ngx-loopback
[daviddm-image]: https://david-dm.org/romainbellande/generator-ngx-loopback.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/romainbellande/generator-ngx-loopback
[coveralls-image]: https://coveralls.io/repos/romainbellande/generator-ngx-loopback/badge.svg
[coveralls-url]: https://coveralls.io/r/romainbellande/generator-ngx-loopback
