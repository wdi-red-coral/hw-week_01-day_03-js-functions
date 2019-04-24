const rollDice= function(){
    let r1= Math.floor((Math.random() * 6) + 1);
    let r2 = Math.floor((Math.random() * 6) + 1);
    let sum = (r1 + r2 );
      console.log("Dice rolled are" + r1 +" "+"+" + r2+" "+ "sum is " + sum)


}