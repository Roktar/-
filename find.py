def findString(data, find) :
    size = len(find)

    for i in range(0, len(data)) :
        for j in range(i, len(data)) :
            if data[j:(i+size)] == find:
                return 1
        
    return -1    

search = "asdf"
strings = "accewqasdffew"

finding = findString(strings, search)

print(("찾음" if finding == 1 else "못찾음"))
                    