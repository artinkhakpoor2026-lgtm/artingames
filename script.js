const home = document.getElementById("home");
const games = document.getElementById("games");

const artinButton = document.getElementById("artinButton");
const artinButton2 = document.getElementById("artinButton2");
const backButton = document.getElementById("backButton");


// OPEN GAMES

function openGames() {

    home.classList.remove("active");

    games.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ARTIN BUTTON

artinButton.addEventListener("click", openGames);


// SECOND GAMES BUTTON

artinButton2.addEventListener("click", openGames);


// BACK BUTTON

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

        alert("صفحه اختصاصی این بازی به‌زودی اضافه می‌شود!");

    });

});
