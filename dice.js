const rollDice = function (){
    let num1 = 1+ Math.floor(Math.random() * 6);
    let num2 =1+ Math.floor(Math.random() * 6);
    
    return "Dice rolled are " + num1 + " and " + num2 + ". Sum is " + (num1+num2);
}
rollDice();