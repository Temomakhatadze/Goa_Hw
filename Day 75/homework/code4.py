#4)https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python
def narcissistic( value ):
    digits = str(value)
    power = len(digits)
    total = sum(int(d) ** power for d in digits)
    return total == value