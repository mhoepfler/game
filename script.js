function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber < 0.33) return "stein";
        if (randomNumber < 0.66) return "sapier";
        return "schere";
    }

    function getHumanChoice() {
        const input = prompt("Gib Schere, Stein oder Papier ein:");
        return input ? input.toLowerCase() : "";
    }
  
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Es ist ein Unentschieden! Beide wählten ${humanChoice}.`);
            return;
        }

        const winConditions = {
            rock: "schere",
            paper: "stein",
            scissors: "papier"
        };

        if (winConditions[humanChoice] === computerChoice) {
            humanScore++;
            console.log(`Du hab gebonnen! ${humanChoice} besiegt ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`Du hast verloren! ${computerChoice} besiegt ${humanChoice}.`);
        }
    }


    for (let i = 1; i <= 5; i++) {
        console.log(`--- Runde ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: Player ${humanScore} - Computer ${computerScore}`);
    }

    
    console.log("--- Finales Ergebnis ---");
    if (humanScore > computerScore) {
        console.log("Herzlichen Glückwunsch! Du hast das Spiel gewonnen.");
    } else if (computerScore > humanScore) {
        console.log("Game over! Der Computer hat gewonnen.");
    } else {
        console.log("Das Spiel endet mit einem Unentschieden.");
    }
}
playGame();
