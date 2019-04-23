/* 
Dice Roller with no argument 
*/
const rollDice = function(){
let num1 = Math.floor(Math.random()* 6)+1;
let num2 = Math.floor(Math.random()* 6)+1;
let sum = num1+num2;
return ("Dice rolled are "+num1 +" and "+ num2 +" .The sum is "+ sum);
}//end function 


/*
Dice Roller with argument
*/
const rollDice = function(rollNum){
    let dice =" "; // to save all the possible situation 
    let sum =0;
    //if the number entered are less than 2 
    if(rollNum <=1){
        console.log("Please enter a number greater than 1");
    }else{
        for(let i = 0 ; i < rollNum ; i++) {
            let repeatTime = Math.floor(Math.random()* 6);
            //add every number that saved in repeatTime varible to get the Dice rolled numbers   
            dice += repeatTime + " ";
            //add every number to sum varible to get the sum result 
            sum += repeatTime;
        }//end for loop   
    }
    return  ("Dice rolled are " + dice + "sum "+sum ); 
}//end rollDice function 
    