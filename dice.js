const dice = function(roll){
    let sum = null;
    let tries = [];
    for(i=1;i<=roll;i++){
        let rand = Math.floor(Math.random()*6)+1;
        sum = sum + rand;
         tries[i-1]=rand;
    }
    return tries+ ' ' + sum ;

}
