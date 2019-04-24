
const Game = function (myGamr,computerGame) 

{
    

if ( myGamr === "rock" && computerGame=== "rock") {
    return'tie'
} else if ( myGamr === "rock" && computerGame ==="paper") {
    return'lose'
} else if ( myGamr === "rock" && computerGame==="scissors"){
    return'win'
}
else if ( myGamr === "paper" && computerGame==="paper" ) {
    return'tie'
} else if ( myGamr === "paper" && computerGame==="scissors" ) {
    return'lose'
} else if ( myGamr === "paper" && computerGame==="rock" ){
    return'win'
}
else if ( myGamr === "scissors" && computerGame ==="scissors" ) {
    return'tie'
} else if ( myGamr === "scissors" && computerGame==="rock") {
    return'lose'
} else if ( myGamr === "scissors" && computerGame==="paper"){
    return'win'
}
};

Game("scissors","scissors");