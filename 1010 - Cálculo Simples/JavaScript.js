var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

l1 = lines[0].split(" ")
l2 = lines[1].split(" ")

console.log("VALOR A PAGAR: R$ " + (l1[1] * l1[2] + l2[1] * l2[2]).toFixed(2))