const luhn = require('./luhn.js')

var arg = process.argv[2];

console.log(luhn.validate(arg));