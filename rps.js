const playGame = function(userSelect) {

let computerSelect = Math.floor(Math.random() *3 )+1;

if (computerSelect ===1) {
    computerSelect = 'paper';
}else if (computerSelect === 2) {
    computerSelect = 'rock';
}else {
    computerSelect = 'scissors'
}

console.log(computerSelect);

if (computerSelect === userSelect ) {
    return 'it is a tie';
}else if (computerSelect === 'paper' && userSelect === 'rock') {
    return 'you lose :(';

}else if (computerSelect === 'scissors' && userSelect === 'rock') {
return 'you win :)';
    
}else {
    return 'you lose';
} 

}
playGame ('paper');

