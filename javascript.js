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
  if (humanScore < 5 && computerScore < 5){
  let humanSelection = getHumanChoice(choice.target.id);
  let computerSelection = getComputerChoice();
  
  const result = document.querySelector(".result");

  const gameRound = document.createElement("div");
  const playerChoice = document.createElement("p");
  const computerChoice = document.createElement("p");
  const gameResult = document.createElement("p");
  const finalResult = document.createElement("p");

  playerChoice.innerText = `You Chose : ${humanSelection}`;
  computerChoice.innerText = `Computer Chose : ${computerSelection}`;
  gameResult.innerText = `${playRound(humanSelection, computerSelection)}`;
  finalResult.innerText = `Your Wins : ${humanScore} , Computer Wins : ${computerScore}`;

  result.appendChild(gameRound); 
  gameRound.appendChild(playerChoice);
  gameRound.appendChild(computerChoice);
  gameRound.appendChild(gameResult);
  gameRound.appendChild(finalResult);
  
  }
  else {
    alert("GAME OVER!")
  }

};



// const paper = document.querySelector("#paper").addEventListener("click", playGame);
// const rock = document.querySelector("#rock").addEventListener("click", playGame);
// const scissor = document.querySelector("#scissor").addEventListener("click", playGame);

const button = document.querySelectorAll("button").forEach(selection => {
  selection.addEventListener("click", playGame);
});

// document.querySelector("div").addEventListener("click", selection => {
//   if (selection.target.id === "paper" || selection.target.id === "rock" || selection.target.id === "scissor"){
//     playGame(selection);
//   };
// });




  

 
