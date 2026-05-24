//1) შექმენით რიცხვების მასივი. გამოიყენე forEach მეთოდი, 
// რათა თითოეული რიცხვი ცალ-ცალკე დაბეჭდო ეკრანზე.

const num = [1,2,3,4,5,6,7,8,9,10]
num.forEach(num => {
    console.log(num)
});

//2) მოცემულია რიცხვების მასივი. გამოიყენე map მეთოდი, 
// რომ შექმნა ახალი მასივი, სადაც ყველა რიცხვი იქნება გაორმაგებული.
const num1 = [1,2,3,4,5,6,7,8,9,10]
const x2 = num1.map(num1 * 2)
console.log(x2)
//3) შექმენით რიცხვების მასივი. გამოიყენე filter მეთოდი, 
// რათა დატოვო მხოლოდ ლუწი რიცხვები.

let temo1 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo1.filter((val,index) => {
    return temo1 % 2 === 0;
})
console.log(temo1)


//4) შექმენით რიცხვების მასივი. გამოიყენე reduce მეთოდი, 
// რომ გამოითვალო ყველა რიცხვის ჯამი.

let temo2 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo2.reduce((preVal,curlVal) => {
    return preVal* curlVal
},10 )
console.log(x1)
//5) შექმენით სახელების მასივი. გამოიყენე findIndex მეთოდი,
//  რომ იპოვო კონკრეტული სახელის (მაგალითად "Luka") ინდექსი მასივში.

let temo1 = ["temo","saba ","luka"]
let x1 = temo1.findindex((val,index) => {
    return val === "luka"
})
console.log(x1)