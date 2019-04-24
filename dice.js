const  rollDice=functon (){
  
    var dice1 = Math.floor( Math.random() * 6 ) + 1;
        var dice2 = Math.floor( Math.random() * 6 ) + 1;
       var diceTotal = dice1+ ice2;
       console.log("your dice 1 is: "+dice1 +" your dice 2 is: " +dice2 " total of them "+
       diceTotal )

}

rollDice()

///////////////////////////\

const  rollDice=function (x){
    
 for (i=0;i<x;i++){   
  var dice1 = Math.floor( Math.random() * 6 ) + 1;
         var dice2 = Math.floor( Math.random() * 6 ) + 1;
        var diceTotal = dice1+ dice2;
        console.log("your dice 1 is "+dice1 +"your dice 2 is " +dice2 +"total of them "+ diceTotal );
 }
 }
 