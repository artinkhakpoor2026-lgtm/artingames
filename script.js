const artinButton = document.getElementById("artinButton");
const backButton = document.getElementById("backButton");

const home = document.getElementById("home");
const games = document.getElementById("games");


artinButton.onclick = function () {

    home.style.display = "none";
    games.style.display = "block";

};


backButton.onclick = function () {

    games.style.display = "none";
    home.style.display = "flex";

};
