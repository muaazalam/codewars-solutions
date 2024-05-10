const rps = (p1, p2) => {
    let result='';
    if(p1=='scissors'&&p2=='paper'){
      result='Player 1 won!'
    }
    else if(p1=='rock'&&p2=='scissors'){
      result='Player 1 won!'
    }
    else if(p1=='paper'&&p2=='rock'){
      result='Player 1 won!'
    }
    else if(p1===p2){
      result='Draw!';
    }
    else{
      result='Player 2 won!'
    }
    return result;
    
    //https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript