line = input().split()
a = int(line[0])
b = int(line[1])
c = int(line[2])

maior = (((a+b+abs(a-b))/2) + c + abs(((a+b+abs(a-b))/2)-c))/2
print(f"{int(maior)} eh o maior")