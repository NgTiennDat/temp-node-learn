// Fs Modudes(Async)

// const {readFile, writeFile, read} = require('fs');

// console.log('start');

// readFile('./content/first.txt', 'utf8', (err, file) => {
//     if(err) {
//         console.log(err);
//         return;
//     } else {
//         const first = file;
//         readFile('./content/second.txt', 'utf8', (err, file) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             } else {
//                 const second = file;
//                 writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, file) => {
//                     if(err) {
//                         console.log(err);
//                         return;
//                     } else {
//                         console.log('done with this task!');
//                     }
//                 }) 
//             }
//         })
        
//     }
// });

// console.log('starting the next task!');


const {readFile, writeFile, file} = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8', (err, file) => {
    if(err) {
        console.log(err);
        return;
    } else {
        const first = file;
        readFile('./content/second.txt', 'utf8', (err, file) => {
            if(err) {
                console.log(err);
                return;
            } else {
                const second = file;
                writeFile('./content/result-async1.txt', `Here is the result of: ${first}, ${second}`, (err, file) => {
                    if(err) {
                        console.log(err);
                        return;
                    } else {
                        console.log(file);
                    }
                })
            }
        })
    }
})
console.log('starting a new task!');