// // Fs Module(Sync)

// const {readFileSync, writeFileSync} = require('fs');
// console.log('start');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// writeFileSync('./content/result-sync.txt', `Here is the result :${first}, ${second}`,
// {flag: 'a'}
// );

// console.log('done with this task!');
// console.log('starting the next one!');

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-async2.txt', `The result of ${first}, ${second}`, {flag: 'a'});
