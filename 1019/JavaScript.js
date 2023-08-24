var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0])
let h = Math.floor(n / 3600)
n %= 3600
let m = Math.floor(n / 60)
n %= 60
console.log(h + ":" + m + ":" + n)