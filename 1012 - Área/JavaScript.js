var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

entrada = lines[0].split(" ")
a = parseFloat(entrada[0])
b = parseFloat(entrada[1])
c = parseFloat(entrada[2])

console.log("TRIANGULO: " + (a * c / 2).toFixed(3))
console.log("CIRCULO: " + (3.14159 * c ** 2).toFixed(3))
console.log("TRAPEZIO: " + ((a + b) / 2 * c).toFixed(3))
console.log("QUADRADO: " + (b ** 2).toFixed(3))
console.log("RETANGULO: " + (a * b).toFixed(3))