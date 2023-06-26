// OS Module

// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user)


// // Method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOs);


// const http = require('http');

// const sever = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Welcome to put home page');
//     }
//     if(req.url === '/about') {
//         res.end('Here is our short history');
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page which you are looking for</p>
//         <a href="/">back home</a>
//     `)
// });

// sever.listen(5000);


// npm - global command, comes with node
// npm --version

// Local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);