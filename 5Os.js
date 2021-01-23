const os = require('os');

let totalmemory = os.totalmem();
let freememory = os.freemem();

console.log("Total Memory", totalmemory)
console.log("Free Memory", freememory)