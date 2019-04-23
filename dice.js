// bonus: # of dice rolled
const rollDice = function (diceRoll) {
    let i = 0;
    let diceValue = [];
    do {
        diceValue[i] = 1 + Math.floor(Math.random() * 6);
        i++;
    } while (i < diceRoll)

    let sum = 0;
    for (m = 0; m < diceValue.length; m++) {
        sum = sum + diceValue[m];
    }
    return "Dice rolled are " + diceValue + ". Sum is " + sum;
}
rollDice(3);
rollDice(4);
rollDice(9);