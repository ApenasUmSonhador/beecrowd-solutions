var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let l1 = lines[0].split(" ")
let l2 = lines[1].split(" ")

console.log((Math.sqrt(((l1[0] - l2[0]) ** 2 + (l1[1] - l2[1]) ** 2))).toFixed(4))