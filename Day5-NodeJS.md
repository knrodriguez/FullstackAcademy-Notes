# Node.js

## What is Node.js?
- It allows you to execute JavaScript on your operating system, instead of a web browser.
- JavaScript Engine is used to translate JavaScript into machine language.
- Chromium is the open-sourced base, Chrome is propriatary iteration of that. Under Chrome, the V8 engine is used to power JavaScript.
-  The V8 engine was extracted and made available on your operating system.

Node.js is the program that runs on your computer.
Within Node.js, JavaScript is executed using the V8 engine.

## Servers
- Server is a program running on a computer that exists to receive commands from across the internet.
- Why? Being able to create a custom server allows you more power for your website/web app.

## Program vs. Process
- Program (the program you write)
  - Program is data
    - machine code (pre-compiled)
    - bytecode (re-compiled by a VM)
    - text file (can be interpreted)
  - Inert - not doing anything
  - Ready to be run as a process
- Process (the program written being executed)
  - Process is execution
    - memory allocated
    - CPU performing steps
  - "Live"
  - Produces results
  - Interactive
  - Can be started/stopped
  - Multiple processes from one program...

# INSERT SCREENSHOT OF COMPARISON TO RECIPE!

## Module
- a JS file
- object
- represents the module itself
- has a property called exports

### Global Variables
Every module in Node has access to the same set of global variables
1. process
2. global
3. console
4. setTimeout/clearTimeout (delay execution of running function)
5. setInterval/clearInterval (run code over and over again)

### Module Variables
Every module in Node has its own set of "module" variables that are available in the default scope
1. __dirname
2. __filename
3. module ()
4. require (command to require one module into another)

### ```require``` Rules
When you require a module for the first time, the following occurs:
- Node executes the file being required and calculates the value of module.exports
- Node caches the result of module.exports
- Node returns the module.exports to the place where it was required

Subsequent attempts to require the same module will return the cached module.exports. The file will not execute twice!

When you require a built-in module or an installed node module, you omit any file path
- Ex. when we require a built-in node module like fs, we just say require('fs')
- Ex. when we require a node module that we install like chalk, we just say require('chalk') (not require('./node_modules/chalk') - Node knows to do this for us!)

When you require one of your own modules, you must reference the path to the file
- Ex. you must say require('./fileA') - Node will not recognize require('fileA') (unless fileA happens to be a node module!).


## NPM (Node Package Manager)
- command line tool
- can find libraries of code online
- downloads them locally or globally (into node_modules directory)
- packages placed in node registry
- package.json: file that represent metadata about your package
- ```npm install``` will install all dependencies listed in the package.json file

# Asynchronicity

## Concurrency
"Let's bake a cake." Choose one below:
1. You only make the icing after the cake comes out of the oven
  - Blocking: You need to do one before you do the next.
2. You make the icing while the cake is in the over
  - Non-blocking: one person doing all the things, but allowing the tools to work and run while I do something else.
3. I only make the icing and you only make the cake.
  - Parallel: 2 people doing one thing at the same time

JavaScript is Non-Blocking.
- It can only do one thing at a time, but allows certain things to run side-by-side with it, and then asks for outputs needed to run other things when the output is complete.

### Async
Code is asynchronous if the execution order is not dependent upon the command order.

### Event Based
A function that executes asynchronously...
1. kicks off some external process
2. registers an event handler for when that process finishes (callback)

Can have multiple event handlers for one event, they execute in the order you set.

Asynchronous code will only start executing after the synchronous code has finished.

<!-- @nested-tags:nodejs,async-->
