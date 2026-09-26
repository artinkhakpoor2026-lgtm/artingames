```javascript
const home = document.getElementById("home");
const games = document.getElementById("games");

const artinButton = document.getElementById("artinButton");
const backButton = document.getElementById("backButton");


// Open games
artinButton.addEventListener("click", function () {

    home.classList.remove("active");

    games.classList.add("active");

    window.scrollTo(0, 0);

});


// Go back home
backButton.addEventListener("click", function () {

    games.classList.remove("active");

    home.classList.add("active");

    window.scrollTo(0, 0);

});


// Game buttons
const gameButtons = document.querySelectorAll(".game-button");

gameButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("GAME PAGE COMING SOON!");

    });

});
```
