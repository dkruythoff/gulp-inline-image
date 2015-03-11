gulp-inline-image
==========

[![Build Status](https://travis-ci.org/dkruythoff/gulp-inline-image.svg?branch=master)](https://travis-ci.org/dkruythoff/gulp-inline-image) [![Dependency Status](https://david-dm.org/dkruythoff/gulp-inline-image.svg)](https://david-dm.org/dkruythoff/gulp-inline-image) 
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