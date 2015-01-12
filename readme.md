
# cloak.core

Cloak.js is a collection of modules for building modern web applications. Each module is designed to work with the others, but are decoupled to allow you pick and choose which ones you need. Want views but don't need to deal with models or a complex router? You can do that! First, make sure you have `cloak.core` which contains some basic utilities for each module. Then, install the modules you want.

```bash
$ npm install --save cloak.core
$ npm install --save cloak.view
```

Then, in your JavaScript, just start using the components. Cloak is designed to work in a CommonJS environment, so any tools that do so will work (like [common.js](https://github.com/UmbraEngineering/common.js) or [browserify](http://browserify.org/)).

```javascript
var View = require('cloak.view');

var MyView = module.exports = View.extend({
    
    template: 'views/myview/myview.hbs',

    draw: function() {
        this.elem.innerHTML = this.render();
    }

});
```

## Cloak modules

* [cloak.core](https://github.com/UmbraEngineering/cloak.core) - The cloak core: tiny, but used by all the cloak modules
* [cloak.view](https://github.com/UmbraEngineering/cloak.view) - Provides the `View` class
* [cloak.model](https://github.com/UmbraEngineering/cloak.model) - Provides the `Model` and `Collection` classes for handling data
* [cloak.router](https://github.com/UmbraEngineering/cloak.router) - Provides the `Router` class for all you app routing needs
* [cloak.controller](https://github.com/UmbraEngineering/cloak.controller) - Provides a super-minimal `Controller` class for transitioning displaying views
* [cloak.xhr](https://github.com/UmbraEngineering/cloak.xhr) - Provides an easy interface for making HTTP requests by `XMLHttpRequest`; Also provides an interface to define XHR methods on the `Model` and `Controller` classes
* [cloak.localstorage](https://github.com/UmbraEngineering/cloak.localstorage) - Provides an easy interface for storing data in local storage; Also provides an interface to use local storage as your main app storage for `Model` and `Collection` classes
* [cloak.i18n](https://github.com/UmbraEngineering/cloak.i18n) - Provides a simple internationalization interface for storing translated phrases and determining a client's language
* [cloak.socketio](https://github.com/UmbraEngineering/cloak.socketio) - Provides a [socket.io](http://socket.io) interface for models based on the [dagger.js](http://www.daggerjs.com) websocket api




