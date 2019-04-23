const rollDice = function () {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    return ("Dice rolled  are " + dice1 + " and " + dice2 + ". Sum is " + (dice1 + dice2));
}