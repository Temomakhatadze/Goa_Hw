# https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/python
def sum_array(arr):
    if not arr or len(arr) < 3:      
        return  0
    arr = sorted(arr)
    return sum(arr[1: - 1])