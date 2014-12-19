
var Class = require('./class');

// 
// Logger class
// 
// @param {module} the module name for this logger instance
// 
var Logger = module.exports = Class.extend({

	init: function(module) {
		this.module = module;
		this.level = LOG;
		this.history = [ ];
	},

// --------------------------------------------------------
	
	// 
	// Set the log level
	// 
	// @param {level} the new log level
	// @return void
	// 
	setLevel: function(level) {
		if (typeof level !== 'number' || level < NONE || level > LOG || Math.round(level) !== level) {
			throw new Error('Invalid log level given to logger class');
		}
		this.level = level;
	},

	// 
	// Get the currently set log level
	// 
	// @return number
	// 
	getLevel: function() {
		return this.level;
	}

// --------------------------------------------------------

	// 
	// Log a message with level LOG (5)
	// 
	// @param {message} the message to log
	// @return void
	// 
	log: function(message) {
		this._log(LOG, message);
	},

	// 
	// Log a message with level DEBUG (4)
	// 
	// @param {message} the message to log
	// @return void
	// 
	debug: function(message) {
		this._log(DEBUG, message);
	},

	// 
	// Log a message with level INFO (3)
	// 
	// @param {message} the message to log
	// @return void
	// 
	info: function(message) {
		this._log(INFO, message);
	},

	// 
	// Log a message with level WARN (2)
	// 
	// @param {message} the message to log
	// @return void
	// 
	warn: function(message) {
		this._log(WARN, message);
	},

	// 
	// Log a message with level ERROR (1)
	// 
	// @param {message} the message to log
	// @return void
	// 
	error: function(message) {
		this._log(ERROR, message);
	}, 

// --------------------------------------------------------
	
	// 
	// Actually log the message to the console, and store it in the history
	// 
	// @param {level} the message's log level
	// @param {message} the message text
	// @return void
	// 
	_log: function(level, message) {
		this.history.push({
			level: level,
			message: message,
			time: time()
		});
		if (level <= this.level) {
			log('[' + levels[level] + '] (' + this.module + '): ' + message);
		}
	}

});

// --------------------------------------------------------

// 
// Log level constants
// 
var LOG    = Logger.LOG    = 5;
var DEBUG  = Logger.DEBUG  = 4;
var INFO   = Logger.INFO   = 3;
var WARN   = Logger.WARN   = 2;
var ERROR  = Logger.ERROR  = 1;
var NONE   = Logger.NONE   = 0;

var levels = ['NONE', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'LOG'];
var methods = ['log', 'error', 'warn', 'info', 'debug', 'log'];

// --------------------------------------------------------

// 
// Actually log a message to the console
// 
// @param {message} the message to log
// @return void
// 
function log(level, message) {
	if (window.console && window.console.log) {
		message = '[' + time() + '] ' + message;

		var method = methods[level];
		if (! window.console[method]) {
			method = 'log';
		}

		console[method](message);
	}
}

//
// Gets a formatted time string of HH:MM:SS.mmmm
//
function time() {
	var now = new Date();
	return (
		('00' + now.getHours()).slice(-2) + ':' +
		('00' + now.getMinutes()).slice(-2) + ':' +
		('00' + now.getSeconds()).slice(-2) + '.' +
		('000' + now.getMilliseconds()).slice(-4)
	);
}
