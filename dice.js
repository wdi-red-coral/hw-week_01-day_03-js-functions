const rollDice= function()
   {
    let roll1=Math.floor(Math.random() * 6) + 1;
console.log(roll1);
    let roll2 = Math.floor(Math.random() * 6) + 1;
console.log(roll2);
    return roll1 +roll2;
   }
   rollDice();