/////////////////////PRE-CLASSWORK//////////////////////////





////////////////////////CLASSWORK////////////////////////////


//1) ახსენით კომენტარების სახით რომელი იტერატორი რისთვის გამოიყენება.

// forEach - marto uvlis mosivis titoeul elements

// map -  cvlis titoeul elemnts masivshi da abrunebs gardaqmneul masivs

// filter - filtravs masivs

//reduce - amcirebs umciresamde eseigi 1 amde

let list = [10, 'ლუკა', true, 20, 'ნიკა']
let list1 = list.filter(val => typeof val === Number );
console.log(list1)


let arr = [10, "ლუკა", true, 20, "ნიკა"];

let nums = [1, 2, 3, 4];

let answer = 1;

for (let i = 0; i < nums.length; i++) {
    answer = answer * nums[i];
}

console.log(answer);


let rr= ["luka","nika","saba","temo"]
let rr1 = rr.filter(val > val.lenght >3)
console.log(rr1)


/////////////////////////////2ND PART OF CLASSWORK//////////////////////////////////////////////////////////
//1 

let arr = [true, false, true, false];

let result = arr.filter(function(item) {
    return typeof item === "boolean";
}).length === arr.length;

console.log(result);

//2
let TEMO1 = [true, false, "ლუკა", 10];

let LL2 = arr2.tt(function(aa) {
    return typeof aa === "string";
});

console.log(LL2);
//3 - 4 

let person = {
    name: "თემო",
    age: 15,
    city: "თბილისი"
};
console.log(person);
person.city = "ქუთაისი"
//4
person.surname = "ბერიძე";
person.hobby = "ფეხბურთი";
person.club = "35 fc academy";
console.log(person);



