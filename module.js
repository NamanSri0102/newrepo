// global - no window !!

//__dirname - path to current directory
//__filename -- file name
//require - function to use modulus
// module -  info about current module
//process - info abour=t environment where the program is being execute
// modules
// all my things in an single file


const names = require('./names.js')
const sayhi=require('./utils.js')
// console.log(names)
const data = require('./alternate-flavor.js')
require('./mind-grenade.js')

// console.log(data)
// sayhi(names.naman)
// sayhi(names.tobu) 
// sayhi('naman ji')

const os = require('os') // built in module hai iss liye na download karna pada nahi ./ lagaana para
const user =os.userInfo();
console.log(user);

// method returns system uptime

console.log(`The system uptime is ${os.uptime()} seconds`);

const curros={
    name: os.type(),
    release:os.release(),
    totalmemory :os.totalmem(),
    freememory:os.freemem()
}

console.log(curros);


// call by name
//node uses commonJS library, everyu file in  node is module
// Modulus = encapsulated code
