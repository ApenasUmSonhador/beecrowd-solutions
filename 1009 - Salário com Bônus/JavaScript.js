var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = lines[0] // Pode ser descartado se quiser, uma vez que programa não usufrui dessa variável.
let salary = parseFloat(lines[1])
let sell = parseFloat(lines[2])

console.log("TOTAL = R$ " + (salary + 0.15 * sell).toFixed(2))