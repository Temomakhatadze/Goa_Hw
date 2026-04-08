#https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/python
def get_count(sentence):
    temo = 0
    for i in sentence:
        if i  in "aeiou":
            temo += 1
    return temo

