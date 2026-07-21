//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
  var result = "";
  
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    if (char === "-" || char === "_") {
      i++;
      if (i < str.length) {
        result += str[i].toUpperCase();
      }
    } else {
      result += char;
    } 
  }
  
  return result; 
}

