var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])

console.log("DIFERENCA = " + (A * B - C * D))