var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0])
let h = parseInt(lines[1])
let moneyPerH = parseFloat(lines[2])

console.log(n)
console.log("Salary = U$ "+ (h*moneyPerH).toFixed(2))