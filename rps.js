const choice = function (choice1,choice2){

if(choice1 === "paper" && choice2 === "rock") {
        return ("paper wins");
    } 
    else if (choice1 === "paper" && choice2 === "scissors") {
        return ("scissors wins");
    }
    else if(choice1 === "scissors" && choice2 === "rock") {
        return ("rock wins");
    } 
    else if (choice1 === "scissors" && choice2 === "paper") {
        return ("scissors wins");
    } 
}
choice()



const play = function (){
    let a =  Math.floor(Math.random() * 6)+1 
    let b =  Math.floor(Math.random() * 6)+1 
 return a+b;
 }
 
 play ();
 