
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




