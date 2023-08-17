var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines[0].split(" ")

let a = parseInt(line[0])
let b = parseInt(line[1])
let c = parseInt(line[2])

let maior = (((a+b+Math.abs(a-b))/2) + c + Math.abs(((a+b+Math.abs(a-b))/2)-c))/2
console.log(maior + " eh o maior")  