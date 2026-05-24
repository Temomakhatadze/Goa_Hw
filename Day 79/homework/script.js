//1
// 1) შეvashliქმენით სია და გამოიყენეთ მასზე ყველა ნასწავლი მეთოდი.
//  კომენტარების სახით ახსენით რომელი მეთოდი რას აკეთებს
let fruit = [ "vashli", "banani","sazatro"]
//amatebs axal elements siis boloshi
fruit.push("atami");
// shlis bolo elements
fruit.pop();
//amotmebs elementis raodenobas
console.log(fruit.length);
// amotmebs aris tu ara siashi is elementi
console.log(fruit.includes("vashli"))
//ashorebs 1 elements
fruit.shift()
//amatebs elements romelic siis dasawyishia


/*2*/ 
let num = [1,2,3,4,5,6,7,8,9,10]
let num2 = [1,2,3,4,5,6,7,8,9,10]
let num3 = []
for (let i = 0; i < num.length; i+=2) {
    num.splice(i, 1)
    num2.splice(i, 1)
}
console.log(num)