# gobble-esperanto-bundle

Bundle ES6 modules with gobble and [esperanto](http://rich-harris.co.uk/esperanto).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-esperanto-bundle
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'esperanto-bundle', {
  entry: 'app.js' // you must specify an entry module. The '.js' is optional
});
```

This will create a single AMD module file that contains `app.js` and all its dependencies (and their dependencies, and so on) that Esperanto finds in `src`. By default it will also be called `app.js` - you can change it to something else with the `dest` option.

## Additional options

You can specify a `type` of module:

* `type: 'amd'` (the default) - Asynchronous Module Definition, used by [RequireJS](http://requirejs.org/) and its ilk
* `type: 'cjs'` - CommonJS, for use in node or with [Browserify](http://browserify.org/)
* `type: 'umd'` - Universal Module Definition. Works as AMD, CommonJS, or browser global. You must supply a `name` option for the global export.

To generate a sourcemap, use `sourceMap: true`, or `sourceMap: 'inline'` to append the sourcemap to the bundle as a data URI.

For [strict mode](https://github.com/Rich-Harris/esperanto/wiki/Strict-mode) output, pass `strict: true`.


## License

MIT. Copyright 2014 Rich Harris
