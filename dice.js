
const rollDice = function() {
    let dice1 = Math.floor(Math.random() * 7); 
    let dice2 = Math.floor(Math.random() * 7); 
    if (dice1 !== 0 && dice2 !== 0) {
    // the next two comments are for just making sure that the method 
    // choosed a numbers between 1 and 6 in addition to the corect answer
    //   console.log(dice1); 
    //   console.log(dice2); 
      return (dice1 +dice2);
    } 
} 

rollDice ();