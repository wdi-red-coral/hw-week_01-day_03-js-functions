const playGame= function(name){
    let random = Math.floor((Math.random() * 3) + 1);
    let r;
    let result;
    if (random === 1) {
        r= 'Rock';
       
 } else if(random === 2){
         r='paper';
     
 } else if(random === 3){
         r='Scissors';
     
}
if (name === "Rock"  && r==="Rock" ) {
   result = 'tie'
} else if (name ==="Rock" && r==="paper" ) {
   result='loser'
}else if (name === "Rock"  && r=== "Scissors" ) {
 result = 'winner'
} 

if (name === 'Scissors'  && r==="Scissors" ) {
 result = 'tie'
} else if (name ==="Scissors" && r==="Rock" ) {
 result = 'loser'
}else if (name === "Scissors"  && r=== "paper" ) {
result = 'winner'
}

if (name === 'paper'  && r==="Scissors" ) {
 result='loser'
} else if (name ==="paper" && r==="Rock" ) {
 result = 'winner'
}else if (name === "paper"  && r=== "paper" ) {
result = 'tie'
}
alert("Computer picked:"+ " " +r +" User picked:" +" "+ name +" "+result);
}

   
playGame("Rock");