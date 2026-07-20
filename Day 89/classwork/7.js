
//1
// დომ არის htmlis დოკუმენტის სტრუქტურა,
// რომeლიც საშუალებითაც  აძლევს ჯავასკრიპტმა ჰტმლში მოძებნოს ელემენტების  და შეცვლა.


//2
// იდ-ით - აბრუნებს ერთ ელემენტს
let title = document.getElementById("title");
console.log(title);

// ცლასს-ით - აბრუნებს ყველა ელემენტს ამ კლასით
let items = document.getElementsByClassName("item");
console.log(items);
// თაგ-ით - აბრუნებს ყველა ელემენტს ამ თეგით
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//3 
// დოკუმენტი არის JavaScript-ის ობიექტი, რომელიც წარმოადგენს მიმდინარე HTML დოკუმენტს.
// მისი საშუალებით შეგვიძლია DOM-თან მუშაობა, ელემენტების მოძებნა და შეცვლა.

 let gio = document.querySelectorAll("#title");
console.log(gio);

let davit = document. querySelector(".item");


davit.innerHTML= 
<button>
   <i>hello world</i>
</button>



david.style.button.backgroundColor = "red";
console.log(davit);
let p = document.getElementById("text");
p.style.fontSize = "32px";



//1
//შეიცავს მხოლოდ HTML ელემენტებს.
//s თუ HTML შეიცვალა, კოლექციაც ავტომატურად განახლდება.
//forEach() პირდაპირ არ აქვს.
//NodeList
//შეიძლება შეიცავდეს ყველა ტიპის node-ს (ელემენტები, ტექსტი და ა.შ.).
//querySelectorAll()-ით მიღებული NodeList static არის და ავტომატურად არ განახლდება.
//აქვს forEach() მეთოდი.



//2 
// querySelector()
//აბრუნებს პირველივე  ელემენტს.

//querySelectorAll()
//აბრუნებს ყველა შესაბამის ელემენტს.




//3


let temo = document.getElementsByClassName("box");
let temo2 = document.querySelectorAll("box");
let temo3 = document.querySelector(".box");

console.log(temo);s
console.log(temo2);


temo2.forEach(function(item){
    console.log(item);
});


//4

let p = document.querySelector(".text");

p.paragraph.textContent = "text";
p.paragraph.style.color = "red";


// 5
let container = document.getElementById("container");

container.innerHTML = `
    <button>hello</button>
    <p>hi im temo.</p>
    `;
    
    console.log(container);