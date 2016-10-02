gulp-inline-image
==========

[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][dep-image]][dep-url] 
[![devDependency Status][devdep-image]][devdep-url] 

---

A [Gulp](http://github.com/gulpjs/gulp) implementation of Compass's [inline-image](http://compass-style.org/reference/compass/helpers/inline-data/#inline-image) Data Helper.  
Accepts image paths relative to the source files including them.

# Installation
```js
npm install gulp-inline-image
```

# Usage
```js
var gulp = require('gulp');
var inlineimage = require('gulp-inline-image');

gulp.task('styles', function() {
    gulp.src('./css/*.css')
        .pipe(inlineimage()) 
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['styles']);
```

[npm-url]: https://www.npmjs.com/packages/gulp-inline-image
[npm-image]: http://img.shields.io/npm/v/gulp-inline-image.svg?style=flat
[travis-url]: https://travis-ci.org/dkruythoff/gulp-inline-image
[travis-image]: https://travis-ci.org/dkruythoff/gulp-inline-image.svg?branch=master
[dep-url]: https://david-dm.org/dkruythoff/gulp-inline-image
[dep-image]: https://david-dm.org/dkruythoff/gulp-inline-image.svg
[devdep-url]: https://david-dm.org/dkruythoff/gulp-inline-image#info=devDependencies
[devdep-image]: https://david-dm.org/dkruythoff/gulp-inline-image/dev-status.svg