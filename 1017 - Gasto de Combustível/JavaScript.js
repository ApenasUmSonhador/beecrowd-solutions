var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let t = parseInt(lines[0])
let v = parseInt(lines[1])

console.log((t*v/12).toFixed(3))