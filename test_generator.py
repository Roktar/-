def num() :
    for i in [1, 2, 3, 4, 5] :
        yield i

for i in num() :
    print(i)

a = iter([6, 7, 8, 9])
for j in a :
    print(j)