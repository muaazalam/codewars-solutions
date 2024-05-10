/*DESCRIPTION:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/
function maps(x){
    let y=[];
    for(let i =0;i<x.length;i++){
      y[i]=x[i]*2;
    }
    return y
  }
  //https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript