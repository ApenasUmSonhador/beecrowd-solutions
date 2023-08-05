var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159
let r = parseFloat(lines[0])
console.log("A=" + (pi * r ** 2).toFixed(4))