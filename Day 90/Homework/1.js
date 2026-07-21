//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function dnaStrand(dna){
 let compliment = "";
  for (const acid of dna){
    if(acid ==="A"){
      compliment += "T";
    }else if (acid === "T"){
      compliment += "A";
    }else if (acid === "C"){
      compliment += "G";
    }else if (acid === "G"){
      compliment += "C";
    }
  }
  return compliment
}