var gulp = require('gulp'),
	inlineimage = require('./index.js'),
	path = require('path'),
	$ = require('gulp-load-plugins')();

gulp.task('default', function () {
	return gulp.src(path.join('test','css','style.css'))
		.pipe(inlineimage())
		.pipe(gulp.dest(path.join('build', 'css')));
});

gulp.task('test', function() {
	return gulp.src('test/test.js').pipe($.mocha({
		reporter: 'spec'
	}));
});