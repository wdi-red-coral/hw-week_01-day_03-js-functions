/*rock, paper, scissors Game
*/
const playGame = function (userChoise){
    let arrayCohices = ["rock" ,"paper", "scissors"];
    let pcChoise  =  arrayCohices[Math.floor(Math.random()*arrayCohices.length)];
    let userWin = "User win, Computer lose" ; 
    let pcWin = "Computer win, User lose" ; 
    let equal = "Equality"
    //check if userChoise match one of these choices 
    if(userChoise === "rock" || "paper" || "scissors"){
        console.log("User picked: "+ userChoise+"\n"+"Computer picked: "+ pcChoise); 
        if( (userChoise == "paper" && pcChoise == "rock")||
            (userChoise == "rock" && pcChoise == "scissors")||
            (userChoise == "scissors" && pcChoise == "paper")){
            return userWin;
        
        }else if( (userChoise == "scissors" && pcChoise == "rock")||
                (userChoise == "paper" && pcChoise == "scissors") ||
                (userChoise == "rock" && pcChoise == "paper")){
            return pcWin;
        
        }else if( (userChoise == "paper" && pcChoise == "paper") || 
                (userChoise == "rock" && pcChoise == "rock") || 
                (userChoise == "scissors" && pcChoise == "scissors")) {
            return equal;
        }
    }else{
        return "ERROR! "+ userChoise + "isn't match!";
    }
}//end function 