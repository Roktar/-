def recursive(start, end, data): 
    if end <= 0: 
        return 0 
    else: 
        return recursive(start, (end-1), data) + data[end-1] 