
//Sum fanction
const add = function(number1,number2){
    return number1 + number2;
}

const rollDice = function(){

//Set the random numbers

const num1 = Math.floor(Math.random() * 7);
const num2 = Math.floor(Math.random() * 7);

//Store the sum function
    const sum = add(num1,num2);


    return "Dice rolled are " +  num1 + " and " + num2 + " sum is " + sum;
}

rollDice();


