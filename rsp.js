
let userChoice = ""; 
const playGame = function(userChoice) {
    let computerChoice = Math.random(); 
    if (computerChoice < 0.3) {
       computerChoice = "Rock"; 
    } else if (computerChoice <= 0.6 ) {
        computerChoice = "Seissors"
    } else  {
        computerChoice = "Paper" ;
    } 
    if (computerChoice === "Rock" && userChoice === "Seissors") {
        return (" Computer Win") ;
    } else if (computerChoice === "Seissors" && userChoice === "Rock") {
        return (" User Win") ; 
    } else if (computerChoice === "Seissors" && userChoice === "Paper") {
        return (" Computer Win") ; 
    } else if (computerChoice === "Paper" && userChoice === "Seissors") {
        return (" User Win") ; 
    } else if (computerChoice === "Rock" && userChoice === "Paper") {
        return (" User Win") ; 
    } else if (computerChoice === "Paper" && userChoice === "Rock") {
        return (" Computer Win") ; 
    } else {
        return "tie"
    }
} 

playGame ("Seissors");