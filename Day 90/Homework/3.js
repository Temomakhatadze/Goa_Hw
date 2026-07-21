//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {  
 for (var i = 0 ; i < numbers.length ; i++){
   for(var j = i + 1 ; i < numbers.length ; j++ ){
     if (numbers [i] > numbers[j]){
       var temp = numbers[i] ;
       numbers[i]=numbers[j];
       numbers[j] = temp
     }
   }
 }
  return numbers[0] + numbers[1];
}