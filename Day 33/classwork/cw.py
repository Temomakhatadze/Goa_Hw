#1
# # ფუნქცია არის კოდის დამოუკიდებელი ბლოკი, 
# რომელსაც აქვს სახელი და რომელსაც ვიძახებთ კონკრეტული მოქმედების შესასრულებლად;
#  იგი გამოიყენება კოდის გამეორების თავიდან ასაცილებლად და პროგრამის უფრო გასაგებად  და მარტივად დაწერას.

#2
def მოესალმე( Temo):
    print("" + Temo + "")

#3
name=["gio","nika","temo","saba","luka"]
name2=input("sheiyvane saxeli: ")
name3=int(input("sheiyvane saxeli"))
if name3>len(name):
    print("shecdomaaaa !")
else:
   name.insert(name2,name3)
print("განახლებული სია:", name)
#4
def name_shok(number):
    if number % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")
#5
gerr=["hello how are you"]
for i in range(gerr):
    print(gerr)