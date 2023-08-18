var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log((lines[0] / lines[1]).toFixed(3) + " km/l")