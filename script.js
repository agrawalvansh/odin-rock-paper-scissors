// 0 = Rock, 1 = Paper, 2 = Scissor

// Function to get the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Function to get the human's choice
function getHumanChoice() {
    let choice;
    do {
        choice = parseInt(prompt("Please enter your choice: 0 for Rock, 1 for Paper, 2 for Scissor"));
    } while (isNaN(choice) || choice < 0 || choice > 2); // Ensure valid input
    return choice;
}

// Play a single round and return the result
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === 0 && computerChoice === 2) || // Rock beats Scissor
        (humanChoice === 1 && computerChoice === 0) || // Paper beats Rock
        (humanChoice === 2 && computerChoice === 1)    // Scissor beats Paper
    ) {
        console.log("You Won this round!");
        return "human";
    } else {
        console.log("Computer Won this round!");
        return "computer";
    }
}

// Play the entire game
function playGame() {
    let countHuman = 0;
    let countComputer = 0;
    const rounds = 5;

    for (let count = 1; count <= rounds; count++) {
        console.log(`\nRound ${count}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`You chose: ${humanChoice === 0 ? "Rock" : humanChoice === 1 ? "Paper" : "Scissor"}`);
        console.log(`Computer chose: ${computerChoice === 0 ? "Rock" : computerChoice === 1 ? "Paper" : "Scissor"}`);

        const result = playRound(humanChoice, computerChoice);
        if (result === "human") {
            countHuman++;
        } else if (result === "computer") {
            countComputer++;
        }
    }

    // Final result
    console.log("\nGame Over");
    if (countHuman > countComputer) {
        console.log("You Won the Series!");
    } else if (countComputer > countHuman) {
        console.log("You Lost the Series!");
    } else {
        console.log("The Series is a Tie!");
    }
}

// Start the game
playGame();