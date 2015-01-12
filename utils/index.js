
var conf = require('../conf').module('core');

// 
// Converts an EE event name into the correct format based on the given
// delimiter
// 
// @param {name} the event name to convert
// @return string
// 
exports.eventName = function(name) {
	var sep = conf.get('ee.delimiter');
	if (sep === '::') {
		return name;
	}
	return name.split('::').join(sep);
};
