
const dice = function(){

    let d1 =  Math.floor(Math.random()*6)+1;
    let d2 = Math.floor(Math.random()*6)+1;
    let sum = d1 + d2;
    return "Dice rolled are " + d1 + " and " + d2 +" Sum is " + sum;
    }






Method 1

Name:search()
Description:method searches a string for a specified value 
and returns the position of the match
Example using it: 
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");


Method 2

Name: indexOf()
Description:method returns the index of (the position of) the first 
occurrence of a specified text in a string
Example using it:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");


Method 3

Name:lastIndexOf()
Description:method returns the index of the last occurrence 
of a specified text in a string
Example using it: 
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
