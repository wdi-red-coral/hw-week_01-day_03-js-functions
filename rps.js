gitconst playGame= function (user, computer){
    if(user === "paper" && computer === "scissors"){
    return "computer is the winner"
    }
    else if(user === "scissors" && computer === "rock"){
    return "computer is the winner"
    }
    else if(user === "rock" && computer === "paper"){
    return "computer is the winner"
    }
    else if(user === "paper" && computer === "paper"){
    return "computer and user are tied"
    }
    }
    //solutions
    playGame("paper", "scissors")
    //"computer is the winner"
    playGame("scissors", "rock")
    //"computer is the winner"
    playGame("rock", "paper")
    //"computer is the winner"
    playGame("paper", "paper")
    //"computer and user are tied"


    