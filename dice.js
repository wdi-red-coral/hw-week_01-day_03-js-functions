// ==============================

// Dice Roller

const DR = function (chooses) {

let sum = null; let roll = [];

for(i = 1; i <= chooses; i++){

let rand = Math.floor(Math.random()*6)+1;

sum = sum + rand; roll [ i - 1] = rand;}

return 'Dice rolled are ' + roll + ', ' + ' sum is ' + sum + '.'  ;}

DR();