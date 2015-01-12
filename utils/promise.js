
// 
// Expose either A) the built in promise class (if one exists) or B) an A+ compatible polyfill
// 
var Promise = module.exports = window.Promise || require('promise-es6').Promise;

// 
// Returns a deferred
// 
Promise.defer = function() {
	var deferred = { };

	deferred.promise = new Promise(function(resolve, reject) {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});

	return deferred;
};
