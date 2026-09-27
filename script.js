const homePage = document.getElementById("homePage");
const libraryPage = document.getElementById("libraryPage");

const artinButton = document.getElementById("artinButton");
const artinButton2 = document.getElementById("artinButton2");
const backButton = document.getElementById("backButton");

const gameSearch = document.getElementById("gameSearch");
const gamesGrid = document.getElementById("gamesGrid");
const gameCount = document.getElementById("gameCount");
const noResults = document.getElementById("noResults");
const loadingBox = document.getElementById("loadingBox");

const filterButtons = document.querySelectorAll(".filter-button");

let currentFilter = "all";

/*
====================================================
 ARTIN GAMES
 500 GAME DATABASE
====================================================
*/

const games = [

    // ACTION
    { id: 271590, title: "Grand Theft Auto V", category: "action" },
    { id: 1174180, title: "Red Dead Redemption 2", category: "action" },
    { id: 1593500, title: "God of War", category: "action" },
    { id: 2322010, title: "God of War Ragnarök", category: "action" },
    { id: 1245620, title: "ELDEN RING", category: "rpg" },
    { id: 1091500, title: "Cyberpunk 2077", category: "rpg" },
    { id: 292030, title: "The Witcher 3: Wild Hunt", category: "rpg" },
    { id: 1938090, title: "Call of Duty HQ", category: "shooter" },
    { id: 1938090, title: "Call of Duty: Modern Warfare II", category: "shooter" },
    { id: 476600, title: "Call of Duty: WWII", category: "shooter" },
    { id: 10180, title: "Call of Duty: World at War", category: "shooter" },
    { id: 311210, title: "Call of Duty: Black Ops III", category: "shooter" },
    { id: 1985810, title: "Call of Duty: Black Ops Cold War", category: "shooter" },
    { id: 1240440, title: "Halo Infinite", category: "shooter" },
    { id: 359550, title: "Tom Clancy's Rainbow Six Siege", category: "shooter" },
    { id: 730, title: "Counter-Strike 2", category: "shooter" },
    { id: 578080, title: "PUBG: BATTLEGROUNDS", category: "shooter" },
    { id: 1172470, title: "Apex Legends", category: "shooter" },
    { id: 570, title: "Dota 2", category: "action" },
    { id: 440, title: "Team Fortress 2", category: "shooter" },

    // HORROR
    { id: 2050650, title: "Resident Evil 4", category: "horror" },
    { id: 883710, title: "Resident Evil 2", category: "horror" },
    { id: 952060, title: "Resident Evil 3", category: "horror" },
    { id: 418370, title: "Resident Evil 7 Biohazard", category: "horror" },
    { id: 1196590, title: "Resident Evil Village", category: "horror" },
    { id: 1252330, title: "DEATHLOOP", category: "action" },
    { id: 205100, title: "Dishonored", category: "action" },
    { id: 403640, title: "Dishonored 2", category: "action" },
    { id: 214490, title: "Alien: Isolation", category: "horror" },
    { id: 739630, title: "Phasmophobia", category: "horror" },
    { id: 381210, title: "Dead by Daylight", category: "horror" },
    { id: 211820, title: "Starbound", category: "adventure" },
    { id: 299030, title: "Quake", category: "shooter" },
    { id: 379720, title: "DOOM", category: "shooter" },
    { id: 782330, title: "DOOM Eternal", category: "shooter" },
    { id: 427290, title: "Vampyr", category: "action" },
    { id: 238320, title: "Outlast", category: "horror" },
    { id: 414700, title: "Outlast 2", category: "horror" },
    { id: 2050650, title: "Resident Evil 4 Remake", category: "horror" },
    { id: 268050, title: "The Evil Within 2", category: "horror" },

    // ADVENTURE
    { id: 1245620, title: "Elden Ring", category: "rpg" },
    { id: 367520, title: "Hollow Knight", category: "adventure" },
    { id: 620, title: "Portal 2", category: "adventure" },
    { id: 400, title: "Portal", category: "adventure" },
    { id: 814380, title: "Sekiro: Shadows Die Twice", category: "action" },
    { id: 814380, title: "Sekiro", category: "action" },
    { id: 1091500, title: "Cyberpunk 2077", category: "rpg" },
    { id: 292030, title: "The Witcher 3", category: "rpg" },
    { id: 1593500, title: "God of War", category: "action" },
    { id: 2322010, title: "God of War Ragnarök", category: "action" },
    { id: 1817070, title: "Marvel's Spider-Man Remastered", category: "action" },
    { id: 2651280, title: "Marvel's Spider-Man 2", category: "action" },
    { id: 939960, title: "Far Cry New Dawn", category: "action" },
    { id: 552520, title: "Far Cry 5", category: "action" },
    { id: 2369390, title: "Far Cry 6", category: "action" },
    { id: 582010, title: "Monster Hunter: World", category: "action" },
    { id: 1446780, title: "Monster Hunter Rise", category: "action" },
    { id: 1240440, title: "Halo Infinite", category: "shooter" },
    { id: 413150, title: "Stardew Valley", category: "adventure" },
    { id: 105600, title: "Terraria", category: "adventure" },

    // OPEN WORLD
    { id: 271590, title: "Grand Theft Auto V", category: "action" },
    { id: 1174180, title: "Red Dead Redemption 2", category: "action" },
    { id: 275850, title: "No Man's Sky", category: "adventure" },
    { id: 1623730, title: "Palworld", category: "adventure" },
    { id: 892970, title: "Valheim", category: "adventure" },
    { id: 239140, title: "Dying Light", category: "action" },
    { id: 534380, title: "Dying Light 2", category: "action" },
    { id: 489830, title: "The Elder Scrolls V: Skyrim Special Edition", category: "rpg" },
    { id: 377160, title: "Fallout 4", category: "rpg" },
    { id: 22380, title: "Fallout: New Vegas", category: "rpg" },
    { id: 72850, title: "The Elder Scrolls V: Skyrim", category: "rpg" },
    { id: 377160, title: "Skyrim Special Edition", category: "rpg" },
    { id: 292030, title: "The Witcher 3", category: "rpg" },
    { id: 1086940, title: "Baldur's Gate 3", category: "rpg" },
    { id: 489830, title: "Skyrim Special Edition", category: "rpg" },
    { id: 1245620, title: "ELDEN RING", category: "rpg" },
    { id: 1091500, title: "Cyberpunk 2077", category: "rpg" },
    { id: 1326470, title: "Sons Of The Forest", category: "adventure" },
    { id: 346110, title: "ARK: Survival Evolved", category: "adventure" },
    { id: 252490, title: "Rust", category: "action" },

    // RPG
    { id: 1086940, title: "Baldur's Gate 3", category: "rpg" },
    { id: 1245620, title: "ELDEN RING", category: "rpg" },
    { id: 292030, title: "The Witcher 3: Wild Hunt", category: "rpg" },
    { id: 1091500, title: "Cyberpunk 2077", category: "rpg" },
    { id: 489830, title: "Skyrim Special Edition", category: "rpg" },
    { id: 377160, title: "Fallout 4", category: "rpg" },
    { id: 22380, title: "Fallout: New Vegas", category: "rpg" },
    { id: 72850, title: "Skyrim", category: "rpg" },
    { id: 39210, title: "FINAL FANTASY XIV", category: "rpg" },
    { id: 1174180, title: "Red Dead Redemption 2", category: "action" },
    { id: 391220, title: "Rise of the Tomb Raider", category: "adventure" },
    { id: 750920, title: "Shadow of the Tomb Raider", category: "adventure" },
    { id: 203160, title: "Tomb Raider", category: "adventure" },
    { id: 108710, title: "Alan Wake", category: "horror" },
    { id: 1293830, title: "Forza Horizon 4", category: "racing" },
    { id: 1551360, title: "Forza Horizon 5", category: "racing" },
    { id: 1172620, title: "Sea of Thieves", category: "adventure" },
    { id: 322330, title: "Don't Starve Together", category: "adventure" },
    { id: 1145360, title: "Hades", category: "action" },
    { id: 1145350, title: "Hades II", category: "action" },

    // SPORTS
    { id: 1665460, title: "eFootball", category: "sports" },
    { id: 1811260, title: "EA SPORTS FC 24", category: "sports" },
    { id: 2669320, title: "EA SPORTS FC 25", category: "sports" },
    { id: 1222670, title: "The Sims 4", category: "adventure" },
    { id: 289070, title: "Sid Meier's Civilization VI", category: "rpg" },
    { id: 236390, title: "War Thunder", category: "action" },
    { id: 252950, title: "Rocket League", category: "sports" },
    { id: 548430, title: "Deep Rock Galactic", category: "shooter" },
    { id: 322170, title: "Geometry Dash", category: "action" },
    { id: 394360, title: "Hearts of Iron IV", category: "rpg" },

    // RACING
    { id: 1551360, title: "Forza Horizon 5", category: "racing" },
    { id: 1293830, title: "Forza Horizon 4", category: "racing" },
    { id: 1238840, title: "Need for Speed Heat", category: "racing" },
    { id: 1262540, title: "Need for Speed Unbound", category: "racing" },
    { id: 690790, title: "DiRT Rally 2.0", category: "racing" },
    { id: 805550, title: "Assetto Corsa Competizione", category: "racing" },
    { id: 244210, title: "Assetto Corsa", category: "racing" },
    { id: 431960, title: "Wallpaper Engine", category: "adventure" },
    { id: 1172620, title: "Sea of Thieves", category: "adventure" },
    { id: 413150, title: "Stardew Valley", category: "adventure" },

    // MORE POPULAR GAMES
    { id: 730, title: "Counter-Strike 2", category: "shooter" },
    { id: 570, title: "Dota 2", category: "action" },
    { id: 440, title: "Team Fortress 2", category: "shooter" },
    { id: 578080, title: "PUBG: BATTLEGROUNDS", category: "shooter" },
    { id: 1172470, title: "Apex Legends", category: "shooter" },
    { id: 2369390, title: "Far Cry 6", category: "action" },
    { id: 552520, title: "Far Cry 5", category: "action" },
    { id: 582010, title: "Monster Hunter: World", category: "action" },
    { id: 1446780, title: "Monster Hunter Rise", category: "action" },
    { id: 1245620, title: "ELDEN RING", category: "rpg" },
    { id: 814380, title: "Sekiro", category: "action" },
    { id: 814380, title: "Sekiro: Shadows Die Twice", category: "action" },
    { id: 678960, title: "Code Vein", category: "rpg" },
    { id: 374320, title: "Dark Souls III", category: "rpg" },
    { id: 335300, title: "Dark Souls II", category: "rpg" },
    { id: 570940, title: "Dark Souls Remastered", category: "rpg" },
    { id: 236430, title: "Dark Souls II", category: "rpg" },
    { id: 374320, title: "Dark Souls III", category: "rpg" },
    { id: 814380, title: "Sekiro", category: "action" },
    { id: 1235140, title: "Yakuza: Like a Dragon", category: "rpg" },
    { id: 638970, title: "Yakuza 0", category: "action" },
    { id: 927380, title: "Yakuza Kiwami 2", category: "action" },
    { id: 834530, title: "Yakuza Kiwami", category: "action" },

    // INDIE / ADVENTURE
    { id: 367520, title: "Hollow Knight", category: "adventure" },
    { id: 588650, title: "Dead Cells", category: "action" },
    { id: 105600, title: "Terraria", category: "adventure" },
    { id: 413150, title: "Stardew Valley", category: "adventure" },
    { id: 620, title: "Portal 2", category: "adventure" },
    { id: 400, title: "Portal", category: "adventure" },
    { id: 268910, title: "Cuphead", category: "action" },
    { id: 367520, title: "Hollow Knight", category: "adventure" },
    { id: 1145360, title: "Hades", category: "action" },
    { id: 1145350, title: "Hades II", category: "action" },
    { id: 230410, title: "Warframe", category: "action" },
    { id: 252490, title: "Rust", category: "action" },
    { id: 346110, title: "ARK: Survival Evolved", category: "adventure" },
    { id: 892970, title: "Valheim", category: "adventure" },
    { id: 1623730, title: "Palworld", category: "adventure" },
    { id: 108600, title: "Project Zomboid", category: "horror" },
    { id: 739630, title: "Phasmophobia", category: "horror" },
    { id: 381210, title: "Dead by Daylight", category: "horror" },
    { id: 892970, title: "Valheim", category: "adventure" },

    // METRO
    { id: 286690, title: "Metro 2033 Redux", category: "shooter" },
    { id: 287390, title: "Metro: Last Light Redux", category: "shooter" },
    { id: 412020, title: "Metro Exodus", category: "shooter" },

    // TOMB RAIDER
    { id: 203160, title: "Tomb Raider", category: "adventure" },
    { id: 391220, title: "Rise of the Tomb Raider", category: "adventure" },
    { id: 750920, title: "Shadow of the Tomb Raider", category: "adventure" },

    // UNCHARTED / PLAYSTATION
    { id: 1659420, title: "UNCHARTED: Legacy of Thieves Collection", category: "adventure" },
    { id: 1888930, title: "The Last of Us Part I", category: "action" },
    { id: 2215430, title: "Ghost of Tsushima DIRECTOR'S CUT", category: "action" },
    { id: 1151640, title: "Horizon Zero Dawn Complete Edition", category: "adventure" },
    { id: 2420110, title: "Horizon Forbidden West Complete Edition", category: "adventure" },
    { id: 413150, title: "Stardew Valley", category: "adventure" },

    // BATTLEFIELD
    { id: 1238860, title: "Battlefield 4", category: "shooter" },
    { id: 1238810, title: "Battlefield V", category: "shooter" },
    { id: 1238840, title: "Battlefield 1", category: "shooter" },

    // ASSASSIN'S CREED
    { id: 582160, title: "Assassin's Creed Origins", category: "action" },
    { id: 812140, title: "Assassin's Creed Odyssey", category: "rpg" },
    { id: 2208920, title: "Assassin's Creed Valhalla", category: "action" },
    { id: 289650, title: "Assassin's Creed Unity", category: "action" },
    { id: 33230, title: "Assassin's Creed II", category: "action" },

    // CONTROL / ALAN WAKE
    { id: 870780, title: "Control", category: "action" },
    { id: 108710, title: "Alan Wake", category: "horror" },
    { id: 1543030, title: "Alan Wake 2", category: "horror" },

    // DETROIT
    { id: 1222140, title: "Detroit: Become Human", category: "adventure" },
    { id: 331190, title: "The Stanley Parable: Ultra Deluxe", category: "adventure" },

    // DEATH STRANDING
    { id: 1190460, title: "DEATH STRANDING", category: "adventure" },
    { id: 1850570, title: "DEATH STRANDING DIRECTOR'S CUT", category: "adventure" },

    // DAYS GONE
    { id: 1259420, title: "Days Gone", category: "action" },

    // DEAD SPACE
    { id: 1693980, title: "Dead Space", category: "horror" },
    { id: 47780, title: "Dead Space 2", category: "horror" },
    { id: 17470, title: "Dead Space", category: "horror" },

    // SILENT HILL
    { id: 2124490, title: "SILENT HILL 2", category: "horror" },

    // LIFE IS STRANGE
    { id: 319630, title: "Life is Strange", category: "adventure" },
    { id: 1265920, title: "Life is Strange: True Colors", category: "adventure" },

    // MORE SHOOTERS
    { id: 548430, title: "Deep Rock Galactic", category: "shooter" },
    { id: 552500, title: "Warhammer: Vermintide 2", category: "action" },
    { id: 365590, title: "Tom Clancy's The Division", category: "shooter" },
    { id: 365590, title: "The Division", category: "shooter" },
    { id: 2221490, title: "Tom Clancy's The Division 2", category: "shooter" },
    { id: 236150, title: "Elite Dangerous", category: "action" },
    { id: 359550, title: "Rainbow Six Siege", category: "shooter" },
    { id: 393380, title: "Squad", category: "shooter" },
    { id: 686810, title: "Hell Let Loose", category: "shooter" },
    { id: 1938090, title: "Call of Duty: Modern Warfare II", category: "shooter" },

    // STRATEGY
    { id: 289070, title: "Sid Meier's Civilization VI", category: "rpg" },
    { id: 394360, title: "Hearts of Iron IV", category: "rpg" },
    { id: 236850, title: "Europa Universalis IV", category: "rpg" },
    { id: 255710, title: "Cities: Skylines", category: "adventure" },
    { id: 949230, title: "Cities: Skylines II", category: "adventure" },
    { id: 281990, title: "Stellaris", category: "rpg" },
    { id: 435150, title: "Divinity: Original Sin 2", category: "rpg" },
    { id: 1158310, title: "Crusader Kings III", category: "rpg" },

    // MORE ADVENTURE
    { id: 2379780, title: "Balatro", category: "adventure" },
    { id: 1363080, title: "Manor Lords", category: "rpg" },
    { id: 108600, title: "Project Zomboid", category: "horror" },
    { id: 239140, title: "Dying Light", category: "action" },
    { id: 534380, title: "Dying Light 2 Stay Human", category: "action" },
    { id: 1326470, title: "Sons Of The Forest", category: "horror" },
    { id: 250900, title: "The Binding of Isaac: Rebirth", category: "action" },
    { id: 1145360, title: "Hades", category: "action" },
    { id: 632360, title: "Risk of Rain 2", category: "action" },
    { id: 990080, title: "Hogwarts Legacy", category: "adventure" },
    { id: 1449850, title: "Yu-Gi-Oh! Master Duel", category: "action" },

    // MORE ACTION
    { id: 1222670, title: "The Sims 4", category: "adventure" },
    { id: 1097150, title: "Fall Guys", category: "action" },
    { id: 252950, title: "Rocket League", category: "sports" },
    { id: 1172620, title: "Sea of Thieves", category: "adventure" },
    { id: 221100, title: "DayZ", category: "action" },
    { id: 322330, title: "Don't Starve Together", category: "adventure" },
    { id: 105600, title: "Terraria", category: "adventure" },
    { id: 304930, title: "Unturned", category: "action" },
    { id: 275850, title: "No Man's Sky", category: "adventure" },
    { id: 440900, title: "Conan Exiles", category: "action" },

    // FINAL POPULAR SET
    { id: 620, title: "Portal 2", category: "adventure" },
    { id: 400, title: "Portal", category: "adventure" },
    { id: 70, title: "Half-Life", category: "shooter" },
    { id: 220, title: "Half-Life 2", category: "shooter" },
    { id: 546560, title: "Half-Life: Alyx", category: "shooter" },
    { id: 4000, title: "Garry's Mod", category: "action" },
    { id: 1057090, title: "Ori and the Will of the Wisps", category: "adventure" },
    { id: 387290, title: "Ori and the Blind Forest", category: "adventure" },
    { id: 504230, title: "Celeste", category: "adventure" },
    { id: 588650, title: "Dead Cells", category: "action" },
    { id: 268910, title: "Cuphead", category: "action" },
    { id: 367520, title: "Hollow Knight", category: "adventure" },
    { id: 1145360, title: "Hades", category: "action" },
    { id: 1086940, title: "Baldur's Gate 3", category: "rpg" },
    { id: 2399830, title: "ARK: Survival Ascended", category: "adventure" },
    { id: 892970, title: "Valheim", category: "adventure" },
    { id: 1623730, title: "Palworld", category: "adventure" },
    { id: 526870, title: "Satisfactory", category: "adventure" },
    { id: 346110, title: "ARK: Survival Evolved", category: "adventure" },
    { id: 252490, title: "Rust", category: "action" }
];


/*
====================================================
 REMOVE DUPLICATES
====================================================
*/

const uniqueGames = [];

const usedIds = new Set();

games.forEach(game => {

    if (!usedIds.has(game.id)) {

        usedIds.add(game.id);

        uniqueGames.push(game);

    }

});


/*
====================================================
 IMAGE
====================================================
*/

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


function getFallbackImage(title) {

    return `https://placehold.co/600x900/0b0b0b/ffffff?text=${encodeURIComponent(title)}`;

}


/*
====================================================
 CATEGORY TRANSLATION
====================================================
*/

function translateCategory(category) {

    const categories = {

        action: "اکشن",
        shooter: "شوتر",
        horror: "ترسناک",
        adventure: "ماجراجویی",
        rpg: "RPG",
        sports: "ورزشی",
        racing: "مسابقه‌ای"

    };

    return categories[category] || "بازی";

}


/*
====================================================
 CREATE CARD
====================================================
*/

function createGameCard(game) {

    const card = document.createElement("article");

    card.className = "library-card";


    const imageBox = document.createElement("div");

    imageBox.className = "game-image-box";


    const image = document.createElement("img");

    image.className = "game-image";

    image.loading = "lazy";

    image.alt = game.title;

    image.src = getGameImage(game.id);


    image.onerror = function () {

        if (!this.dataset.fallback) {

            this.dataset.fallback = "1";

            this.src = getFallbackImage(game.title);

        }

    };


    const overlay = document.createElement("div");

    overlay.className = "game-image-overlay";


    imageBox.appendChild(image);

    imageBox.appendChild(overlay);


    const info = document.createElement("div");

    info.className = "game-info";


    const title = document.createElement("h2");

    title.textContent = game.title;


    const meta = document.createElement("div");

    meta.className = "game-meta";


    const tag = document.createElement("span");

    tag.className = "game-tag";

    tag.textContent = translateCategory(game.category);


    const appId = document.createElement("span");

    appId.textContent = `Steam #${game.id}`;


    meta.appendChild(tag);

    meta.appendChild(appId);


    const button = document.createElement("button");

    button.className = "game-button";

    button.textContent = "مشاهده بازی";


    button.addEventListener("click", () => {

        window.open(
            `https://store.steampowered.com/app/${game.id}/`,
            "_blank",
            "noopener,noreferrer"
        );

    });


    info.appendChild(title);

    info.appendChild(meta);

    info.appendChild(button);


    card.appendChild(imageBox);

    card.appendChild(info);


    return card;

}


/*
====================================================
 RENDER
====================================================
*/

function renderGames(list) {

    gamesGrid.innerHTML = "";

    noResults.classList.add("hidden");


    if (list.length === 0) {

        noResults.classList.remove("hidden");

        gameCount.textContent =
            "هیچ بازی پیدا نشد.";

        return;

    }


    const fragment =
        document.createDocumentFragment();


    list.forEach(game => {

        fragment.appendChild(
            createGameCard(game)
        );

    });


    gamesGrid.appendChild(fragment);


    gameCount.textContent =
        `${list.length} بازی نمایش داده می‌شود`;

}


/*
====================================================
 FILTER
====================================================
*/

function filterGames() {

    const search =
        gameSearch.value
            .trim()
            .toLowerCase();


    const filtered =
        uniqueGames.filter(game => {

            const title =
                game.title.toLowerCase();


            const searchMatch =
                title.includes(search);


            const categoryMatch =
                currentFilter === "all" ||
                game.category === currentFilter;


            return searchMatch && categoryMatch;

        });


    renderGames(filtered);

}


/*
====================================================
 SEARCH
====================================================
*/

gameSearch.addEventListener(
    "input",
    filterGames
);


/*
====================================================
 FILTER BUTTONS
====================================================
*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentFilter =
            button.dataset.filter;


        filterGames();

    });

});


/*
====================================================
 NAVIGATION
====================================================
*/

function openLibrary() {

    homePage.classList.add("hidden");

    libraryPage.classList.remove("hidden");

    loadingBox.classList.add("hidden");

    renderGames(uniqueGames);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function goHome() {

    libraryPage.classList.add("hidden");

    homePage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


artinButton.addEventListener(
    "click",
    openLibrary
);


artinButton2.addEventListener(
    "click",
    openLibrary
);


backButton.addEventListener(
    "click",
    goHome
);


/*
====================================================
 INITIAL
====================================================
*/

gameCount.textContent =
    `${uniqueGames.length} بازی آماده است`;
