const game = function (choice) {

    let computer= Math.floor(Math.random() * 3);

    if (computer===0) {
        computer='rock'
    }else if (computer===1){ 
        computer='paper'
    }else {
        computer='scissors'
    }      
   if(computer === choice){
        return "tie";
   }else{
		if (computer === "rock" && choice === "paper" || choice === "rock" && computer === "scissors" || computer === "paper" && choice === "sr" ){
            return "user win";
        } else {
            return "computer win" ;
        }
    } 
}

