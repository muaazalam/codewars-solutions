/*DESCRIPTION:
What's in a name?
...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    "Next to a lake", "chris" --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    "Under a sea", "chris" --> false
         ^   ^
         r   s

    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    "A crew that boards the ship", "chris" --> false
       cr    h              s i
       cr                h  s i  
       c     h      r       s i
                 ...
          
    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    "A live son", "Allison" --> false
     ^ ^^   ^^^
     A li   son
            
    Contains all of the correct letters in "Allison", in order, but not enough of all of them (missing an 'l').
FUNDAMENTALS*/
function nameInStr(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
  
    let index = 0; 
  
    for (let i = 0; i < lowerStr2.length; i++) {
      const char = lowerStr2[i];
  
      const foundIndex = lowerStr1.indexOf(char, index);
  
      if (foundIndex === -1 || foundIndex < index) {
        return false;
      }
  
      index = foundIndex + 1;
    }
  
    return true;
  }

  //https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript