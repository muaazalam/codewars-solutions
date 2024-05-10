/*DESCRIPTION:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/
var uniqueInOrder=function(iterable){
  
    //your code here - remember iterable can be a string or an array
    let result =[],j=0;
    for(let i =0;i<iterable.length;i++){
      result.push(iterable[i])
      j=i;
      while(iterable[j+1]==iterable[i]){
        j++;
      }
      i=j;
    }
    return result;
  }
//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript  