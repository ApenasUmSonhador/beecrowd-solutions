entrada_1 = input()
entrada_2 = input()
l1 = entrada_1.split()
l2 = entrada_2.split()

print(f"VALOR A PAGAR: R$ {(int(l1[1]) * float(l1[2]) + int(l2[1]) * float(l2[2])):.2f}")