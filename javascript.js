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

function getHumanChoice (userInput){
    let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    return result;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) return "It's a tie!";
      else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
}

// const div = document.querySelector("div").addEventListener("click", playRound(getComputerChoice(),getComputerChoice()));

const paper = document.querySelector("#paper");
paper.addEventListener("click", function (event){
  let humanSelection = getHumanChoice(event.currentTarget.id);
  let computerSelection = getComputerChoice();

  console.log("You Chose : " + humanSelection);
  console.log("Computer Chose : " + computerSelection);
  console.log(playRound(humanSelection, computerSelection));
})





// function playGame(){
//     if (humanScore < 5 && computerScore < 5){
//       const humanSelection = getHumanChoice();
//       const computerSelection = getComputerChoice();

//       playRound(humanSelection, computerSelection);

//       console.log("You Chose : " + humanSelection);
//       console.log("Computer Chose : " + computerSelection);
//       console.log(playRound());
//       console.log("You win:" + humanScore + ", Computer win: " + computerScore);
//       playGame();
//     }
//     else if (humanScore >= 5){
//       console.log("Congratulation, you WIN!");
//     }
//     else {
//       console.log("Oh no, you LOSE!");
//     }
// } 

// playGame();
  

 
