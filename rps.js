//var compHandVal = Math.floor(Math.random()*3)*1;
const playGame = function (userHandVal) 
{
    let result='happy';
    let userHand=userHandVal;
    let comHand=computerHandtoString();
    if(comHand==userHand) 
    {
        result="Players Tied.";
        outPutMessage(userHand,comHand,result);
    }
    else{
            switch (userHand){   
                case 'Paper' : 
                {
                    if(comHand=='Rock') {

                        result="User Won.";
                        outPutMessage(userHand,comHand,result);

                    }
                    else if(comHand=='Scissors') {

                        result="User Lost.";
                        outPutMessage(userHand,comHand,result);
                    }
                    break;
                }
                case 'Rock'  : 
                {
                    if(comHand=='Scissors') {

                        result="User Lost.";
                        outPutMessage(userHand,comHand,result);
                    } 
                    else if(comHand='Paper') {

                        result="User Won.";
                        outPutMessage(userHand,comHand,result);
                    }
                    break;
                }
               case 'Scissors' : 
                {
                    if(comHand=='Paper') {

                        result="User Won.";
                        outPutMessage(userHand,comHand,result);
                        
                    }
                    else if(comHand=='Rock') {

                        result="User Lost.";
                        outPutMessage(userHand,comHand,result);
                        
                    } 
                    break;
                }
            default : result = "None";
    
        }
  
    } 
}

const computerHandtoString = function ()
{
    let computerHandInt = Math.floor(Math.random() * 3) + 1;
    if(computerHandInt==1) return 'Rock';
    else if(computerHandInt==2) return 'Paper';
    else return 'Scissors';
}

const outPutMessage = function (userHand,computerHand,result)
{
    console.log("Computer picked: "+computerHand+". User picked: "+userHand+". "+result);
}

/*
Sample Output:
//playGame('Rock');
// Computer picked: Rock. User picked: Rock. Players Tied.
//playGame('Paper')
//Computer picked: Rock. User picked: Paper. User Won.
//playGame('Scissors')
// Computer picked: Scissors. User picked: Scissors. Players Tied.
//playGame('Scissors')
//Computer picked: Scissors. User picked: Scissors. Players Tied.
 */