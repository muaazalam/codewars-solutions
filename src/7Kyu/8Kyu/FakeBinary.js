/*DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/
function fakeBin(x){
    let digit=0;
    let result=''
    for (let i =0;i<x.length;i++){
      digit=parseInt(x[i],10);
      if(digit>=5){
        result+='1'
      }
      else{
        result+='0'
      }
    }
    return result;
  
  }
  //https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript