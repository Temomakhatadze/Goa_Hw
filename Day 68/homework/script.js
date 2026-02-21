//1
//1) მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ არის თუ არა რიცხვი ლუწი
//  ან კენტი ternary operator ით, თუ რიცხვი კენტია, გამოიტანეთ მესიჯი "Number is odd",
//  თუ რიცხვი ლუწია გამოიტანეთ "Number is even"

let number = Number(prompt("sheiyvane ricxvi"))
let result = number  % 2 === 0 ? "Number is even" : "Number is odd";
console.log(result)

//2 
//მომხმარებელს შემოატანინეთ ასაკი და ცვლადი is_student 
// გაუტოლეთ booleanს, თუ მომხმარებელი არის 18 წელსა და 24 წელს შორის 
// და არის სტუდენტი, მაშინ დაპრინტეთ მესიჯი: "შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია,
//  თუ მომხმარებელი არის 18 წლის და არ არის სტუდენტი, გამოიტანეთ მესიჯი: "18 წლის ხარ მარა 
// სტუდენტი არა, რა სტიპენდიაზე ლაპარაკობ", სხვა შემთხვევაში: "ჯერ სკოლა დაამთავრე", გამოიყენეთ
//  if-else-elseif

let age = prompt("16 - 24 წლამდე :") ; 
let is_student= prompt("სტუდენტი ხარ? (true/false)" )=== true;
if (age > 18 && age<= 24 && is_student){
    console.log("შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია");
} else if (age === 18 && !is_student){
    console.log("18 წლის ხარ მარა სტუდენტი არა , რა სტიპენდიაზე ლაპარაკობ")
}else{
    console.log("ჯერ სკოლა დაამთავრე")
}


//3
//მომხმარებელს prompt ად შემოატანინეთ 5 მანქანის მოდელი
//  ან სახელი და შეამოწმეთ თითოეული და გამოიტანეთ მესიჯი თითოეულზე
//  switch/case გამოყენებით

let bb = prompt("შემოიყვანე 5 ყველაზე პოპულარული მანქანის სახელი");
switch (bb){
    case "1":
        console.log("mersedes")
        break ;
    case "2":
        console.log("BMW")
        break;
    case "3":
        console.log("audi")
        break ;
    case "4":
        console.log("ferrari")
        break;
    case "5":
        console.log("honda")
        break;
        default:
            console.log("არასწორი მანქანა");
}

