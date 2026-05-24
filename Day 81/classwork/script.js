/////////////////////PRE-CLASSWORK//////////////////////////
let bum = 1
while (bum <= 10) {
    console.log(bum)
    bum++
}
/**/

let num = 1
let num2 = 5
while (num && num2 <= 10) {
    console.log(num)
    console.log(num2)
    num++
}


/*2 duael*/
let num3 = 10
do{
    console.log(num3)
} while (num3 < 20)
/**/
let num4 = 10
do{
    console.log(num4)
    num4++
    break
} while (num4 > 20) 

    /*break acherebs kods sadac 
    ar unda iyos tishavs*/

/*3 iteratorebi*/

const console5 = () => {
    console.log(5)
}
const funcClons = console5

funcClons() 


// name
const console5 = () => {
    console.log(5)
}
const funcClons = console5
funcClons() 

console.log(funcClons.name)

//
let num = [1,2,3,4,5,6,7,8,9,10]
num.forEach((val, index) => {
    console.log(val)
    console.log(index)

})

//მაპ
let temo = [1,2,3,4,5,6,7,8,9,10]
let x = temo.map((val,index) => {
    return val * index
})
console.log(x)

//filter
let temo1 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo1.filter((val,index) => {
    return val > 5
})

//
console.log(x1)
let temo1 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo1.filter((val,index) => {
    return index > 2
})
console.log(x1)
///////////////////////////////////
///////////////////////////////////
let temo1 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo1.findindex((val,index) => {
    return val > 5
})
console.log(x1)

//////////////////////RADIUS//////////////////////
let temo2 = [1,2,3,4,5,6,7,8,9,10]
let x1 = temo2.reduce((preVal,curlVal) => {
    return preVal* curlVal
},10/*Akumulatori*/ )
console.log(x1)





////////////////////////CLASSWORK////////////////////////////

