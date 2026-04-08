#https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

#4)https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python
def is_pangram(st):
    st = st.lower()
    count = 0
    for me in "abcdefghijklmnopqrstuvwxyz":
        if me in st:
            count += 1
    return count  == 26