
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

