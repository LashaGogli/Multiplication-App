let insidediv = document.querySelector(".insidediv");
let somediv = document.querySelector(".somediv");
let scorediv = document.querySelector(".scorediv");
let buttondiv = document.querySelector(".buttondiv");
let inputDiv = document.querySelector(".inputDiv");


let x = Math.floor(Math.random() * 21);
let y = Math.floor(Math.random() * 21);
let score = parseInt(localStorage.getItem("score")) || 0;



somediv.innerHTML = "What is " + x + " multiply by " + y + " ";
scorediv.innerHTML = "score: " + score;


buttondiv.addEventListener("click", function () {
    if (inputDiv.value == x * y) {
        score++;

    } else {
        score--;
    }
    scorediv.innerHTML = "score: " + score;
    localStorage.setItem("score", score.toString());
    location.reload();



})
let endgame = document.createElement("p");
endgame.classList.add("endgame");
let newGame = document.createElement("button");
newGame.classList.add("newGame");


if (score == 10) {
    insidediv.innerHTML = "";
    insidediv.appendChild(endgame);
    endgame.innerHTML = "You Won!";
    insidediv.appendChild(newGame);
    newGame.innerHTML = "New Game";
} else if (score == -3) {
    insidediv.innerHTML = "";
    insidediv.appendChild(endgame);
    endgame.innerHTML = "Game Over!";
    insidediv.appendChild(newGame);
    newGame.innerHTML = "New Game";

}


newGame.addEventListener("click", function () {
    score = 0;
    insidediv.innerHTML = "";
    let scorediv2 = document.createElement("div");
    scorediv2.classList.add("scorediv");
    insidediv.appendChild(scorediv2);
    scorediv2.innerHTML = "score: " + score;
    let somediv2 = document.createElement("div");
    somediv2.classList.add("somediv");
    insidediv.appendChild(somediv2);
    somediv2.innerHTML = "What is " + x + " multiply by " + y + " ";
    let inputDiv2 = document.createElement("input");
    inputDiv2.classList.add("inputDiv");
    insidediv.appendChild(inputDiv2);
    inputDiv2.placeholder = "Enter your answer";
    let buttondiv2 = document.createElement("button");
    buttondiv2.classList.add("buttondiv");
    insidediv.appendChild(buttondiv2);
    buttondiv2.innerHTML = "Submit";


    buttondiv2.addEventListener("click", function () {
        if (inputDiv.value == x * y) {
            score++;
    
        } else {
            score--;
        }
        scorediv2.innerHTML = "score: " + score;
        localStorage.setItem("score", score.toString());
        location.reload();
    
    
    
    })
    if (score == 10) {
        insidediv.innerHTML = "";
        insidediv.appendChild(endgame);
        endgame.innerHTML = "You Won!";
        insidediv.appendChild(newGame);
        newGame.innerHTML = "New Game";
    } else if (score == -3) {
        insidediv.innerHTML = "";
        insidediv.appendChild(endgame);
        endgame.innerHTML = "Game Over!";
        insidediv.appendChild(newGame);
        newGame.innerHTML = "New Game";
    
    }




})