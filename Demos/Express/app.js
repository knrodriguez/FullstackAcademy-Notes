//this file can be called anything, but usually called server.js or app.js

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

/*
non-express version
const http = require('http');
const server = http.createServer();

server.on('request', (request,response) => {
  if (request.method === 'GET'){
    ... do stuff
  }
})
*/

//handle logging
// app.get('*', (req,res,next) => {
//   console.log(req.method, req.url);
//   next();
// })

// //ANY verb and ANY url - alternative handle logging
// app.use((req,res,next) =>{
//   console.log(req.method, req.url);
//   next();
// })

//using morgan module
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/puppies', (req,res,next) => {
  res.send('<h1>WOW PUPPIES! PUPPIES PAGE </h1>')
})

//: --> hey place the text after that colon as a key value pair on my req.params object
app.get('/puppies/:puppyId',(req,res) => {
  console.log(req.params);
  res.send(`<h1>I have made it to the puppy #${req.params.puppyId} page</h1>`);
})

app.get('/', (req,res) => {
  res.send('<h1>This is my puppies HOME PAGE!!!</h1>');
})

app.get('*', (req,res) => {
  res.send('<h1>This page does not exist. Sorry!</h1>');
})

//listen to a port
app.listen(1337, () => {
  console.log('I am listening for some wild puppies on port 1337');
  console.log(`${path.dirname()}`);
});


//@nested-tags:express
