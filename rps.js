

    
     pcCh = Math.random();
    if (pcCh < 0.4) {
       pcCh = "rock";
    } else if(pcCh <= 0.8) {
       pcCh = "paper";
    } else {
       pcCh= "scissors";
    }


const comparChoise= function(userCh,pcCh){
    //if  2 choise equal
    if (userCh===pcCh){
        return "you'r tie";
    }
    // rock Vs paper
   else if (userCh==="rock" && pcCh==="paper"){
       return "win";
   } else if (userCh=== "paper"&& pcCh==="rock"){
       return "lose";
       // rock vs scissor 
   }else if (userCh==="rock"&& pcCh==="scissors") {
       return  "win ";
   } else if (userCh==="scissors" && pcCh==="rock"){
       return "lose";
   }// scissors vs paper
   else if (userCh=== "scissors" && pcCh==="paper"){
       return "win";
   }else if (userCh=== "paper" && pcCh==="scissors"){
       return |"lose";
   }
   comparChoise("rock",pcCh)
