var computerChoice =  Math.random();
if (computerChoice < 0.34){
    computerChoice = "paper";
} else if (comuterChoice <= 0.67){
    computerChoice = "rock" 
} else {
    computerChoice = "sissor"
};
   var computerChoice = Math.random()
const rps =  function(userChoice, computerChoice){
    if (computerChoice === userChoice) {
        return("it's a tie")
    } else if (computerChoice === "paper" && userChoice === "rock") {
        return("you lose")
    } else if (comuterChoice === "rock" && userChoice === "paper") {
        return("you win")
    } else if (computerChoice === "paper" && userChoice === "sissor") {
        return("you win")
    } else if (computerChoice === "sissor" && userChoice === ("paper") {
        return("you lose")
    } else if (computerChoice === "rock" && userChoice === ("sissor") {
        return("you lose")
    } else  (comuterChoice === "sissor" && userChoice === ("rock") { 
        return("you  win")
    }
};
