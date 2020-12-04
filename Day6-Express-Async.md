# Express
## Server
- running program that exists for us on node.js on a computer
- job is to listen for requests (HTTP requests)

- HTTP: dictates the formatting of the request/response sent to and from the server. 1-for-1 client to server.
- GET - any request you can make from the browser
- POST - sending data to the server
- HTTP Request: a message with a certain format done by the client side
- Server-handles the requests
### How To Build A Server with Node.js
- Node.js has low-level tools for building servers.
- Abstracts HTTP requests and responses into nice objects that have useful methods.
```js
const http = require('http');
const server = http.createServer();
server.listen(3000, 'localhost');
/*server is going to open up port 3000, and start listening for requests from my clients*/
server.on('request', (req,res) => {
  if(req.method === 'GET'){
    if(req.url) === '/'){
      red.writeHead(200);
      res.write('<h1>Welcome to the main page</h1>')
      res.end();
    } ...
  }
})
/*way too long, lets try something else*/
```
## Express
```js
const express = require('express')
const app = express()
app.get('/', (req,res,next) => {
  res.send('<h1>Welcome to the main page</h1>')
})
app.get('/puppies', (req,res,next) => {
  res.send('<h1>Welcome to the puppies page</h1>')
})
app.listen(3000) //port number = 3000
```
### URL Parameters (Req.Params)
Req.params which is on the req object that handles wildcards that we dictate.

- Route: the block of code with an HTTP request method (.get, .post, .put, .delete)
- Order matters of your HTTP request method blocks
- res.send = return almost?
#### App.get()
- only for GET requests
- exact match of verb and URL
#### App.use()
- handles all verbs
- fuzzy match of url

#### Middleware
middleware = a function that handles responding to requests
```js
function(req,res,next) {...}
```
#### Morgan
Morgan - node module/library that helps us log our requests

### Express.Static
Static - method that looks for file inside specified folder
```js
app.use(express.static(path.join(__dirname,'public')));
```

### Summary
Express is a framework that is a light abstraction over the built-in node 'http'module, which is itself an abstraction over some code written in C++ making lower-level system calls.
  - has automatic error handling

# Async
## Asynchronous / Async
- Asynchronous (aka async) literally means "happening at disconnected times"
Async code is JS will run at an arbitrary unknown future time and other JS code can run in the meantime.

Example:
```js
console.log('One');
setTimeout(() => console.log('Two'), 10);
console.log('Three');
/*
Output:
One
Three
Two
*/
```
Other examples:
- Opening, reading, writing, and closing files
- Making API calls (such as HTTP requests from our frontend)
- Accessing a database (read, write, and delete operations)

so async functions are pushed onto the call stack twice, once when they’re first encountered, and their callback the  next time when they’re taken off the event loop queue?

## How do we handle Asyncs?
- Callbacks (end up in callback hell)
- Promises

## Promises
A JS object that represents the eventual result of an asynchronous operation
- Promise has 2 keys: value, and status.
```js
[[PromiseValue]]:,
[[PromiseStatus]]: "pending", "fulfilled"
```
### Async/Await
- Built on top of promises.
- Async is label for asynchronous code
- Await keyword is used ONLY inside of an "async" function
  - Forces the code inside of your function to pause until that line with the await keyword's operation is finished
  - Await puts everything below into one big callback
  - Await only works on Promises!

### Promise.all()
A method that acepts an array of multiple promises, and fulfilles iwth a single promise of an array with all the values if each promise resolves
- Useful if you don't care about what order those promises resolve in and only want to know when they are all completed

### Promise.then()
- Accepts up to 2 callback functions (success and error callback)
-

<!-- @nested-tags:express,promises,async-->
