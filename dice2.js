
const rollDice = function (dice)
{
const dice1 = Math.floor(Math.random() * 6) +1;
const dice2 = Math.floor(Math.random() * 6) +1;
var diceTotal = dice1 + dice2 ;
    return ("Dic rolled are " + dice1+ " " +"and" + " " + dice2+ " and sum is "+diceTotal); }