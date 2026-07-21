//1) https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let temo = [] ;

  for (let i  = 2 ; i < integer ; i ++){
    if (integer % i == 0){
      temo.push(i);
    }
  }
  if (temo.length == 0) {
    return integer + " is prime";
  } else {
    return temo ;
  }
}