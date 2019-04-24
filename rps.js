const game=function (mychoice) {

    let computerchoice= Math.floor(Math.random() * 3);
 
    if (computerchoice===0) {
        computerchoice="rocck"
    } else if (computerchoice===1){
        computerchoice="paper"
    } else {
        computerchoice="scissor"
    }
 
    if(computerchoice === mychoice){
        return "tie";
    }else{
 
        if (computerchoice === "rock" && mychoice === "paper" || mychoice === "rock" && computerchoice === "scissor" || computerchoice === "paper" && mychoice === "scissor" )
        {
            return "user win";
        } else {
            return "computer win" ;
        }
    }
 
 
 }