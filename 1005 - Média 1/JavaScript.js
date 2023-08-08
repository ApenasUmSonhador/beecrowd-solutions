var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

console.log("MEDIA = "+ ((3.5*a+b*7.5)/11).toFixed(5))