/*DESCRIPTION:
Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]*/
function diff(a, b) {
    let arr = a.filter(item => !b.includes(item)).concat(b.filter(item => !a.includes(item)));
    arr=[...new Set(arr)];
    arr.sort();
    
    return arr;
  }
  //https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript