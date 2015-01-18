
var matchesSelector = (process && process.mainModule)
	? function(elem, selector) {
		return elem.matchesSelector(selector);
	}
	: require('desandro-matches-selector');

// 
// Returns an object for binding events to the given element
// 
// @param {element} the element to bind events to
// @return object
// 
exports.select = function(element) {
	return new Selection(element);
};

// 
// The selection class
// 
// @param {element} the element to bind events to
// 
var Selection = exports.Selection = function(element) {
	this.element = element;
	this.bound = [ ];
};

// 
// Binds an event (by delegation if a selector is given)
// 
// @param {event} the event to bind to
// @param {selector} optional; selector to use if using delegation
// @param {func} the function to bind
// @return this
// 
Selection.prototype.on = function(event, selector, func) {
	var self = this;

	// Direct binding
	if (arguments.length === 2) {
		func = selector;
		selector = null;

		bind(event, onEvent);
	}

	// Delegate binding
	else if (arguments.length === 3) {
		bind(event, onDelegate);
	}

	// Bad arguments
	else {
		throw new Error('Invalid arguments given to Selection::on');
	}

	function onEvent(evt) {
		func.call(self.element, evt);
	}

	function onDelegate(evt) {
		if (matchesSelector(evt.target, selector)) {
			func.call(evt.target, evt);
		}
	}

	function bind(event, func) {
		self.element.addEventListener(event, func, false);
		self.bound.push({
			event: event,
			func: func,
			off: function() {
				self.element.removeEventListener(event, onEvent);
			}
		});
	}
};

// 
// Unbinds all events bound with this Selection object
// 
// @return this
// 
Selection.prototype.off = function() {
	self.bound.forEach(function(bound) {
		bound.off();
	});
	self.bound.length = 0;
};

// 
// Nuke the selection object, ensuring effective garbage collection
// 
// @return void
// 
Selection.prototype.destroy = function() {
	this.off();
	for (var i in this) {
		this[i] = null;
	}
};
