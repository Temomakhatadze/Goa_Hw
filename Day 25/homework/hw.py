#2  ამიხსენით დეტალურად რა არის def ფუნქცია 
# და როგორ იწერება მისი სტრუქტურა

#def- განსაზყრავს ფუნქციას   

#3ორი ტექსტის შეერთებადაწერე ფუნქცია,
#  რომელიც მიიღებს ორ სტრიქონს და დააბრუნებს 
# მათ შეერთებულ ვერსიას.

def adamiani(gama,rjoba):
    print(f"gamarjoba {adamiani}")
adamiani("gama,rjoba")

#4ტექსტის გამრავლებადაწერე ფუნქცია, რომელიც მიიღებს ტექსტს და რიცხვს,
#  შემდეგ დააბრუნებს ტექსტს იმდენჯერ გამრავლებულს, რამდენიც რიცხვია.

def zdarova(zd):
    print("zd {zdarova}")
zdarova("zd")
zdarova("zd")
zdarova("zd")

#5 f-სტრიქონით მისალმებადაწერე ფუნქცია,
#  რომელიც მიიღებს სახელს და დააბრუნებს მისალმების ტექსტს f-სტრიქონის გამოყენებით

def food(meat):
    print(f"me vjam {meat}-s.")
food("xinkal")

#BOSS LEVEL
def word_legeths(st):
    splited_st = st.split(" ") 
    result=""
    for i in splited_st:
    result = + i + str(len(i)) 
    print(result)
word_legeths("hello word phyton")