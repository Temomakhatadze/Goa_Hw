#1
# lower() - გარდაქმნის სტრინგს პატარა ასოებად

# upper() - გარდაქმნის სტრინგს დიდი ასოებად

#replace()  გამოიყენება სტრიქონში არსებული სიმბოლოს

#find()  აბრუნებს იმ სიმბოლოს ან ტექსტის პირველივე შემთხვევის ინდექსს, სადაც იგი გვხვდება სტრიქონში.

#.swapcase() დიდი ასოები პატარა ხდება დაპატარა დიდ ასოდ
#2
my_surname = "Beridze"
user_surname = input("Enter your surname: ")
if my_surname.lower() == user_surname.lower():
    print("Our surnames are similar.")
else:
    print("We have different surnames.")
#3
food=["vasli","atami","bananai","bostneuli"]
food.pop()
food.pop(2)

food.append("salati")
food.append("qatami")

print("Updated food list:", food)
#4

my_name = "temo"


user_name = input("sheiyvane saxeli: ")


if my_name[0] == user_name[0] and my_name[-1] == user_name[-1]:
    print(2)
elif my_name[0] == user_name[0] or my_name[-1] == user_name[-1]:
    print(1)
else: 
    print(0)