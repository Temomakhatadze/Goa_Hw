#https://www.codewars.com/kata/55b42574ff091733d900002f/train/python
def friend(x):
    result = []
    for temo in x:
        if len(temo) == 4:
            result.append(temo)
    return result