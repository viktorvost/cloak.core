
// 
// Expose either A) the built in promise class (if one exists) or B) an A+ compatible polyfill
// 
module.exports = window.Promise || require('promise-es6').Promise;
