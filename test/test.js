var assert = require('assert'),
	gutil = require('gulp-util'),
	fs = require('fs'),
	path = require('path'),
	gulpInlineImage = require('../index');

describe('gulp-inline-image', function() {
	describe('in buffer mode', function() {
		
		it ('should replace calls to inline-image() with base64 data uris', function(done) {
			
			var filename = path.join(__dirname, 'css', 'style.css');
			
			var input = new gutil.File({
					base: path.dirname(filename),
					path: filename,
					contents: new Buffer(fs.readFileSync(filename))
				});
			
			var stream = gulpInlineImage();
			
			stream.on('data', function(newFile) {
				var file = fs.readFileSync(path.join(__dirname, 'css', 'style.expected.css'), 'utf8').toString();
				assert.equal(String(newFile.contents), file);
				done();
			});
			
			stream.write(input);
			
		});
		
		it('should ignore files with no content', function (done) {
			var stream = gulpInlineImage(),
				n = 0;
				
			var filename = path.join(__dirname, 'css', 'style.css');
			
			stream.on('data', function(file) {
				assert.equal(file.path, filename);
				assert.equal(file.contents, null);
				n++;
				
				assert.equal(n, 1);
				done();
			});
			
			stream.write(new gutil.File({
				path: filename,
				contents: null
			}));
			
			stream.end();
		});
		
	});
});