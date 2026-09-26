const home = document.getElementById("home");
const games = document.getElementById("games");

const artinButton = document.getElementById("artinButton");
const backButton = document.getElementById("backButton");

artinButton.onclick = function () {
    home.classList.remove("active");
    games.classList.add("active");
};

backButton.onclick = function () {
    games.classList.remove("active");
    home.classList.add("active");
};
