/* ==========================================
   ARTIN GAMES
   100 GAME LIBRARY
   LOAD 20 BY 20
========================================== */


/* ==========================================
   GAME DATABASE
========================================== */

const games = [

    { name: "Grand Theft Auto V", id: 271590, category: "action", type: "اکشن" },
    { name: "Red Dead Redemption 2", id: 1174180, category: "action", type: "اکشن" },
    { name: "The Witcher 3: Wild Hunt", id: 292030, category: "rpg", type: "RPG" },
    { name: "Cyberpunk 2077", id: 1091500, category: "rpg", type: "RPG" },
    { name: "Elden Ring", id: 1245620, category: "rpg", type: "RPG" },
    { name: "Hogwarts Legacy", id: 990080, category: "adventure", type: "ماجراجویی" },
    { name: "God of War", id: 1593500, category: "action", type: "اکشن" },
    { name: "God of War Ragnarök", id: 2322010, category: "action", type: "اکشن" },
    { name: "Marvel's Spider-Man Remastered", id: 1817070, category: "action", type: "اکشن" },
    { name: "Marvel's Spider-Man: Miles Morales", id: 1817190, category: "action", type: "اکشن" },
    { name: "Horizon Zero Dawn", id: 1151640, category: "adventure", type: "ماجراجویی" },
    { name: "Horizon Forbidden West", id: 2420110, category: "adventure", type: "ماجراجویی" },
    { name: "Days Gone", id: 1259420, category: "action", type: "اکشن" },
    { name: "Death Stranding", id: 1190460, category: "adventure", type: "ماجراجویی" },
    { name: "Death Stranding 2", id: 2651260, category: "adventure", type: "ماجراجویی" },
    { name: "Resident Evil 2", id: 883710, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 3", id: 952060, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 4", id: 2050650, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 7 Biohazard", id: 418370, category: "horror", type: "ترسناک" },
    { name: "Resident Evil Village", id: 1196590, category: "horror", type: "ترسناک" },

    { name: "Resident Evil 5", id: 21690, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 6", id: 221040, category: "action", type: "اکشن" },
    { name: "Silent Hill 2", id: 2124490, category: "horror", type: "ترسناک" },
    { name: "Dead Space", id: 1693980, category: "horror", type: "ترسناک" },
    { name: "Dead Space 2", id: 47780, category: "horror", type: "ترسناک" },
    { name: "Dead Space 3", id: 1238060, category: "horror", type: "ترسناک" },
    { name: "Alien: Isolation", id: 214490, category: "horror", type: "ترسناک" },
    { name: "Outlast", id: 238320, category: "horror", type: "ترسناک" },
    { name: "Outlast 2", id: 414700, category: "horror", type: "ترسناک" },
    { name: "The Evil Within", id: 268050, category: "horror", type: "ترسناک" },
    { name: "The Evil Within 2", id: 601430, category: "horror", type: "ترسناک" },

    { name: "Metro 2033 Redux", id: 286690, category: "shooter", type: "شوتر" },
    { name: "Metro: Last Light Redux", id: 287390, category: "shooter", type: "شوتر" },
    { name: "Metro Exodus", id: 412020, category: "shooter", type: "شوتر" },
    { name: "DOOM", id: 379720, category: "shooter", type: "شوتر" },
    { name: "DOOM Eternal", id: 782330, category: "shooter", type: "شوتر" },
    { name: "Titanfall 2", id: 1237970, category: "shooter", type: "شوتر" },
    { name: "Battlefield 1", id: 1238840, category: "shooter", type: "شوتر" },
    { name: "Battlefield V", id: 1238810, category: "shooter", type: "شوتر" },
    { name: "Battlefield 2042", id: 1517290, category: "shooter", type: "شوتر" },
    { name: "Counter-Strike 2", id: 730, category: "shooter", type: "شوتر" },

    { name: "PAYDAY 2", id: 218620, category: "shooter", type: "شوتر" },
    { name: "Left 4 Dead 2", id: 550, category: "shooter", type: "شوتر" },
    { name: "Half-Life 2", id: 220, category: "shooter", type: "شوتر" },
    { name: "Half-Life: Alyx", id: 546560, category: "shooter", type: "شوتر" },
    { name: "Portal 2", id: 620, category: "adventure", type: "ماجراجویی" },
    { name: "Dying Light", id: 239140, category: "action", type: "اکشن" },
    { name: "Dying Light 2 Stay Human", id: 534380, category: "action", type: "اکشن" },
    { name: "Far Cry 3", id: 220240, category: "shooter", type: "شوتر" },
    { name: "Far Cry 4", id: 298110, category: "shooter", type: "شوتر" },
    { name: "Far Cry 5", id: 939960, category: "shooter", type: "شوتر" },

    { name: "Far Cry 6", id: 2369390, category: "shooter", type: "شوتر" },
    { name: "Watch Dogs", id: 243470, category: "action", type: "اکشن" },
    { name: "Watch Dogs 2", id: 447040, category: "action", type: "اکشن" },
    { name: "Watch Dogs: Legion", id: 2231380, category: "action", type: "اکشن" },
    { name: "Assassin's Creed II", id: 33230, category: "action", type: "اکشن" },
    { name: "Assassin's Creed IV Black Flag", id: 242050, category: "adventure", type: "ماجراجویی" },
    { name: "Assassin's Creed Origins", id: 582160, category: "rpg", type: "RPG" },
    { name: "Assassin's Creed Odyssey", id: 812140, category: "rpg", type: "RPG" },
    { name: "Assassin's Creed Valhalla", id: 2208920, category: "rpg", type: "RPG" },
    { name: "Hitman", id: 236870, category: "action", type: "اکشن" },

    { name: "Hitman 2", id: 863550, category: "action", type: "اکشن" },
    { name: "Hitman 3", id: 1659040, category: "action", type: "اکشن" },
    { name: "Tomb Raider", id: 203160, category: "adventure", type: "ماجراجویی" },
    { name: "Rise of the Tomb Raider", id: 391220, category: "adventure", type: "ماجراجویی" },
    { name: "Shadow of the Tomb Raider", id: 750920, category: "adventure", type: "ماجراجویی" },
    { name: "Control Ultimate Edition", id: 870780, category: "action", type: "اکشن" },
    { name: "Alan Wake", id: 108710, category: "horror", type: "ترسناک" },
    { name: "Alan Wake 2", id: 3159330, category: "horror", type: "ترسناک" },
    { name: "The Last of Us Part I", id: 1888930, category: "adventure", type: "ماجراجویی" },
    { name: "The Last of Us Part II Remastered", id: 2531310, category: "adventure", type: "ماجراجویی" },

    { name: "Uncharted: Legacy of Thieves Collection", id: 1659420, category: "adventure", type: "ماجراجویی" },
    { name: "A Plague Tale: Innocence", id: 752590, category: "adventure", type: "ماجراجویی" },
    { name: "A Plague Tale: Requiem", id: 1182900, category: "adventure", type: "ماجراجویی" },
    { name: "Sekiro: Shadows Die Twice", id: 814380, category: "action", type: "اکشن" },
    { name: "Dark Souls Remastered", id: 570940, category: "rpg", type: "RPG" },
    { name: "Dark Souls III", id: 374320, category: "rpg", type: "RPG" },
    { name: "Baldur's Gate 3", id: 1086940, category: "rpg", type: "RPG" },
    { name: "The Elder Scrolls V: Skyrim", id: 489830, category: "rpg", type: "RPG" },
    { name: "Fallout 4", id: 377160, category: "rpg", type: "RPG" },
    { name: "Fallout: New Vegas", id: 22380, category: "rpg", type: "RPG" },

    { name: "Mass Effect Legendary Edition", id: 1328670, category: "rpg", type: "RPG" },
    { name: "Dragon Age: Inquisition", id: 1222690, category: "rpg", type: "RPG" },
    { name: "Kingdom Come: Deliverance", id: 379430, category: "rpg", type: "RPG" },
    { name: "Kingdom Come: Deliverance II", id: 1771300, category: "rpg", type: "RPG" },
    { name: "Forza Horizon 4", id: 1293830, category: "racing", type: "مسابقه‌ای" },
    { name: "Forza Horizon 5", id: 1551360, category: "racing", type: "مسابقه‌ای" },
    { name: "Need for Speed Heat", id: 1222680, category: "racing", type: "مسابقه‌ای" },
    { name: "Need for Speed Unbound", id: 1846380, category: "racing", type: "مسابقه‌ای" },
    { name: "Assetto Corsa", id: 244210, category: "racing", type: "مسابقه‌ای" },
    { name: "Euro Truck Simulator 2", id: 227300, category: "racing", type: "مسابقه‌ای" },

    { name: "American Truck Simulator", id: 270880, category: "racing", type: "مسابقه‌ای" },
    { name: "EA SPORTS FC 24", id: 2195250, category: "sports", type: "ورزشی" },
    { name: "TEKKEN 8", id: 1778820, category: "action", type: "اکشن" },
    { name: "Street Fighter 6", id: 1364780, category: "action", type: "اکشن" },
    { name: "Mortal Kombat 11", id: 976310, category: "action", type: "اکشن" },
    { name: "Mortal Kombat 1", id: 1971870, category: "action", type: "اکشن" },
    { name: "Batman: Arkham Knight", id: 208650, category: "action", type: "اکشن" },
    { name: "Batman: Arkham City", id: 200260, category: "action", type: "اکشن" },
    { name: "Middle-earth: Shadow of Mordor", id: 241930, category: "action", type: "اکشن" },
    { name: "Middle-earth: Shadow of War", id: 356190, category: "action", type: "اکشن" },

    { name: "Star Wars Jedi: Fallen Order", id: 1172380, category: "adventure", type: "ماجراجویی" },
    { name: "Star Wars Jedi: Survivor", id: 1774580, category: "adventure", type: "ماجراجویی" },
    { name: "It Takes Two", id: 1426210, category: "adventure", type: "ماجراجویی" },
    { name: "A Way Out", id: 1222700, category: "adventure", type: "ماجراجویی" },
    { name: "Stray", id: 1332010, category: "adventure", type: "ماجراجویی" },
    { name: "Subnautica", id: 264710, category: "adventure", type: "ماجراجویی" },
    { name: "No Man's Sky", id: 275850, category: "adventure", type: "ماجراجویی" },
    { name: "Terraria", id: 105600, category: "adventure", type: "ماجراجویی" },
    { name: "Valheim", id: 892970, category: "adventure", type: "ماجراجویی" },
    { name: "Palworld", id: 1623730, category: "rpg", type: "RPG" },

    { name: "Lies of P", id: 1627720, category: "rpg", type: "RPG" },
    { name: "Black Myth: Wukong", id: 2358720, category: "action", type: "اکشن" },
    { name: "Monster Hunter: World", id: 582010, category: "rpg", type: "RPG" },
    { name: "Monster Hunter Wilds", id: 2246340, category: "rpg", type: "RPG" }
];


/* ==========================================
   ELEMENTS
========================================== */

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");
const gameCount = document.getElementById("gameCount");
const loadingBox = document.getElementById("loadingBox");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter-button");


/* ==========================================
   SETTINGS
========================================== */

const GAMES_PER_LOAD = 20;

let currentFilter = "all";
let currentSearch = "";

let filteredGames = [];
let visibleGames = 0;


/* ==========================================
   IMAGE
========================================== */

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


/* ==========================================
   STEAM LINK
========================================== */

function getSteamLink(id) {

    return `https://store.steampowered.com/app/${id}/`;

}


/* ==========================================
   FILTER
========================================== */

function updateFilteredGames() {

    const searchText = currentSearch
        .trim()
        .toLowerCase();

    filteredGames = games.filter(game => {

        const categoryMatch =
            currentFilter === "all" ||
            game.category === currentFilter;

        const searchMatch =
            searchText === "" ||
            game.name.toLowerCase().includes(searchText);

        return categoryMatch && searchMatch;

    });

}


/* ==========================================
   CREATE CARD
========================================== */

function createGameCard(game, index) {

    const card = document.createElement("article");

    card.className = "library-card";

    card.style.animationDelay =
        `${Math.min(index * 0.02, 0.3)}s`;

    card.innerHTML = `

        <div class="card-image">

            <img
                src="${getGameImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
                decoding="async"
                onerror="this.style.display='none';"
            >

            <div class="card-overlay">

                <a
                    class="card-button"
                    href="${getSteamLink(game.id)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    مشاهده بازی
                </a>

            </div>

        </div>

        <div class="card-info">

            <h3 title="${game.name}">
                ${game.name}
            </h3>

            <p>
                ${game.type}
            </p>

        </div>

    `;

    return card;
}


/* ==========================================
   LOAD NEXT 20
========================================== */

function loadNextGames() {

    if (!gamesGrid) {
        return;
    }

    const start =
        visibleGames;

    const end =
        Math.min(
            visibleGames + GAMES_PER_LOAD,
            filteredGames.length
        );

    if (start >= end) {
        return;
    }

    const fragment =
        document.createDocumentFragment();

    for (let i = start; i < end; i++) {

        fragment.appendChild(
            createGameCard(
                filteredGames[i],
                i
            )
        );

    }

    gamesGrid.appendChild(fragment);

    visibleGames = end;

    updateLoadMoreButton();

}


/* ==========================================
   LOAD MORE BUTTON
========================================== */

let loadMoreButton = null;

function createLoadMoreButton() {

    if (loadMoreButton) {
        return;
    }

    loadMoreButton =
        document.createElement("button");

    loadMoreButton.type = "button";

    loadMoreButton.className =
        "load-more-button";

    loadMoreButton.textContent =
        "نمایش ۲۰ بازی دیگر";

    loadMoreButton.addEventListener(
        "click",
        loadNextGames
    );

    gamesGrid.parentElement.appendChild(
        loadMoreButton
    );

}


/* ==========================================
   UPDATE LOAD MORE
========================================== */

function updateLoadMoreButton() {

    if (!loadMoreButton) {
        return;
    }

    if (visibleGames >= filteredGames.length) {

        loadMoreButton.style.display =
            "none";

        return;
    }

    loadMoreButton.style.display =
        "block";

    const remaining =
        filteredGames.length - visibleGames;

    const amount =
        Math.min(
            GAMES_PER_LOAD,
            remaining
        );

    loadMoreButton.textContent =
        `نمایش ${amount} بازی دیگر`;
}


/* ==========================================
   RENDER
========================================== */

function renderGames() {

    updateFilteredGames();

    visibleGames = 0;

    gamesGrid.innerHTML = "";

    if (filteredGames.length === 0) {

        noResults.hidden = false;

        if (loadMoreButton) {
            loadMoreButton.style.display =
                "none";
        }

        return;
    }

    noResults.hidden = true;

    loadNextGames();

}


/* ==========================================
   SEARCH
========================================== */

if (gameSearch) {

    gameSearch.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value;

            renderGames();

        }
    );

}


/* ==========================================
   FILTER BUTTONS
========================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            currentFilter =
                this.dataset.filter;

            renderGames();

        }
    );

});


/* ==========================================
   START
========================================== */

function startGamesPage() {

    if (!gamesGrid) {
        return;
    }

    if (gameCount) {

        gameCount.textContent =
            games.length.toLocaleString("fa-IR");

    }

    if (loadingBox) {

        loadingBox.style.display =
            "none";

    }

    createLoadMoreButton();

    renderGames();

}


/* ==========================================
   START
========================================== */

startGamesPage();
