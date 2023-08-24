n = int(input())

print(f"{n // 365} ano(s)")
n %= 365
print(f"{n // 30} mes(es)")
n %= 30
print(f"{n} dia(s)")