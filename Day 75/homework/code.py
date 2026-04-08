#https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python
def duplicate_encode(word):
    word = word.lower()
    result = ""
    
    for temo in word:
        if word.count(temo) == 1:
            result += "("
        else:
            result += ")"
            
    return result