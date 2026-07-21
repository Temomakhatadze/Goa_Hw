//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending){
  if(ending.length > str.length ){
    return false
}
  
  var strStart = str.length - ending.length ;
  for(var i = 0; i < ending.length; i++){
    if (str[strStart + i] !== ending[i]){
      return false
    }
  }
  return true
}