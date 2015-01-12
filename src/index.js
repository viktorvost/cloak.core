
// 
// This is the cloak core module
// 
// Basically, this thing contains all of the basic dependencies used throughout
// the cloak modules like the class library, and a logging utility; You know, basic
// stuff.
// 

var conf = require('../config').module('core', {

	// EventEmitter config
	ee: {
		wildcard: false,
		delimiter: '::',
		newListener: false,
		maxListeners: 20
	}

});
