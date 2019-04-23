const rPSGame = function(choice){
    const cpuChoice = Math.floor(Math.random()*3);
    let choices = ['rock','paper','scissors'];
    if(typeof(choice)==="string"){
        if(choice==='rock'||choice==='paper'||choice==='scissors'){
            if((choice==='rock' && choices[cpuChoice]==='scissors')||(choice==='scissors' && choices[cpuChoice]==='paper')||(choice==='paper' && choices[cpuChoice]==='rock')){
                return 'win';
            }
            else if((choice==='rock' && choices[cpuChoice]==='rock')||(choice==='scissors' && choices[cpuChoice]==='scissors')||(choice==='paper' && choices[cpuChoice]==='paper')){
                return'draw';
            }
            else{
                return 'lose';
            }
        }
        else {
            return "you have to use rock, paper or scissors"
        }
    }
    else {
        return "you have to use rock, paper or scissors"
    }
}