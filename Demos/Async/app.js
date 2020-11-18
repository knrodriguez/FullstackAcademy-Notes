const fs = require('fs');
const util = require('util'); //optional


console.log('start of file');

// use some promises!!

const readFileAsync = util.promisify(fs.readFile);
//readFileAsync is a function that will return a promise!!

async function readMyFile() {
  try{
    //await pauses execution of code within code block until the promise is resolves/rejected
    const contents = await readFileAsync('...opening-sequence.md', 'utf-8');
    console.log('These are my contents!!!', contents);
  } catch (e) {
    console.log( " I have errored out", e);
  }

}

readMyFile();
// const WahtIsThis = readFileAsync('opening-sequence.md','utf-8');
// console.log(WahtIsThis);
console.log('end of file');

readFileAsync('opening-sequence.md','utf-8').then(data => console.log(data));












// let content = '';

//accepts a file path and reads that file and returns the contend about that file
//utf-8 --> encoding sequence --> translate whatever information we get into something that is readable (string) for us to understand
//3rd argument -> the callback function that accepts 2 arguments: error and data --> error has info IF the function failed, and data is the CONTENTS of the file
// fs.readFile('opening-sequence.md' ,'utf-8', (err,data) => {
//   if(err) console.log('There was an error somewhere sad', err);
//   else{
//     content = data;
//     console.log(content);
//     fs.writeFile('someFileName', data, (err,data) => {
//       otherAsynchronousAction((err,data) => {
//         //one level deeper
//           //one level deeper
//       })
//     });
//   }
// });

// console.log('end-of-file');


//a common theme for asynchronous functions: they all accept callbacks
//(err, data) => {}

//setTimeout
