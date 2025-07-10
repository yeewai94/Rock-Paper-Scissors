function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);
    if (random <= 33){
        let output = "Rock";
        return output;
    }
    else if (random >= 66){
        let output = "Paper";
        return output;
    }
    else {
        let output = "Scissors";
        return output;
    }
}
let userInput = prompt("Let's Play Rock Paper Scissors! What will you choose?");
function getHumanChoice (input){
    let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return result;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) return "It's a tie!";
      if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Machine wins!";
      }
}

const humanSelection = getHumanChoice(userInput);
const computerSelection = getComputerChoice();

console.log("You Chose : " + humanSelection);
console.log("Computer Chose : " + computerSelection)
console.log(playRound(humanSelection, computerSelection))

