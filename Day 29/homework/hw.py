#1   შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს სიას შემდეგ კი ამ სიიდან დააბრუნედ მხოლოდ კენტი რიცხვების ჯამი
def temo_richvebist_jami(sia):
    jami = 0
    for ricxvi in sia:
        if ricxvi % 2 != 0: 
            jami += ricxvi
    return jami
sia = [1, 2, 3, 4, 5, 6]
print(temo_richvebist_jami(sia))  
#2   შექმენით ფუნქცია რომელიც მიიღებს სახელებით სავსე სიას შემდეგ კი დააბრუნეთ ყველა ის სახელი რომელიც შედგება მხოლოდ 4 ასოსგან
def name(sia):
    return [saxeli for saxeli in sia if len(saxeli) == 4]
sia = ["ანა", "ნიკა", "ლუკა", "ელენე", "გიორგი", "დათა"]
print(name(sia))  
#3  შექმენით ფუნქცია რომელიც მიიღებს რიცხვებით სავსე სიას შემდეგ კი გამოიტანეთ ისეთი რიცხვები რომლებიც იყოფა 3'ზეც და 5'ზეც
def gamokvleva_3_da_5(sia):
    return [x for x in sia if x % 3 == 0 and x % 5 == 0]
sia = [10, 15, 30, 33, 45, 50, 60]
print(gamokvleva_3_da_5(sia))  
#4
# გამოიყენება სტრინგის ცვლადების ჩასასმელად ძალიან მარტივად და თვალსაჩინოდ.
#5
#vuyure
