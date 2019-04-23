const playGame=function(choice){
    let  randomChoice=Math.floor(Math.random() * 3); 
       //let Com=" ";
       if(randomChoice==0){randomChoice="rock"}
   else if(randomChoice==1){randomChoice="paper"}
   else if (randomChoice==2){randomChoice="scissors"}
   console.log("computer choice: "+randomChoice)
   if(choice=='rock'){
//console.log(R);
   if(randomChoice=='rock')return "tie";
   else if(randomChoice=='paper')return "lose";
   else if(randomChoice=='scissors')return "win";
   }//rock
   
   else if(choice=='paper'){
   if(randomChoice=='rock')return "win";
   else if(randomChoice=='paper')return "tie";
   else if(randomChoice=='scissors')return "lose";
   
   }//paper
   
   else if(choice=='scissors'){

    if(randomChoice=='rock')return "win";
    else if(randomChoice=='paper')return "tie";
    else if(randomChoice=='scissors')return "lose";

   }//scissors
   
   else {
       return'you should enter (rock , paper or scissors)'
   }
   
   }

   playGame('rock');