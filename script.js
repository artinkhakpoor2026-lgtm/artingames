const home = document.getElementById("home");
const games = document.getElementById("games");

const artinButton = document.getElementById("artinButton");
const backButton = document.getElementById("backButton");


// OPEN GAMES PAGE

artinButton.addEventListener("click", function () {

    home.classList.remove("active");

    games.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// BACK TO HOME

backButton.addEventListener("click", function () {

    games.classList.remove("active");

    home.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// GAME BUTTONS

const gameButtons = document.querySelectorAll(".game-button");

gameButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("GAME PAGE COMING SOON!");

    });

});
