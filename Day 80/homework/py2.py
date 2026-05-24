#https://www.codewars.com/kata/546e2562b03326a88e000020/train/python
def square_digits(num):
    result = ""
    for digit in str(num):
        squered = int(digit) ** 2
        result += str(squered)
    return int(result)