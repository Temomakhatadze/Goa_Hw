
//1)შექმენი ფუნქცია, 
// რომელსაც გადაეცემა სახელი და default არგუმენტი სახელისთვის 
// ("Guest") ყოველ ჯერზე შექმენით უნიკალური guest-ის ნომერი 
// math.random()-ის გამოყენებით რომ guest-ს მიუწეროთ გვერდით 
// (მაგ: Guest158951) ამ ფუნქციამ უნდა დააბრუნოს მისალმება სახელისთვის 
// ან default მნიშვნელობისთვის (დაგჭირდებათ in ოპერატორი და ! ოპერატორი)
function randomsaxeli(name = "guest") {
    if  (!name || name === "guest"){ 
        const temo = Math.floor(Math.random() * 1000000)
        name = "guest" + temo;
    }
    return `hello ${name}` 
}


//2შექმენით ერთი ფუნქცია რომელსაც გადაეცემა ერთი სახელი არგუმენტად, და ასევე გადაეცით default პარამეტრად თქვენი სახელიც, ფუნქციამ უნდა დააბრუნოს მისალმება არგუმენტის გამოყენებით, გამოიყენეთ String Literal
//2) შექმენი მთავარი ფუნქცია generateEmail(firstName, lastName).მოთხოვნები:
//გამოიყენე helper function cleanText(text)
//helper ფუნქციამ ტექსტი უნდა გადააქციოს პატარა ასოებად
//საბოლოოდ დაბრუნდეს ელფოსტა ფორმატში: first.last@company.com
//გამოიძახეთ ფუნქციები hoisting საშუალებით
//3) შექმენით ფუნქცია, რომელიც დააგენერირებს რიცხვებს 1 დან 20 მდე, თქვენი დავალებაა რომ string literal ით დაპრინტოთ სტრინგი: "ჩემი რიცხვია {number}" გამოიძახეთ ფუნქცია hoisting საშუალებით
function greet(name"temo"){
    if (name == "temo"){
        return "buy"
    }else{

    }return `hello ${name}`
}




//შექმენი მთავარი ფუნქცია generateEmail(firstName, lastName).
//მოთხოვნები:
//გამოიყენე helper function cleanText(tex
//helper ფუნქციამ ტექსტი უნდა გადააქციოს პატარა ასოებად
//საბოლოოდ დაბრუნდეს ელფოსტა ფორმატში: first.last@company.com
//გამოიძახეთ ფუნქციები hoisting საშუალებით

function cleantext(first,last){
    return `${first}, ${last}@gmail.com`
}
function generategmail(fistname, lastname){
    return `ur gmail is ${cleantext(fistname, lastname)}`
}
console.log(generategmail)
//3) შექმენით ფუნქცია, რომელიც დააგენერირებს რიცხვებს 
// 1 დან 20 მდე, თქვენი დავალებაა რომ string literal ით
//  დაპრინტოთ სტრინგი: "ჩემი რიცხვია {number}" გამოიძახეთ ფუნქცია
//  hoisting საშუალებით

//4 
function randomnum(){
    return Math.round(Math.random() * 20)
}
console.log(randomNum())
console.log(randomNum())
console.log(randomNum())
console.log(randomNum())
console.log(randomNum())
//6


function getcurrent(birthyear){
    return 2026
}
function getAge(birthYear){
    if(birthYear > getCurrentYear()){
        return "Stupid"
    }
    return `You were born in: ${birthYear} & you are: ${getCurrentYear() - birthYear}yo`
}

console.log(getAge(2007))
console.log(getAge(2005))
console.log(getAge(2000))
console.log(getAge(1998))