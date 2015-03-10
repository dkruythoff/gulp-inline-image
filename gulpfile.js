var gulp = require('gulp'),
	inlineimage = require('./index.js'),
	path = require('path');

gulp.task('default', function () {
	return gulp.src(path.join('test','css','style.css'))
		.pipe(inlineimage())
		.pipe(gulp.dest(path.join('build', 'css')));
});