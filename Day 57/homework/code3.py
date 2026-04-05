#https://www.codewars.com/kata/570597e258b58f6edc00230d/train/python
def array(string):
    parts= string.split(",")
    return  " ".join(parts[1:-1]) or None