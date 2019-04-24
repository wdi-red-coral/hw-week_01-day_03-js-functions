let mshchoice =




const game=function (mshchoice) {

    let computerchoice= Math.floor(Math.random() * 3);  
    
    if (computerchoice===0) {
        computerchoice='ro'
    } else if (computerchoice===1){ 
        computerchoice='pr'
    } else {
        computerchoice='sr'
    }       

    // tie
    if(computerchoice === mshchoice){
        return "tie";
    }else{

        if (computerchoice === "ro" && mshchoice === "pr" || mshchoice === "ro" && computerchoice === "sr" || computerchoice === "pr" && mshchoice === "sr" ){
            return "user win";
        } else {
            return "computer win" ;
        }
    }
       
    
}
