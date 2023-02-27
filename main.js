let insidediv = document.querySelector(".insidediv");
let somediv = document.querySelector(".somediv");
let scorediv = document.querySelector(".scorediv");
let buttondiv = document.querySelector(".buttondiv");
let inputDiv = document.querySelector(".inputDiv");
let imennascore = document.querySelector(".imennascore");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let imgDivs = document.querySelector(".imgDivs");
let endgame = document.createElement("p");
endgame.classList.add("endgame");
let newGame = document.createElement("button");
newGame.classList.add("newGame");


let x = Math.floor(Math.random() * 21);
let y = Math.floor(Math.random() * 21);
let score = parseInt(localStorage.getItem("score")) || 0;
let countlive = parseInt(localStorage.getItem("countlive")) || 3;




if (countlive == 2) {
    img3.style.display = "none";
} else if (countlive == 1) {
    img3.style.display = "none";
    img2.style.display = "none";
}

somediv.innerHTML = "What is " + x + " multiply by " + y + " ";
imennascore.innerHTML = "score: " + score;


buttondiv.addEventListener("click", function () {
    if (inputDiv.value == x * y) {
        score++;


    } else {
        countlive--;
        localStorage.setItem("countlive", countlive.toString());



    }
    imennascore.innerHTML = "score: " + score;
    localStorage.setItem("score", score.toString());
    location.reload();



})
inputDiv.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (inputDiv.value == x * y) {
            score++;
    
    
        } else {
            countlive--;
            localStorage.setItem("countlive", countlive.toString());
    
    
    
        }
        imennascore.innerHTML = "score: " + score;
        localStorage.setItem("score", score.toString());
        location.reload();
    

    }
  });



if (score == 10) {
    insidediv.innerHTML = "";
    insidediv.appendChild(endgame);
    endgame.innerHTML = "You Won!";
    insidediv.appendChild(newGame);
    newGame.innerHTML = "New Game";
    localStorage.setItem("score", "0");
    localStorage.setItem("countlive", "3");




} else if (localStorage.getItem("countlive") == 0) {
    insidediv.innerHTML = "";
    insidediv.appendChild(endgame);
    endgame.innerHTML = "Game Over!";
    insidediv.appendChild(newGame);
    newGame.innerHTML = "New Game";
    localStorage.setItem("countlive", "3");
    localStorage.setItem("score", "0");




}


newGame.addEventListener("click", function () {

    score = parseInt(localStorage.getItem("score"));
    countlive = parseInt(localStorage.getItem("countlive"));

    insidediv.innerHTML = "";
    insidediv.appendChild(scorediv);
    insidediv.appendChild(somediv);
    insidediv.appendChild(inputDiv);
    insidediv.appendChild(buttondiv);
    somediv.innerHTML = "What is " + x + " multiply by " + y + " ";
    imennascore.innerHTML = "score: " + score;
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";




})


