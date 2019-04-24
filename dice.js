const diceRoller = function(roll){
    let sum = null;
    let tries = [];
    for(i=1;i<=roll;i++){
        let rand = Math.floor(Math.random()*6)+1;
        sum = sum + rand;
        tries[i-1]=rand;
    }
    const last =tries.pop();
    const all = tries.join(", ");
    return 'Dice rolled are '+all+' and '+last+'. ' +'sum is '+sum+'.'  ;
}