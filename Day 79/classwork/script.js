/* 1 */
for (let temo = 10; temo <= 100; temo+= 5) {
    console.log(temo);
}
/* 2 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
}
/* 3 */
let vvs = [1, 2, 3];
let wwe = [2, 3, 4];

for (let i = 0; i < vvs.length; i++) {
    if (wwe.includes(vvs[i])) {
        console.log(vvs[i]);
    }
}
