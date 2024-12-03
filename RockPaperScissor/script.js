// Rock, Paper, Scissors game in the console

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to start the game
function startGame() {
    const playerChoice = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
    
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        console.log("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        return;
    }

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = playRound(playerChoice, computerChoice);
    console.log(result);
}

// Start the game when the page is loaded
startGame();
