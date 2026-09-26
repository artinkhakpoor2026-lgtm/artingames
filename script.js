document.addEventListener("DOMContentLoaded", function () {

    const home = document.getElementById("home");
    const games = document.getElementById("games");

    const artinButton = document.getElementById("artinButton");
    const backButton = document.getElementById("backButton");


    // ARTIN button
    artinButton.addEventListener("click", function () {

        home.classList.remove("active");
        games.classList.add("active");

        window.scrollTo(0, 0);

    });


    // BACK button
    backButton.addEventListener("click", function () {

        games.classList.remove("active");
        home.classList.add("active");

        window.scrollTo(0, 0);

    });


});
