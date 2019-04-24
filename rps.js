
const game = function(ch1){
 
    const H = Math.floor(Math.random() * 3);

    let array = ["rock", "paper","scissors"];
    
            if (ch1 === "rock" || ch1 === "paper" || ch1 === "scissors"){

                    if ((ch1 === "rock" && array[H] === "scissors" ) || (ch1 === "scissors" && array[H] === "paper") || (ch1 === "paper" && array[H] === "rock")){

                    return "win";

                    }else if ((ch1 === "rock" && array[H] === "rock") || (ch1 === "paper" && array[H] === "paper" )|| (ch1 === "scissors" && array[H] === "scissors")){

            return "try-agine";
            } else {
            return "lose";
            } 

            }else{
        return'choose one';
    }

};
