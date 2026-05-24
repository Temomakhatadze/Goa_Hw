#https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python
def filter_list(l):
    result = []
    for item in l :
        if type(item) == int and item >= 0 :
            result.append(item) 
    return result
