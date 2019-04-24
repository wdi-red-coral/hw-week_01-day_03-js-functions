[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Functions HW

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




























3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name:
Description:
Example using it:
```

Method 2
```
Name:
Description:
Example using it:
```

Method 3
```
Name:
Description:
Example using it:
```
