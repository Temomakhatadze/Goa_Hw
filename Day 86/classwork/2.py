#https://www.codewars.com/kata/55a996e0e8520afab9000055/solutions/python
def cookie(x):
    if type(x) is str:
        name = "Zach"
    elif type(x) in (int, float):
        name = "Monica"
    else:
        name = "the dog"

    return  f"Who ate the last cookie? It was {name}!"