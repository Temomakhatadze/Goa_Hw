#BOSS LVL
# ცარიელი სია სახელებისთვის
names = []

num_users = int(input("რამდენი მომხმარებელი უნდა შემოიყვანოს სახელები? "))
for i in range(num_users):
    name_input = input(f"{i+1}. შეიყვანე შენი სახელი: ")
    capitalized_name = name_input.capitalize()   
    names.append(capitalized_name)           
    print("მიმდინარე სახელების სია:", names)
