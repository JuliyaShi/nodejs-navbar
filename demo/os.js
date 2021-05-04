const os = require('os')

console.log('OS', os.platform())

console.log('total memory', os.totalmem())
console.log('home dir', os.homedir())
console.log('up time', os.uptime())