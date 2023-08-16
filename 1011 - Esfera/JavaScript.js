var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

r = parseFloat(lines[0]);
pi = 3.14159;
console.log("VOLUME = " + (4.0 / 3 * pi * r ** 3).toFixed(3));