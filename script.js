let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const genCompChoice = () => {
    const items = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return items[num];
}

let drawGame = () => {
    console.log("The game was a draw");
    msg.innerText = "The game was a draw!";
    msg.style.backgroundColor = "blue";
}

let showWinner = (userWin) => {
    if (userWin) {
        console.log("You Won");
        userScore++;
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
        userScoreP.innerText = userScore;
    } else {
        console.log("Comp Won");
        compScore++;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        compScoreP.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    // Generate compChoice
    let compChoice = genCompChoice();
    console.log("Comp Choice = " + compChoice);

    if(userChoice == compChoice){
        drawGame();
   } else{
       let userWin = true;
       if(userChoice == "rock"){
           //S,P
           if(compChoice == "paper"){
               userWin = false;
           }else{
               userWin = true;
           }
       } else if (userChoice == "paper"){
           //R,S
           if(compChoice == "scissors"){
               userWin = false
           } else {
               userWin = true
           }
       } else{
           //R,P
           if(compChoice == "rock"){
               userWin = false
           }else {
               userWin = true
           }
       }
       showWinner(userWin); // Pass userWin as an argument
   }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("User Choice = " + userChoice);
        playGame(userChoice);
    });
});
