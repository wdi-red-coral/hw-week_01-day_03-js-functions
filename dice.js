const rollDice = function () {
    const value1 = Math.floor(Math.random() * (6) + 1);
    const value2 = Math.floor(Math.random() * (6) + 1);
    return value1 + value2;
};

console.log(rollDice());

// BONUS PART IS THE FOLLOWING

const rollTheDice = function (times) {
    let result = null;
    for (let i = times; i>=1; i--) {
        let value = Math.floor(Math.random() * (10) + 1);
        result = result + value;

    }
    return result
};

console.log(rollTheDice(50));

