// ======================================================
// ARTIN GAMES - Games Library
// 200 Unique Games
// ======================================================

const games = [

    // ==================== ACTION ====================

    { name: "Grand Theft Auto V", id: 271590, category: "action" },
    { name: "Grand Theft Auto IV", id: 12210, category: "action" },
    { name: "Grand Theft Auto: San Andreas", id: 12120, category: "action" },
    { name: "Grand Theft Auto: Vice City", id: 12110, category: "action" },
    { name: "Grand Theft Auto III", id: 12100, category: "action" },
    { name: "Red Dead Redemption 2", id: 1174180, category: "action" },
    { name: "Sleeping Dogs: Definitive Edition", id: 307690, category: "action" },
    { name: "Watch Dogs", id: 243470, category: "action" },
    { name: "Watch Dogs 2", id: 447040, category: "action" },
    { name: "Watch Dogs: Legion", id: 2231380, category: "action" },
    { name: "Just Cause 3", id: 225540, category: "action" },
    { name: "Just Cause 4", id: 517630, category: "action" },
    { name: "Mad Max", id: 234140, category: "action" },
    { name: "Batman: Arkham Knight", id: 208650, category: "action" },
    { name: "Batman: Arkham City", id: 200260, category: "action" },
    { name: "Batman: Arkham Asylum", id: 35140, category: "action" },
    { name: "Middle-earth: Shadow of Mordor", id: 241930, category: "action" },
    { name: "Middle-earth: Shadow of War", id: 356190, category: "action" },
    { name: "Assassin's Creed II", id: 33230, category: "action" },
    { name: "Assassin's Creed Brotherhood", id: 48190, category: "action" },
    { name: "Assassin's Creed Revelations", id: 201870, category: "action" },
    { name: "Assassin's Creed III", id: 208480, category: "action" },
    { name: "Assassin's Creed IV Black Flag", id: 242050, category: "action" },
    { name: "Assassin's Creed Unity", id: 289650, category: "action" },
    { name: "Assassin's Creed Origins", id: 582160, category: "action" },
    { name: "Assassin's Creed Odyssey", id: 812140, category: "action" },
    { name: "Assassin's Creed Valhalla", id: 2208920, category: "action" },
    { name: "Far Cry 3", id: 220240, category: "action" },
    { name: "Far Cry 4", id: 298110, category: "action" },
    { name: "Far Cry 5", id: 552520, category: "action" },
    { name: "Far Cry 6", id: 2369390, category: "action" },
    { name: "Dying Light", id: 239140, category: "action" },
    { name: "Dying Light 2 Stay Human", id: 534380, category: "action" },
    { name: "Days Gone", id: 1259420, category: "action" },
    { name: "Horizon Zero Dawn", id: 1151640, category: "action" },
    { name: "Horizon Forbidden West", id: 2420110, category: "action" },
    { name: "God of War", id: 1593500, category: "action" },
    { name: "God of War Ragnarök", id: 2322010, category: "action" },
    { name: "Marvel's Spider-Man Remastered", id: 1817070, category: "action" },
    { name: "Marvel's Spider-Man: Miles Morales", id: 1817190, category: "action" },
    { name: "Black Myth: Wukong", id: 2358720, category: "action" },
    { name: "Palworld", id: 1623730, category: "action" },
    { name: "Terraria", id: 105600, category: "action" },
    { name: "Stardew Valley", id: 413150, category: "action" },
    { name: "Valheim", id: 892970, category: "action" },


    // ==================== RPG ====================

    { name: "Cyberpunk 2077", id: 1091500, category: "rpg" },
    { name: "The Witcher 3: Wild Hunt", id: 292030, category: "rpg" },
    { name: "The Witcher 2: Assassins of Kings", id: 20920, category: "rpg" },
    { name: "The Elder Scrolls V: Skyrim", id: 489830, category: "rpg" },
    { name: "Fallout 4", id: 377160, category: "rpg" },
    { name: "Fallout: New Vegas", id: 22380, category: "rpg" },
    { name: "Elden Ring", id: 1245620, category: "rpg" },
    { name: "Baldur's Gate 3", id: 1086940, category: "rpg" },
    { name: "Dark Souls Remastered", id: 570940, category: "rpg" },
    { name: "Dark Souls III", id: 374320, category: "rpg" },
    { name: "Sekiro: Shadows Die Twice", id: 814380, category: "rpg" },
    { name: "Monster Hunter: World", id: 582010, category: "rpg" },
    { name: "Monster Hunter Rise", id: 1446780, category: "rpg" },
    { name: "Dragon's Dogma 2", id: 2054970, category: "rpg" },
    { name: "Starfield", id: 1716740, category: "rpg" },
    { name: "Mass Effect Legendary Edition", id: 1328670, category: "rpg" },
    { name: "Dragon Age: Inquisition", id: 1222690, category: "rpg" },
    { name: "Kingdom Come: Deliverance", id: 379430, category: "rpg" },
    { name: "Kingdom Come: Deliverance II", id: 1771300, category: "rpg" },
    { name: "Divinity: Original Sin 2", id: 435150, category: "rpg" },
    { name: "Persona 5 Royal", id: 1687950, category: "rpg" },
    { name: "Final Fantasy VII Remake Intergrade", id: 1462040, category: "rpg" },
    { name: "Final Fantasy XV Windows Edition", id: 637650, category: "rpg" },
    { name: "Tales of Arise", id: 740130, category: "rpg" },
    { name: "NieR:Automata", id: 524220, category: "rpg" },
    { name: "NieR Replicant ver.1.22474487139...", id: 1113560, category: "rpg" },
    { name: "Yakuza: Like a Dragon", id: 1235140, category: "rpg" },
    { name: "Like a Dragon: Infinite Wealth", id: 2072450, category: "rpg" },
    { name: "Path of Exile", id: 238960, category: "rpg" },
    { name: "Path of Exile 2", id: 2694490, category: "rpg" },


    // ==================== SHOOTER ====================

    { name: "Counter-Strike 2", id: 730, category: "shooter" },
    { name: "Counter-Strike: Source", id: 240, category: "shooter" },
    { name: "Counter-Strike 1.6", id: 10, category: "shooter" },
    { name: "Call of Duty 4: Modern Warfare", id: 7940, category: "shooter" },
    { name: "Call of Duty: Modern Warfare 2", id: 10180, category: "shooter" },
    { name: "Call of Duty: Black Ops", id: 42700, category: "shooter" },
    { name: "Call of Duty: Black Ops II", id: 202970, category: "shooter" },
    { name: "Call of Duty: Ghosts", id: 209160, category: "shooter" },
    { name: "Call of Duty: Advanced Warfare", id: 209650, category: "shooter" },
    { name: "Call of Duty: WWII", id: 476600, category: "shooter" },
    { name: "Call of Duty: Black Ops III", id: 311210, category: "shooter" },
    { name: "Call of Duty: Modern Warfare Remastered", id: 393080, category: "shooter" },
    { name: "Call of Duty: Modern Warfare", id: 2000950, category: "shooter" },
    { name: "DOOM", id: 379720, category: "shooter" },
    { name: "DOOM Eternal", id: 782330, category: "shooter" },
    { name: "Wolfenstein: The New Order", id: 201810, category: "shooter" },
    { name: "Wolfenstein II: The New Colossus", id: 612880, category: "shooter" },
    { name: "Titanfall 2", id: 1237970, category: "shooter" },
    { name: "Battlefield 1", id: 1238840, category: "shooter" },
    { name: "Battlefield V", id: 1238810, category: "shooter" },
    { name: "Battlefield 2042", id: 1517290, category: "shooter" },
    { name: "Battlefield 4", id: 1238860, category: "shooter" },
    { name: "Battlefield Hardline", id: 1238880, category: "shooter" },
    { name: "Metro 2033 Redux", id: 286690, category: "shooter" },
    { name: "Metro: Last Light Redux", id: 287390, category: "shooter" },
    { name: "Metro Exodus", id: 412020, category: "shooter" },
    { name: "Metro Exodus Enhanced Edition", id: 1449560, category: "shooter" },
    { name: "Destiny 2", id: 1085660, category: "shooter" },
    { name: "Warframe", id: 230410, category: "shooter" },
    { name: "Apex Legends", id: 1172470, category: "shooter" },
    { name: "PAYDAY 2", id: 218620, category: "shooter" },
    { name: "Left 4 Dead 2", id: 550, category: "shooter" },
    { name: "Half-Life 2", id: 220, category: "shooter" },
    { name: "Half-Life 2: Episode One", id: 380, category: "shooter" },
    { name: "Half-Life 2: Episode Two", id: 420, category: "shooter" },
    { name: "Portal 2", id: 620, category: "shooter" },
    { name: "Borderlands 2", id: 49520, category: "shooter" },
    { name: "Borderlands 3", id: 397540, category: "shooter" },
    { name: "Far Cry 2", id: 19900, category: "shooter" },
    { name: "Crysis", id: 17300, category: "shooter" },
    { name: "Crysis 2", id: 108800, category: "shooter" },
    { name: "Crysis 3 Remastered", id: 2096610, category: "shooter" },
    { name: "DOOM 3", id: 9050, category: "shooter" },
    { name: "RAGE", id: 9200, category: "shooter" },
    { name: "Quake", id: 2310, category: "shooter" },


    // ==================== HORROR ====================

    { name: "Resident Evil 2", id: 883710, category: "horror" },
    { name: "Resident Evil 3", id: 952060, category: "horror" },
    { name: "Resident Evil 4", id: 2050650, category: "horror" },
    { name: "Resident Evil 7 Biohazard", id: 418370, category: "horror" },
    { name: "Resident Evil Village", id: 1196590, category: "horror" },
    { name: "Resident Evil 5", id: 21690, category: "horror" },
    { name: "Resident Evil 6", id: 221040, category: "horror" },
    { name: "Resident Evil Revelations", id: 222480, category: "horror" },
    { name: "Resident Evil Revelations 2", id: 287290, category: "horror" },
    { name: "Outlast", id: 238320, category: "horror" },
    { name: "Outlast 2", id: 414700, category: "horror" },
    { name: "Amnesia: The Dark Descent", id: 57300, category: "horror" },
    { name: "Amnesia: Rebirth", id: 999220, category: "horror" },
    { name: "SOMA", id: 282140, category: "horror" },
    { name: "Alien: Isolation", id: 214490, category: "horror" },
    { name: "The Evil Within", id: 268050, category: "horror" },
    { name: "The Evil Within 2", id: 601430, category: "horror" },
    { name: "Little Nightmares", id: 424840, category: "horror" },
    { name: "Little Nightmares II", id: 860510, category: "horror" },
    { name: "Phasmophobia", id: 739630, category: "horror" },
    { name: "Dead by Daylight", id: 381210, category: "horror" },
    { name: "The Forest", id: 242760, category: "horror" },
    { name: "Sons of the Forest", id: 1326470, category: "horror" },
    { name: "Dead Space", id: 1693980, category: "horror" },
    { name: "Dead Space 2", id: 47780, category: "horror" },
    { name: "Dead Space 3", id: 1238060, category: "horror" },
    { name: "Alan Wake", id: 108710, category: "horror" },
    { name: "Alan Wake 2", id: 1088850, category: "horror" },
    { name: "Visage", id: 594330, category: "horror" },
    { name: "Layers of Fear", id: 391720, category: "horror" },


    // ==================== ADVENTURE ====================

    { name: "Tomb Raider", id: 203160, category: "adventure" },
    { name: "Rise of the Tomb Raider", id: 391220, category: "adventure" },
    { name: "Shadow of the Tomb Raider", id: 750920, category: "adventure" },
    { name: "Uncharted: Legacy of Thieves Collection", id: 1659420, category: "adventure" },
    { name: "Death Stranding", id: 1190460, category: "adventure" },
    { name: "Death Stranding Director's Cut", id: 1850570, category: "adventure" },
    { name: "Stray", id: 1332010, category: "adventure" },
    { name: "The Last of Us Part I", id: 1888930, category: "adventure" },
    { name: "Detroit: Become Human", id: 1222140, category: "adventure" },
    { name: "Heavy Rain", id: 960910, category: "adventure" },
    { name: "Beyond: Two Souls", id: 960990, category: "adventure" },
    { name: "Life is Strange", id: 319630, category: "adventure" },
    { name: "Life is Strange 2", id: 532210, category: "adventure" },
    { name: "Life is Strange: True Colors", id: 936790, category: "adventure" },
    { name: "Firewatch", id: 383870, category: "adventure" },
    { name: "What Remains of Edith Finch", id: 501300, category: "adventure" },
    { name: "The Walking Dead", id: 207610, category: "adventure" },
    { name: "The Walking Dead: Season Two", id: 261030, category: "adventure" },
    { name: "Batman: Arkham Origins", id: 209000, category: "adventure" },
    { name: "Control", id: 870780, category: "adventure" },
    { name: "Quantum Break", id: 474960, category: "adventure" },
    { name: "Alan Wake's American Nightmare", id: 202750, category: "adventure" },
    { name: "The Stanley Parable: Ultra Deluxe", id: 1703340, category: "adventure" },
    { name: "Inside", id: 304430, category: "adventure" },
    { name: "Limbo", id: 48000, category: "adventure" },
    { name: "Ori and the Blind Forest", id: 261570, category: "adventure" },
    { name: "Ori and the Will of the Wisps", id: 1057090, category: "adventure" },
    { name: "Hollow Knight", id: 367520, category: "adventure" },
    { name: "Subnautica", id: 264710, category: "adventure" },
    { name: "Hades", id: 1145360, category: "adventure" },


    // ==================== RACING ====================

    { name: "Forza Horizon 4", id: 1293830, category: "racing" },
    { name: "Forza Horizon 5", id: 1551360, category: "racing" },
    { name: "Need for Speed Heat", id: 1222680, category: "racing" },
    { name: "Need for Speed Unbound", id: 1846380, category: "racing" },
    { name: "Need for Speed Payback", id: 1262580, category: "racing" },
    { name: "Dirt Rally 2.0", id: 690790, category: "racing" },
    { name: "Assetto Corsa", id: 244210, category: "racing" },
    { name: "Euro Truck Simulator 2", id: 227300, category: "racing" },
    { name: "American Truck Simulator", id: 270880, category: "racing" },
    { name: "CarX Drift Racing Online", id: 635260, category: "racing" },


    // ==================== SPORTS ====================

    { name: "eFootball", id: 1665460, category: "sports" },
    { name: "TEKKEN 8", id: 1778820, category: "sports" },
    { name: "TEKKEN 7", id: 389730, category: "sports" },
    { name: "Street Fighter 6", id: 1364780, category: "sports" },
    { name: "EA SPORTS FC 24", id: 2195250, category: "sports" },
    { name: "EA SPORTS FC 25", id: 2669320, category: "sports" },
    { name: "NBA 2K25", id: 2878980, category: "sports" },
    { name: "WWE 2K24", id: 2315690, category: "sports" },
    { name: "Rocket League", id: 252950, category: "sports" },
    { name: "Trackmania", id: 2225070, category: "sports" }

];


// ======================================================
// VALIDATION
// ======================================================

const uniqueNames = new Set(
    games.map(game => game.name.toLowerCase())
);

const uniqueIds = new Set(
    games.map(game => game.id)
);

console.log("ARTIN GAMES");
console.log("Total games:", games.length);
console.log("Unique names:", uniqueNames.size);
console.log("Unique IDs:", uniqueIds.size);

if (games.length !== 200) {
    console.error("ERROR: تعداد بازی‌ها 200 نیست:", games.length);
}

if (uniqueNames.size !== games.length) {
    console.error("ERROR: اسم تکراری وجود دارد.");
}

if (uniqueIds.size !== games.length) {
    console.error("ERROR: ID تکراری وجود دارد.");
}


// ======================================================
// SETTINGS
// ======================================================

const GAMES_PER_LOAD = 20;

let currentCategory = "all";
let currentSearch = "";
let visibleGames = GAMES_PER_LOAD;


// ======================================================
// ELEMENTS
// ======================================================

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");
const gameCount = document.getElementById("gameCount");
const loadingBox = document.getElementById("loadingBox");
const noResults = document.getElementById("noResults");
const loadMoreButton = document.getElementById("loadMoreButton");
const filters = document.querySelectorAll(".filter");


// ======================================================
// IMAGE
// ======================================================

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


// ======================================================
// STEAM LINK
// ======================================================

function getSteamLink(id) {

    return `https://store.steampowered.com/app/${id}/`;

}


// ======================================================
// FILTER
// ======================================================

function getFilteredGames() {

    return games.filter(game => {

        const categoryMatch =
            currentCategory === "all" ||
            game.category === currentCategory;

        const searchMatch =
            game.name
                .toLowerCase()
                .includes(currentSearch.toLowerCase());

        return categoryMatch && searchMatch;

    });

}


// ======================================================
// CREATE GAME CARD
// ======================================================

function createGameCard(game) {

    const card = document.createElement("article");

    card.className = "game-card";

    card.innerHTML = `

        <div class="game-image">

            <img
                src="${getGameImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/600x900?text=ARTIN+GAMES'"
            >

        </div>

        <div class="game-info">

            <span class="game-category">
                ${getCategoryName(game.category)}
            </span>

            <h3 class="game-name">
                ${game.name}
            </h3>

            <button class="view-game">
                مشاهده بازی
            </button>

        </div>

    `;


    const button = card.querySelector(".view-game");

    button.addEventListener("click", function () {

        const confirmed = confirm(
            `آیا می‌خواهید صفحه ${game.name} را در Steam باز کنید؟`
        );

        if (confirmed) {

            window.open(
                getSteamLink(game.id),
                "_blank"
            );

        }

    });


    return card;

}


// ======================================================
// CATEGORY NAME
// ======================================================

function getCategoryName(category) {

    const categories = {

        action: "اکشن",

        shooter: "شوتر",

        rpg: "نقش‌آفرینی",

        horror: "ترسناک",

        adventure: "ماجراجویی",

        racing: "مسابقه‌ای",

        sports: "ورزشی"

    };

    return categories[category] || "بازی";

}


// ======================================================
// RENDER GAMES
// ======================================================

function renderGames(reset = true) {

    const filteredGames = getFilteredGames();


    // وقتی سرچ یا دسته‌بندی عوض می‌شود
    if (reset) {

        visibleGames = GAMES_PER_LOAD;

        gamesGrid.innerHTML = "";

    }


    // اگر بازی پیدا نشد
    if (filteredGames.length === 0) {

        noResults.style.display = "block";

        loadMoreButton.style.display = "none";

        return;

    }


    noResults.style.display = "none";


    // فقط بازی‌هایی که باید الان نمایش داده شوند
    const gamesToShow =
        filteredGames.slice(0, visibleGames);


    // در حالت reset
    if (reset) {

        gamesToShow.forEach(game => {

            gamesGrid.appendChild(
                createGameCard(game)
            );

        });

    }


    // تعداد نمایش داده شده
    const shownCount =
        Math.min(
            visibleGames,
            filteredGames.length
        );


    // دکمه نمایش بیشتر
    if (shownCount < filteredGames.length) {

        loadMoreButton.style.display = "inline-flex";

    } else {

        loadMoreButton.style.display = "none";

    }

}


// ======================================================
// LOAD MORE
// ======================================================

if (loadMoreButton) {

    loadMoreButton.addEventListener("click", function () {

        const filteredGames = getFilteredGames();

        const oldVisibleGames = visibleGames;


        visibleGames = Math.min(
            visibleGames + GAMES_PER_LOAD,
            filteredGames.length
        );


        // فقط بازی‌های جدید را اضافه می‌کنیم
        // بازی‌های قبلی دوباره اضافه نمی‌شوند

        const newGames =
            filteredGames.slice(
                oldVisibleGames,
                visibleGames
            );


        newGames.forEach(game => {

            gamesGrid.appendChild(
                createGameCard(game)
            );

        });


        if (visibleGames >= filteredGames.length) {

            loadMoreButton.style.display = "none";

        }

    });

}


// ======================================================
// SEARCH
// ======================================================

if (gameSearch) {

    gameSearch.addEventListener("input", function () {

        currentSearch = this.value.trim();

        renderGames(true);

    });

}


// ======================================================
// FILTER BUTTONS
// ======================================================

filters.forEach(button => {

    button.addEventListener("click", function () {

        filters.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        currentCategory =
            this.dataset.category;


        renderGames(true);

    });

});


// ======================================================
// INITIALIZE
// ======================================================

function initGamesPage() {

    console.log("ARTIN GAMES: Script started");


    // مخفی کردن Loading
    if (loadingBox) {

        loadingBox.style.display = "none";

    }


    // نمایش تعداد واقعی بازی‌ها
    if (gameCount) {

        gameCount.textContent = games.length;

    }


    // نمایش Grid
    if (gamesGrid) {

        gamesGrid.style.display = "grid";

    }


    // نمایش اولین 20 بازی
    renderGames(true);


    console.log(
        `ARTIN GAMES: ${games.length} games loaded successfully.`
    );

}


// ======================================================
// START
// ======================================================

initGamesPage();
