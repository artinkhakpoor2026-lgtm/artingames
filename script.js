const artinButton = document.getElementById("artinButton");
const home = document.getElementById("home");
const games = document.getElementById("games");

artinButton.onclick = function () {
    home.style.display = "none";
    games.style.display = "block";
};
