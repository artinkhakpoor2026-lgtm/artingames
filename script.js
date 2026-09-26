// -----------------------------
// ARTIN GAME ARCHIVE
// -----------------------------

const games = [

    "Call of Duty Modern Warfare 2 SP",

    "Resident Evil 4 Remake",

    "Hitman 3",

    "Metro Exodus - Gold Edition",

    "God of War"

];


// گرفتن عناصر صفحه

const home = document.getElementById("home");

const gamesScreen = document.getElementById("games");

const artinButton =
    document.getElementById("artinButton");

const backButton =
    document.getElementById("backButton");

const gamesGrid =
    document.getElementById("gamesGrid");

const gameCount =
    document.getElementById("gameCount");


// -----------------------------
// ساخت کارت‌های بازی
// -----------------------------

games.forEach((game, index) => {

    const card = document.createElement("article");

    card.className = "game-card";

    card.style.animationDelay =
        `${index * 100}ms`;


    card.innerHTML = `

        <div class="number">

            GAME //
            ${String(index + 1).padStart(2, "0")}

        </div>


        <div class="game-title">

            ${game}

        </div>


        <div class="completed">

            COMPLETED

        </div>

    `;


    gamesGrid.appendChild(card);

});


// -----------------------------
// تعداد بازی‌ها
// -----------------------------

gameCount.textContent =

    `${String(games.length).padStart(2, "0")} GAMES`;


// -----------------------------
// رفتن به صفحه بازی‌ها
// -----------------------------

function showGames() {

    home.classList.remove("active");

    gamesScreen.classList.add("active");

}


// -----------------------------
// برگشت به صفحه اصلی
// -----------------------------

function showHome() {

    gamesScreen.classList.remove("active");

    home.classList.add("active");

}


// -----------------------------
// کلیک روی ARTIN
// -----------------------------

artinButton.addEventListener(

    "click",

    showGames

);


// -----------------------------
// دکمه BACK
// -----------------------------

backButton.addEventListener(

    "click",

    showHome

);


// -----------------------------
// کنترل با کیبورد
// -----------------------------

document.addEventListener(

    "keydown",

    function(event) {


        // Enter یا Space

        if (

            (event.key === "Enter" ||
             event.key === " ") &&

            home.classList.contains("active")

        ) {

            event.preventDefault();

            showGames();

        }


        // Escape

        if (

            event.key === "Escape" &&

            gamesScreen.classList.contains("active")

        ) {

            showHome();

        }

    }

);