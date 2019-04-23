const generatePcChoice = function () {
    const value = Math.floor(Math.random() * (3));
    let pcChoice = null;
    if (value === 0) {
        pcChoice = 'rock';
    }
    else if (value === 1) {
        pcChoice = 'scissor';
    }
    else {
        pcChoice = 'paper';
    }
    return pcChoice;
};


const game = function (youChose) {

    if (typeof(youChose) === 'string') {
        const userInput = youChose.toLowerCase();
        const pcChoice = generatePcChoice();

        if (userInput === 'rock' && pcChoice === 'rock') {
            return 'Tie';
        }
        else if (userInput === 'rock' && pcChoice === 'scissor') {
            return 'YOU ARE THE MAN';
        }
        else if (userInput === 'rock' && pcChoice === 'paper') {
            return 'YOU ARE A DARN LOSER';
        }
        else if (userInput === 'scissor' && pcChoice === 'scissor') {
            return 'Tie';
        }
        else if (userInput === 'scissor' && pcChoice === 'rock') {
            return 'YOU ARE A DARN LOSER';
        }
        else if (userInput === 'scissor' && pcChoice === 'paper') {
            return 'YOU ARE THE MAN';
        }
        else if (userInput === 'paper' && pcChoice === 'paper') {
            return 'Tie';
        }
        else if (userInput === 'paper' && pcChoice === 'scissor') {
            return 'YOU ARE A DARN LOSER';
        }
        else if (userInput === 'paper' && pcChoice === 'rock') {
            return 'YOU ARE THE MAN';
        }
        else {
            return 'invalid value';
        }
    }
    else {
        return 'please use strings';
    }
};

console.log(game('paper'));

