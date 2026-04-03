// 1️
let skebedi = 10;
let name = "Gio";

function testScopes() {
    let skebedi = 20;
    var temuchini  = 100;

    console.log("Function skebedi:", skebedi); 
    console.log("Global name:", name); 

if (true) {
    let airplain = 50;
    console.log("Inside block airplain:", airplain); 
}


    console.log("Function skebedi:", skebedi); 
}

testScopes();

console.log("Global temuchini chingizi:", temuchini); 



//2
let x = 10;

function temo() {
    x = 20;
console.log("Inside:", x); 
}

temo();
console.log("Outside:", x); 


// 3
function testirebaa() {
    if (true) {
    let bomboklat = 5;
    console.log(bomboklat); 
    }

}

testirebaa();


// 4
function skibidi() {
    var c = 100;
    console.log(c); 
}

testVar();


for (let temo = 0; temo< 3; ) {
    console.log(temo);
}
