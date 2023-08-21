l1 = input().split()
l2 = input().split()
print(f"{(((float(l1[0]) - float(l2[0])) ** 2 + (float(l1[1]) - float(l2[1])) ** 2)) ** (1/2):.4f}")