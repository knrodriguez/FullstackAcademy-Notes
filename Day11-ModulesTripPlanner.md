## JS Scripts in HTML
Async - load this asynchronously BUT when this file is retrieved, stop all index.html loading and run this script instead.

Defer - get this file asynchronously and then WAIT until everything else has been loaded + run.

no extra attribute -> loads before HTML.


Webpack is a module bundler that takes any form of assets we have and combines it into one batch of files (preferably a js file). And it will privatize our code.

To install:
`npm install webpack webpack-cli`

## ES Modules
ECMAScript 6 (2015) approved a native module system for JavaScript using a different set of keywords:
  - import [thing] from '[file]'
  - export [thing]
  - export default [thing]

### Rationale
- Node.js style modules:
  - only support synchronous module loading
  - are dynamic
- Import/export were designed:
  - to support both sync and async module loading
  - are not dynamic, which allows static analysis (i.e., tools can examine your code without running it)

  ```js
  a.js
  const foo = () => {/*etc*/}
  module.exports = foo
  //or
  export default foo

  b.js
  const food = require('./a');
  //or
  import foo from './a'
  ```

  ```js
  a.js
  export const food = () => {/*etc*/};
  export const bar = 'bar'

  b.js
  import {foo, bar} from './a'
  ```

- Import/export has support in the latest versions of some browsers
  - Not quite safe to depend on it without a build tool like webpack
- Node.js does not support import/export natively yet

## Single Page Applications & AJAX
- HTTP requests:
  1. URL bar
  2. Links
  3. Javascript (window.location.hred = "google.com")
  4. Submitting forms (GET/POST)

SPA is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.
  - No reload or refresh within the user interface
    - JS manipulates the DOM as the user interacts
  - User experience similar to a native application

### AJAX
Asynchronous JavaScript and XML
- Making background HTTP requests using JS
- Handling the response of those HTTP requests using JS
- No page refresh necessary

-AJAX is the method of sending background HTTP requests with JavaScript
-SPA loads a single HTML page and dynamically updates the DOM as the user interacts with the page.
- The network tab in Dev Tools is your friend to see if requests are going through and if page is SPA.
### Data Serialization
