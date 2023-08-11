var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

console.log("MEDIA = "+ (0.2*a + 0.3*b + 0.5*c).toFixed(1))