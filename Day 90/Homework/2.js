//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
function maskify(cc) {
  if (cc.length <= 4){
    return cc;
  }
  var masked = "";
  for(var i = 0 ; i <cc.length - 4; i++){
    masked += "#";
  }
    for (var j = cc.length - 4; j < cc.length ;j++){
      masked += cc[j];
  }
      
  
  return masked;
}
