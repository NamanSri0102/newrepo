const { log } = require('console');
const {readFileSync,writeFileSync}=require('fs');
// const fs = require('fs');

console.log('start')

const first = readFileSync('./subfolder/first.txt','utf-8')
const second = readFileSync('./subfolder/second.txt','utf-8')

writeFileSync('./subfolder/result-sync.txt',    `hey everyone  i am herer : ${first}, ${second}`, {flag: 'a'})

console.log('done doing first task');
console.log('starting doing next one');

