/*DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/
function findAverage(array) {
    let sum=0;
    if (array==null||array.length==0)
      return 0;
    for(let i =0;i<array.length;i++){
      sum+=array[i];
    }
    sum/=array.length;
    return sum;
  }
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript