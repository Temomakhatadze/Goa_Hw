
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
const result = [] ;

    for (const digit of String(n)) {
    result.splice(0,0,Number(digit)) 
}
    return result;
}