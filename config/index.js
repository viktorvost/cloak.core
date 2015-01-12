
var config = { };

var merge         = require('../utils/merge');
var objectSearch  = require('../utils/object-search');

// 
// 
// 
exports.module = function(name, defaults) {
	if (! config[name]) {
		config[name] = new ConfigModule(name, defaults);
	} else if (defaults) {
		var conf = config[name];
		conf.config = merge({ }, defaults, conf.config);
	}

	return config[name];
};

// 
// 
// 
var ConfigModule = function(name, defaults) {
	this.name = name;
	this.config = defaults;
};

// 
// 
// 
ConfigModule.prototype.set = function(values, value) {
	if (arguments.length > 1) {
		this.config[values] = value;
	} else {
		merge(this.config, values);
	}
};

// 
// 
// 
ConfigModule.prototype.get = function(key) {
	return objectSearch.get(this.config, key);
};

