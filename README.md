gulp-inline-image
==========

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