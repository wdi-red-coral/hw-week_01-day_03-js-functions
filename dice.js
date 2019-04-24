const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const playGame = function(player){
const random = Math.floor(Math.random() * 3);
let result = "";


//Set the random result
if (random === 0){

    result = rock;
}else if (random === 1){

   result = paper;
}else if (random === 2){

   result = scissors;
}


// Compare 
if (player === rock && random === 0 || player === paper && random === 1 
    || player === scissors && random === 2){
     
    return "Player: " + player + " opponent: " + result + " Tie!";
}else if (player === rock && random === 2 
    || player === paper && random === 0 || player === scissors && random === 1){

        return "Player: " + player + " opponent: " + result + " Player won!";

}else if (player === rock && random === 1 
    || player === paper && random === 2 || player === scissors && random === 0){

return "Player: " + player + " opponent: " + result + " Player lost!";
}
}

playGame(rock);
playGame(paper);
playGame(scissors)