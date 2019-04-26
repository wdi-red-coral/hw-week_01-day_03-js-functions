const playGame = function(userChooser){
    if(!userChooser === "rock" && !userChooser === "paper" && !userChooser === "scissors")
        return;
    const comuterChooser = Math.floor(Math.random() * 3);
    const game = {
        "rock": 0,
        "paper": 1,
        "scissors": 2
    }

    let arr = [];
    for(let pike in game)
        arr.push(pike);
    switch(game[userChooser] - comuterChooser){
        case 1: return `You[${arr[game[userChooser]]}] > Computer[${arr[comuterChooser]}]`;
        case -1: return `You[${arr[game[userChooser]]}] < Computer[${arr[comuterChooser]}]`;
        case 2: return `You[${arr[game[userChooser]]}] < Computer[${arr[comuterChooser]}]`;
        case -2: return `You[${arr[game[userChooser]]}] > Computer[${arr[comuterChooser]}]`;
        default: return `You[${arr[game[userChooser]]}] = Computer[${arr[comuterChooser]}]`;
    }

};