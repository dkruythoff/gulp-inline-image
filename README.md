gulp-inline-image
==========

[![NPM version](http://img.shields.io/npm/v/gulp-inline-image.svg?style=flat)](https://www.npmjs.com/packages/gulp-inline-image) 
[![Build Status](https://travis-ci.org/dkruythoff/gulp-inline-image.svg?branch=master)](https://travis-ci.org/dkruythoff/gulp-inline-image) 
[![Dependency Status](https://david-dm.org/dkruythoff/gulp-inline-image.svg)](https://david-dm.org/dkruythoff/gulp-inline-image) 
[![devDependency Status](https://david-dm.org/dkruythoff/gulp-inline-image/dev-status.svg)](https://david-dm.org/dkruythoff/gulp-inline-image#info=devDependencies) [![Window build status](https://ci.appveyor.com/api/projects/status/7n3a0y0pbychbg57/branch/master?svg=true)](https://ci.appveyor.com/project/dkruythoff/gulp-inline-image/branch/master) 

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