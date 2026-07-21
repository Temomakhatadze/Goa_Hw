//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function sumConsecutives(s) {
  let temo = [];
  let temo2 = s[0];

  for( let i = 1 ; i < s.length ; i++)
    if (s[i] ==  s[i -1]) {
     temo2 = temo2 + s[i]; 
    } else {
    temo.push(temo2);
    temo2 = s[i]
  }
  temo.push(temo2);
  return temo;
}