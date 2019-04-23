var UserChoice = "paper";

var computChoice = Math.random();

var computChoice = computChoice < 0.34 ? "rock" : ( computChoice > 0.67 ? "scissors" : "paper" ) ;
//Here is the function 
const PlayGame=function(computChoice,UserChoice){
if ( computChoice === UserChoice)
  result = "It's a tie!" ; 
else if (computChoice =="rock" && UserChoice=="scissors")
  result =("computer Win");
else if (computChoice =="paper" && UserChoice=="rock")
  result =("computer Win");
else if (computChoice =="scissors" && UserChoice=="paper")
  result =("computer Win");
else if (computChoice =="scissors" && UserChoice=="rock")
result =("user Win");
else if (computChoice =="rock" && UserChoice=="paper")
result =("user Win");
else if (computChoice =="paper" && UserChoice=="scissors")
  result =("user Win");

console.log( 'you chose ' + UserChoice + ' and computer chose ' + computChoice + ' ( ' + result + ' ) ') ;}

//here is where i called it with examples 
PlayGame(computChoice,"rock");
you chose rock and computer chose rock ( It's a tie! ) 

PlayGame(computChoice,"paper");
you chose paper and computer chose rock ( user Win ) 