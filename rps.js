const playGame = function (str){
    let compChoice = Math.floor(Math.random() * 3); 
    if ( compChoice === 1)
        compChoice = "rock";
    else {
        if (compChoice === 2)
            compChoice = "paper";
        else { 
            compChoice = "scissors";
            }

            switch (compChoice){
                case "paper":
                    if (str === "paper") return "Computer played " + compChoice + " It's a tie";
                    if (str === "scissors") return "Computer played " + compChoice + " User Won!";
                    if (str === "rock") return "Computer played " + compChoice + " User Lost";
                case "rock":
                    if (str === "rock") return "Computer played " + compChoice + " It's a tie";
                    if (str === "paper") return "Computer played " + compChoice + " User Won!";
                    if (str === "scissors") return "Computer played " + compChoice + " User Lost";
                case "scissors":
                    if (str === "scissors") return "Computer played " + compChoice + " It's a tie";
                    if (str === "rock") return "Computer played " + compChoice + " User Won!";
                    if (str === "paper") return "Computer played " + compChoice + " User Lost";

            }
    }
   
}

playGame("paper");
playGame("rock");
playGame("scissors");