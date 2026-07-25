//1
const p = document.querySelector("p")
p.id = "temo"
console.log(p.id)

//2

const button = document.querySelector("button")
button.className = "temo1"


//3 
const temooo = document.createElement('p');
temooo.textContent = "mogesalmebi.createElement()";


//4
let paragraph = document.querySelector("p");
console.log(paragraph.nextElementSibling);



//5
let div = document.querySelector("div");

console.log(div.children);

// nextElementSibling - არის მეთოდი რომელიც გვეუბნება ერთი ელემენტის რომ რომელია შემდეგი მეორე ელემენტი
