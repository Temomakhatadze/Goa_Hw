let score = prompt("შეიყვანეთ ქულა:");
score = Number(score);

if (score > 50 && score <= 100) {
console.log("ჩააბარე");
} else {
console.log("ვერ ჩააბარე");
}

//2 

let age = [ 12 ,15 , 19 ,12 , 20 ]  



if (age > 18 || student === "true") {
console.log("შესვლა ნებადართულია");
} else {
console.log("შესვლა აკრძალულია");
}

// 3
let password = [1234] ;
let blocked = [2222]

if (password === "1234" && blocked === "false") {
console.log("წარმატებით შეხვედით სისტემაში");
} else {
console.log("შესვლა ვერ მოხერხდა");
}

// 4
let temp = [12,40, 36, 28,31, -10, -2];
temp = Number(temp);

if (temp < 0) {
console.log("Cold ");
} else if (temp >= 0 && temp <= 30) {
console.log("Normal ");
} else {
console.log("Hot ");
}
