

//1 

let temo = Number(prompt("enter your name:"))
console.log(temo > 18 ? "you are adult" : "you are not adult")


//2

let me = prompt("1-5 ricxvi");
switch(me){
    case "1":
        console.log("number one");
        break;
    case "2":
        console.log("number two");
        break;
    case "3":
        console.log("number three");
        break;
    case "4":
        console.log("number fore");
        break;
    case "5":
        console.log("number five");
        break;
    default:
        console.log("wrong number")
}

// 3
let bombo = Number(prompt("age"));

if (bombo >= 18 && bombo <= 60){
    console.log("u can work")
} else if (bombo >60) {
    console.log("pensioner")
} else{
    console.log("u cnat work")
}
//4 
let color = prompt("შეიყვანე ფერი red, blue, green:");

switch (color) {
    case "red":
        console.log("შენ აირჩიე წითელი");
        break;

    case "blue":
        console.log("შენ აირჩიე ლურჯი");
        break;

    case "green":
        console.log("შენ აირჩიე მწვანე");
        break;

    default:
        console.log("ასეთი ფერი არ არსებობს");
}
