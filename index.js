var through = require('through2'),
	datauri = require('datauri').sync,
	gutil = require('gulp-util'),
	path = require('path'),
	PluginError = gutil.PluginError;

// Name
const PLUGIN_NAME = 'gulp-inline-image';

module.exports = function (opts) {
	opts = opts || {};
	
	var rInlineImage = /inline-image\(['"]?([^'")]+)['"]?,?['"]?([^'")]+)?['"]?\)/mg;
	
	function inlineImage(file, encoding, callback) {
		
		if (file.isNull()) {
			return callback(null, file);
		}
		
		if (file.isStream()) {
			new PluginError(PLUGIN_NAME, 'This plugin does not support streams');
		}
		
		var baseDir = opts.baseDir || file.base,
			src = file.contents.toString(),
			match,
			dUri;
		
		while (match = rInlineImage.exec(src)) {
			dUri = datauri(path.resolve(baseDir, match[1].replace('/',path.sep)));
			if (match[2]) {
				// datauri has no option to give a MIME type, so we hack it in
				dUri = dUri.replace(/(data:)[^]+(;base64)/,'$1'+match[2]+'$2');
			}
			
			src = src.replace(match[0], 'url("'+dUri+'")');
		}
		
		file.contents = new Buffer(src);
		return callback(null, file);
	}
	
	return through.obj(inlineImage);
};
