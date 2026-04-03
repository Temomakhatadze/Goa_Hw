function greet(){
    console.log("hello teemo")
}
greet()

function greet(tt){
    return "temo"+ tt
}
console.log(greet("tt"))



console.log(greet(6+7))
function sum(a,b){
    return a + b
}
// hoising - gvadzlevs 
// sashvalebas gamovidzaxot funqcia
// funqciis sheqmnamde



//1 შექმენით უპარამეტრო ფუნქცია რომელიც გამოიტანს მისალმებას:
//  "Hello {თქვენი სახელი}", გამოიყენეთ hoisting ის მეთოდი რომ 
// გამოიძახოთ ფუნქცია


sayHello();
function sayHello(){
    console.log(`temo makhatadze`)
}
//2 შექმენით ფუნქცია რომელიც გამოიტანს ორი რიცხვის ჯამს, 
// გამოიყენეთ hoisting ის მეთოდი რომ გამოიძახოთ ფუნქცია

console.log(sum(3,1000));
function sum(a,b){
    return a + b
}
//3 შექმენით ფუნქცია რომელსაც გადაეცემა პარამეტრად სახელი,
//  და გამოიტანს მისალმებას: "Hello <name> glad to meet you",
//  გამოიყენეთ hoisting ის მეთოდი რომ გამოიძახოთ ფუნქცია

console.log(greet("Temurchini_chingisi_ab_ib_teimurazi_teimuraz1"));
function greet(name){
    return "Hello "+name+ "glad to meet you"
}