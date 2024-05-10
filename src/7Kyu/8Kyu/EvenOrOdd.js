/*DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
    let x="number"
    if(number%2==0){
      x='Even'
      return x;
    }  
    else{
      x='Odd'
      return x;
    }
  }
  //https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript