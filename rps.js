// Rock, Paper, Scissors

const rps = function (pic){

const computer = Math.floor(Math.random()*3);

let array = ["rock","paper","scissors"];

if ( pic !== "rock" && pic !== "paper" && pic !== "scissors" )

{return "you must choose one of: rock, paper, scissors";}

else if (pic === "rock" && array[computer]=== "scissors" || pic === "paper" && array[computer]=== "rock" || pic === "scissors"&& array[computer]=== "paper" )

{return "you win";}

else if (pic === "scissors" && array[computer]=== "rock" || pic === "rock" && array[computer]=== "paper" || pic === "paper"&& array[computer]=== "scissors" )

{return "you lose";}

else if (pic === "scissors" && array[computer]=== "scissors" || pic === "rock" && array[computer]=== "rock" || pic === "paper"&& array[computer]=== "paper" )

{return "play again";}}

rps();