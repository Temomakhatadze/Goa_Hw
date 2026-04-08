#https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python
def disemvowel(string_):
    bombo = ""
    for temo in string_:
        if temo not in "aeiouAEIOU":
            bombo += temo
    return bombo