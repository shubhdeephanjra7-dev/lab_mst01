
let start = document.querySelectorAll(".answers button");
let yes = start[0];
let no = start[1];

let ready = document.querySelector(".ready-section");
let choiceSection = document.querySelector(".choices");
let message = document.querySelector("#no");
let game = document.querySelector("#game");
let play = document.querySelector(".play");
let choiceButtons = document.querySelectorAll(".choice");

let choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

choiceSection.style.display = "none";
message.style.display = "none";
game.style.display = "none";
play.style.display = "none";

yes.addEventListener("click", () => {
    ready.style.display = "none";
    message.style.display = "none";
    game.style.display = "block";
    choiceSection.style.display = "block";
    yes.style.display = "none";
    no.style.display = "none";
    play.style.display = "block";
});

no.addEventListener("click", () => {
    ready.style.display = "none";
    choiceSection.style.display = "none";
    game.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    play.style.display = "none";
    message.style.display = "block";
});

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.textContent;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = document.querySelector("#result");

        if (humanChoice === computerChoice) {
            result.textContent = "Draw! Computer chose " + computerChoice;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            result.textContent = "You win! Computer chose " + computerChoice;
        } else {
            computerScore++;
            result.textContent = "Computer wins! It chose " + computerChoice;
        }

        document.querySelector("#human-score").textContent = humanScore;
        document.querySelector("#computer-score").textContent = computerScore;
    });
});
