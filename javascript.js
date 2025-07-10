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

