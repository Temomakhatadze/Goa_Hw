#https://www.codewars.com/kata/58daa7617332e59593000006/train/python
def find_longest(arr):
    str_arr = [str(i) for i in arr]
    max_len = len(str_arr[0])
    result = str_arr[0]
    
    for i in str_arr:
        if len(i) > max_len:
            max_len = len(i)
            result = i
    
    return int(result)