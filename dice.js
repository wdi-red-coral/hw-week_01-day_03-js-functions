const rollDice = function () {

let rand1 = Math.floor(Math.random()*6) +1;
let rand2 = Math.floor(Math.random()*6) +1;
 
let sum = rand1 + rand2;
return 'the rolled dice are ' + rand1 + ' and ' + rand2 + ' and the sum is ' + sum;
}
rollDice();


