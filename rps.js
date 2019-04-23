const playGame = function (player) {
    const computer = Math.floor(Math.random() * 3) + 1;
    if (player === "rock" && computer === 1) {
        return ("Computer picked: rock Tie");
    } else if (player === "paper" && computer === 1) {
        return ("Computer picked: rock Win");
    } else if (player === "scissors" && computer === 1) {
        return ("Computer picked: rock Lose");
    } else if (player === "paper" && computer === 2) {
        return ("Computer picked: paper Tie");
    } else if (player === "scissors" && computer === 2) {
        return ("Computer picked: paper Win");
    } else if (player === "rock" && computer === 2) {
        return ("Computer picked: paper Lose");
    } else if (player === "scissors" && computer === 3) {
        return ("Computer picked: scissors Tie");
    } else if (player === "paper" && computer === 3) {
        return ("Computer picked: scissors Lose");
    } else if (player === "rock" && computer === 3) {
        return ("Computer picked: scissors Win");
    }
}
