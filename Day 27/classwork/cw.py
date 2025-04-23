
def mnojoba(f, l):
    return f * l
result = mnojoba(4, 5)
print("ტოლია:", result)
#2
def gamarjoba(name):
    print("gamarjoba, " + name + "mixaria Seni naxva.")
name = "ნიკა"
gamarjoba()
#3
def jami(a, b, c):
    result = a + b + c
    print("jami aris:", result)
jami(51, 19, 75)
#4
def concatenate(a, b):
    result = str(a) + str(b)
    print(" shedegiD:", result)
concatenate("Hello, ", "world!")
#5
#replace()  გამოიყენება სტრიქონში არსებული სიმბოლოს ან ტექსტის ჩანაცვლებისთვის.
georgia = "gamarjoba samSoblos"
georgia_2 = georgia.replace("samSoblo", "Python")
print("georgia_2")
#6
#.lower() არის სტრიქონის მეთოდი,
#  რომელიც ყველა დიდ ასოს გადააქცევს პატარა ასოდ.
pyton="GEORGIA"
print(pyton.lower())
#6.5
#.upper() არის სტრიქონის მეთოდი, რომელიც ყველა 
# პატარა ასოს გადააქცევს დიდ ასოდ.)
goa="the mest academy"
print(goa.upper())
#7
#.find()  აბრუნებს იმ სიმბოლოს ან ტექსტის პირველივე შემთხვევის ინდექსს, სადაც იგი გვხვდება სტრიქონში.
text = "I love programming"
print(text.find("love"))  
mobile="xiaomi 15 ultra"
print(mobile.find("xiaomi"))
#8
#.capitalize()  რომელიც სტრიქონის პირველ ასოს ხდება დიდ ასოდ, ხოლო დანარჩენები — პატარა ასოებად.
pompey="i love history"
print(pompey.capitalize())

venesuela="i love geography"
print(venesuela.capitalize())
#9
# .swapcase() დიდი ასოები პატარა ხდება დაპატარა დიდ ასოდ
monaco="I loVe CoNtRiEs"
print(venesuela.swapcase())

tbilisi="BeSt cYtiE in the wORD"
print(venesuela.swapcase())
