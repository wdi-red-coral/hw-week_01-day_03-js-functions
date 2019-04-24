const userChoose = prompt ("Do you choose rock , paper or scissors");
const computerChoose = Math.random();
if (computerChoose < 0.34) {
   computerChoose = "rock";
}
else if (computerChoose <= 0.67){
  computerChoose = "paper";
}
 else {
     computerChoose ="scissors";
 }
     console.log("computer: " + computerChoose);
     const compare = function (Choose1 , Choose2) {
         if (Choose1 === Choose2) {
             return "The result is a tie!";
         }
         else if (Choose1 === "rock") {
             if (Choose2 ==="scissors") {
                 return "rock wins";
             }
             else {
                 return "paper wins";
             }
         }
         else if (Choose2 === "paper") {
             if (Choose2 === "rock") {
                 return "paper wins";
             }
         }
         else {
             return "scissors win ";
         }
     }
compare (serChoose ,computerChoose  );

compare (serChoose ,computerChoose  );