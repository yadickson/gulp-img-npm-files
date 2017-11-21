# gulp-img-npm-files

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

Get image files from your installed npm packages

## Installation

Simply run a install using your terminal and you're good to go!

```bash
npm install --save gulp-img-npm-files
```

If you're a cool kid using Yarn then simply just use yarn as you would

```bash
yarn add gulp-img-npm-files
```

## Usage

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');
var files = imgNpmFiles([[filter, ]options][, callback]);
```

This will read your package.json, iterate through your dependencies and returns an array of image files.

## Usage with gulp

```Javascript
var gulp = require('gulp');
var styleNpmFiles = require('gulp-img-npm-files');

gulp.task('TASKNAME', function() {
    return gulp.src(imgNpmFiles())
        .pipe(/* what you want to do with the files */)
});
```

## Options
The module accepts the following options:
- **nodeModulesPath**: path to your node_modules. By default, it is ./node_modules that means this directory is at your project's root.

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dependencies from ./node_modules to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles(), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dependencies from ./path/node_modules to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles({ nodeModulesPath: "./path/node_modules" }), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

- **packageJsonPath**: path to you package.json file. By default, it is ./package.json that means this file is at your project's root with the default name.

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dependencies present in ./package.jon to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles(), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dependencies present in ./path/package.json to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles({ packageJsonPath: "path/package.json" }), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

- **devDependencies**: true if you want to take account the dev dependencies, false otherwise. The default value is false.

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dependencies to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles(), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

```Javascript
var imgNpmFiles = require('gulp-img-npm-files');

// Copy dev dependencies and dependencies to build/node_modules/
gulp.task('copyNpmDependencies', function() {
  gulp.src(imgNpmFiles({ devDependencies: true }), { base:'./' })
    .pipe(gulp.dest('./build'));
});
```

## Comments

Based on [GulpFontNpmFiles](https://github.com/yadickson/gulp-img-npm-files).

[travis-image]: https://travis-ci.org/yadickson/gulp-img-npm-files.svg
[travis-url]: https://travis-ci.org/yadickson/gulp-img-npm-files

[coveralls-image]: https://coveralls.io/repos/github/yadickson/gulp-img-npm-files/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/gulp-img-npm-files

[dependencies-image]: https://david-dm.org/yadickson/gulp-img-npm-files/status.svg
[dependencies-url]: https://david-dm.org/yadickson/gulp-img-npm-files?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/gulp-img-npm-files/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/gulp-img-npm-files?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/gulp-img-npm-files/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/gulp-img-npm-files

[npm-image]: https://badge.fury.io/js/gulp-img-npm-files.svg
[npm-url]: https://badge.fury.io/js/gulp-img-npm-files
