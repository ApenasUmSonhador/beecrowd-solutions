entrada = input().split()
a = float(entrada[0])
b = float(entrada[1])
c = float(entrada[2])

print(f"TRIANGULO: {(a * c / 2):.3f}")
print(f"CIRCULO: {(3.14159 * c ** 2):.3f}")
print(f"TRAPEZIO: {((a + b) / 2 * c):.3f}")
print(f"QUADRADO: {(b ** 2):.3f}")
print(f"RETANGULO: {(a * b):.3f}")