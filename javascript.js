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
        let output = "Scissor";
        return output;
    }
}

function getHumanChoice (userInput){
    let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    return result;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) return "It's a tie!";
      else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
      ) {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
}

function playGame(choice){
  let humanSelection = getHumanChoice(choice.currentTarget.id);
  let computerSelection = getComputerChoice();

  console.log("You Chose : " + humanSelection);
  console.log("Computer Chose : " + computerSelection);
  console.log(playRound(humanSelection, computerSelection));
};

const paper = document.querySelector("#paper").addEventListener("click", playGame);
const rock = document.querySelector("#rock").addEventListener("click", playGame);
const scissor = document.querySelector("#scissor").addEventListener("click", playGame);



  

 
