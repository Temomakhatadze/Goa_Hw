#1) შემქენით ფუნქცია რომელიც მიიღებს სტრინგს და დააბრუნებს ამ სტრინგს დიდი ასოებით


#2) მომხმარებელს შემოატანინეთ თავისი სახელი და გამოიტანეთ ამ სახელის პირველი ასო upper_case'ში

goa="Temo Makhatadze"
print(goa.upper() )
#3) 
sentence = input("შეიყვანე წინადადება: ")
word_to_find = input("შეიყვანე საძიებელი სიტყვა: ")

if word_to_find in sentence:
    print(f"სიტყვა '{word_to_find}' ყოჩაყ შენ იპოვე✅")
else:
    print(f"სიტყვა '{word_to_find}' ბოდიში მაგრამ ვერ იპოვე  ❌")

#4) შექმენით ფუნქცია რომელიც მიიღებს 
# 2 არგუმენტს შემდეგ კი გამოიტანეთ 
# პირველი არგუმენტი რომელიც 
# იქნება upper_case'ში ხოლო მეორე 
# lower_case'ში და დაამეტეთ 
# ეს არგუმენტები ერთმანეთს
def combine_args(goa,studing):
    result = goa.upper() + studing.lower()
    print("Sedegi:", result)
combine_args("Temo", "MAKHATADZE")
#5) დღეს ნასწავლ ყველა მეთოდზე გააკეთეთ 5-5 მაგალითი.
#5.1(1)
text = "I love programming"
print(text.find("love"))  
#5.1(2)
mobile="xiaomi 15 ultra"
print(mobile.find("xiaomi"))
#5.1(3)
text = "I love footbal"
print(text.find("love")) 
#5.1(4)
mobile=" i saw a samsung"
print(mobile.find("samsung"))
#5.1(5)
question="what is the best academy"
print(question.find("best"))
#5.2(1)
georgia = "gamarjoba samSoblos"
georgia_2 = georgia.replace("samSoblo", "Python")
print("georgia_2")
#5.2(2)
georgia = "i love phython lesson"
phython = georgia.replace("samSoblo", "Python")
print("georgia")
#5.2(3)
txt = "i will 30 year's old in 10 year"
txt2 = txt.replace("30", "17")
print("txt")
#5.2(4)
sajmeli = "მიყვარს ვაშლი"
new_text = sajmeli.replace("ვაშლი", "ატამი")
print(new_text)
#5.2(5)
day = "ეს არის ძალიან  კარგი დღე"
day_sentence = day.replace("ძალიან ", "ცუდი")
print(day_sentence)
#5.3(1)
day= "Today Is A Beautiful Day!"
print(day.lower())
#5.3(2)
hiii = "HELLO"
print(hiii.lower())
#5.3(3)
my_name = "TEMO MAKHATADZE"
print( my_name.lower())
#5.3(4)
name = "TEMO MAKHATADZE"
print(name.lower())
#5.3(5)
name = "WE LOVE PROGRAMING"
print(name.lower())
#5.4(1)
goa="the mest academy"
print(goa.upper())
#5.4(2)
text = "hello"
print(text.upper())
#5.4(3)
text = "phyton"
print(text.upper())
#5.4(4)
text = "animal are intelegen"
print(text.upper())
#5.4(5)
text = "Hello World phytona" 
print(text.upper())
#5.5(1)
pompey="i love history"
print(pompey.capitalize())

#5.6(1)
monaco="I loVe CoNtRiEs"
print(monaco.swapcase())
#5.6(2)
temo="I loVe CoNtRiEs whith AmAZINGE flaG"
print(temo.swapcase())
#5.6(3)
monaco="I loVe FOtbAAl"
print(monaco.swapcase())
#5.6(4)
monaco="I hate dum people"
print(monaco.swapcase())
#5.6(5)
monaco="i am mOnSteR"
print(monaco.swapcase())