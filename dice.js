
for(let num=1;num<=100;num++)
{
if ( num % 3 === 0 && num % 5 ===0 ) {
    console.log ('fizzbuzz');
} else if ( num % 3 === 0 ) {
    console.log ('fizz');
} else if ( num % 5 === 0 ) {
    console.log ('buzz');
}
else{ console.log (+num);}
};
//---------------------------------------------

for(let num=0;num<=20;num++)
{
if ( num % 2 === 0  ) {
    console.log ('even');
}
else{console.log ('odd');}
}
//---------------------------------------------
let a=0;

for(let num=0;num<=10;num++)
{
    a=num*9;
    console.log (+num+'* 9 ='+a);
};

//---------------------------------------------

let a=0;
for(let number=1;number<=10;number++){
    console.log ("multiply of number "+number);
    for(let num=1;num<=10;num++)
    {
        a=num*number;
        console.log (+num+'* '+number+' ='+a);
    };
    console.log (" ");

};
//---------------------------------------------
const assignGrade = function(grade){
    if ( grade >= 90) { return 'A';}
    else if(grade >= 80) { return 'B';}
    else if(grade >= 70) { return 'C';}
    else if(grade >= 60) { return 'D';}
    else  { return 'F';}
    };
//--------------------------------------------

const assignGrade = function(grade){
    if(grade<=100&&grade>=0)
    {
    if ( grade >= 90) { return 'A';}
    else if(grade >= 80) { return 'B';}
    else if(grade >= 70) { return 'C';}
    else if(grade >= 60) { return 'D';}
    else  { return 'F';}
    }
    else{return'the grade only between 0 to100'}

    };
    for(let n=60;n<=100;n++)
    {console.log (assignGrade(n));}
//--------------------------------------------
const alphabit = ["a","B","C","D","E",""];

const number = [1,2,3,4];

console.log (alphabit[3]);
console.log (number[3]);

alphabit[5]="F";
console.log (alphabit[5]);
alphabit.indexof("C");
//--------------------------------------------

