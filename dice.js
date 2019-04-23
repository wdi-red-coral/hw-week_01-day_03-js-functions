//Here is the rollDice function

const rollDice=function(Number)
{
var number1=Math.floor(Math.random() * 6) + 1  ;
var number2=Math.floor(Math.random() * 6) + 1  ;
var sum = number1+number2;
return ("Dice rolled are  " +number1+ "and  "+number2+ "  and the sum is "+ sum);
}

//Here are when i called them ,some examples are as follow :
rollDice(2)
"Dice rolled are  2and  2  and the sum is 4"
rollDice(4)
"Dice rolled are  1and  5  and the sum is 6"