const rollDice = function(diceNum=2){
    let total = 0;
    for(let i = 1; i <= diceNum; i++)
        total += Math.floor(Math.random() * 7 + 1);
    return total
}

