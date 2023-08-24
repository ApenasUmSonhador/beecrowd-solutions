var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0])
console.log(Math.floor(n / 365) + " ano(s)")
n %= 365
console.log(Math.floor(n / 30) + " mes(es)")
n %= 30
console.log(n + " dia(s)")