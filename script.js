/* =========================================================
   ARTIN GAMES
   GAME LIBRARY
   EXACTLY 200 UNIQUE GAMES
   ========================================================= */


/* =========================================================
   GAME DATA
   ========================================================= */

const games = [

    /* ================= ACTION ================= */

    { name: "Grand Theft Auto V", id: 271590, category: "action", type: "اکشن" },
    { name: "Grand Theft Auto IV", id: 12210, category: "action", type: "اکشن" },
    { name: "Grand Theft Auto: San Andreas", id: 12120, category: "action", type: "اکشن" },
    { name: "Grand Theft Auto: Vice City", id: 12110, category: "action", type: "اکشن" },
    { name: "Grand Theft Auto III", id: 12100, category: "action", type: "اکشن" },
    { name: "Red Dead Redemption 2", id: 1174180, category: "action", type: "اکشن" },
    { name: "Sleeping Dogs: Definitive Edition", id: 307690, category: "action", type: "اکشن" },
    { name: "Watch Dogs", id: 243470, category: "action", type: "اکشن" },
    { name: "Watch Dogs 2", id: 447040, category: "action", type: "اکشن" },
    { name: "Watch Dogs: Legion", id: 2231380, category: "action", type: "اکشن" },
    { name: "Just Cause 3", id: 225540, category: "action", type: "اکشن" },
    { name: "Just Cause 4", id: 517630, category: "action", type: "اکشن" },
    { name: "Mad Max", id: 234140, category: "action", type: "اکشن" },
    { name: "Batman: Arkham Knight", id: 208650, category: "action", type: "اکشن" },
    { name: "Batman: Arkham City", id: 200260, category: "action", type: "اکشن" },
    { name: "Batman: Arkham Asylum", id: 35140, category: "action", type: "اکشن" },
    { name: "Middle-earth: Shadow of Mordor", id: 241930, category: "action", type: "اکشن" },
    { name: "Middle-earth: Shadow of War", id: 356190, category: "action", type: "اکشن" },
    { name: "Assassin's Creed II", id: 33230, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Brotherhood", id: 48190, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Revelations", id: 201870, category: "action", type: "اکشن" },
    { name: "Assassin's Creed III", id: 208480, category: "action", type: "اکشن" },
    { name: "Assassin's Creed IV Black Flag", id: 242050, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Unity", id: 289650, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Origins", id: 582160, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Odyssey", id: 812140, category: "action", type: "اکشن" },
    { name: "Assassin's Creed Valhalla", id: 2208920, category: "action", type: "اکشن" },
    { name: "Far Cry 3", id: 220240, category: "action", type: "اکشن" },
    { name: "Far Cry 4", id: 298110, category: "action", type: "اکشن" },
    { name: "Far Cry 5", id: 552520, category: "action", type: "اکشن" },
    { name: "Far Cry 6", id: 2369390, category: "action", type: "اکشن" },
    { name: "Dying Light", id: 239140, category: "action", type: "اکشن" },
    { name: "Dying Light 2 Stay Human", id: 534380, category: "action", type: "اکشن" },
    { name: "Days Gone", id: 1259420, category: "action", type: "اکشن" },
    { name: "Horizon Zero Dawn", id: 1151640, category: "action", type: "اکشن" },
    { name: "Horizon Forbidden West", id: 2420110, category: "action", type: "اکشن" },
    { name: "God of War", id: 1593500, category: "action", type: "اکشن" },
    { name: "God of War Ragnarök", id: 2322010, category: "action", type: "اکشن" },
    { name: "Marvel's Spider-Man Remastered", id: 1817070, category: "action", type: "اکشن" },
    { name: "Marvel's Spider-Man: Miles Morales", id: 1817190, category: "action", type: "اکشن" },
    { name: "Black Myth: Wukong", id: 2358720, category: "action", type: "اکشن" },
    { name: "Palworld", id: 1623730, category: "action", type: "اکشن" },
    { name: "Terraria", id: 105600, category: "action", type: "اکشن" },
    { name: "Stardew Valley", id: 413150, category: "action", type: "اکشن" },
    { name: "Valheim", id: 892970, category: "action", type: "اکشن" },

    /* ================= RPG ================= */

    { name: "Cyberpunk 2077", id: 1091500, category: "rpg", type: "نقش‌آفرینی" },
    { name: "The Witcher 3: Wild Hunt", id: 292030, category: "rpg", type: "نقش‌آفرینی" },
    { name: "The Witcher 2: Assassins of Kings", id: 20920, category: "rpg", type: "نقش‌آفرینی" },
    { name: "The Elder Scrolls V: Skyrim", id: 489830, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Fallout 4", id: 377160, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Fallout: New Vegas", id: 22380, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Elden Ring", id: 1245620, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Baldur's Gate 3", id: 1086940, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Dark Souls Remastered", id: 570940, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Dark Souls III", id: 374320, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Sekiro: Shadows Die Twice", id: 814380, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Monster Hunter: World", id: 582010, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Monster Hunter Rise", id: 1446780, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Dragon's Dogma 2", id: 2054970, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Starfield", id: 1716740, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Mass Effect Legendary Edition", id: 1328670, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Dragon Age: Inquisition", id: 1222690, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Kingdom Come: Deliverance", id: 379430, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Kingdom Come: Deliverance II", id: 1771300, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Divinity: Original Sin 2", id: 435150, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Persona 5 Royal", id: 1687950, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Final Fantasy VII Remake Intergrade", id: 1462040, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Final Fantasy XV Windows Edition", id: 637650, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Tales of Arise", id: 740130, category: "rpg", type: "نقش‌آفرینی" },
    { name: "NieR:Automata", id: 524220, category: "rpg", type: "نقش‌آفرینی" },
    { name: "NieR Replicant ver.1.22474487139...", id: 1113560, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Yakuza: Like a Dragon", id: 1235140, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Like a Dragon: Infinite Wealth", id: 2072450, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Path of Exile", id: 238960, category: "rpg", type: "نقش‌آفرینی" },
    { name: "Path of Exile 2", id: 2694490, category: "rpg", type: "نقش‌آفرینی" },

    /* ================= SHOOTER ================= */

    { name: "Counter-Strike 2", id: 730, category: "shooter", type: "شوتر" },
    { name: "Counter-Strike: Source", id: 240, category: "shooter", type: "شوتر" },
    { name: "Counter-Strike 1.6", id: 10, category: "shooter", type: "شوتر" },
    { name: "Call of Duty 4: Modern Warfare", id: 7940, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Modern Warfare 2", id: 10180, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Black Ops", id: 42700, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Black Ops II", id: 202970, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Ghosts", id: 209160, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Advanced Warfare", id: 209650, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: WWII", id: 476600, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Black Ops III", id: 311210, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Modern Warfare Remastered", id: 393080, category: "shooter", type: "شوتر" },
    { name: "Call of Duty: Modern Warfare", id: 2000950, category: "shooter", type: "شوتر" },
    { name: "DOOM", id: 379720, category: "shooter", type: "شوتر" },
    { name: "DOOM Eternal", id: 782330, category: "shooter", type: "شوتر" },
    { name: "Wolfenstein: The New Order", id: 201810, category: "shooter", type: "شوتر" },
    { name: "Wolfenstein II: The New Colossus", id: 612880, category: "shooter", type: "شوتر" },
    { name: "Titanfall 2", id: 1237970, category: "shooter", type: "شوتر" },
    { name: "Battlefield 1", id: 1238840, category: "shooter", type: "شوتر" },
    { name: "Battlefield V", id: 1238810, category: "shooter", type: "شوتر" },
    { name: "Battlefield 2042", id: 1517290, category: "shooter", type: "شوتر" },
    { name: "Battlefield 4", id: 1238860, category: "shooter", type: "شوتر" },
    { name: "Battlefield Hardline", id: 1238880, category: "shooter", type: "شوتر" },
    { name: "Metro 2033 Redux", id: 286690, category: "shooter", type: "شوتر" },
    { name: "Metro: Last Light Redux", id: 287390, category: "shooter", type: "شوتر" },
    { name: "Metro Exodus", id: 412020, category: "shooter", type: "شوتر" },
    { name: "Metro Exodus Enhanced Edition", id: 1449560, category: "shooter", type: "شوتر" },
    { name: "Destiny 2", id: 1085660, category: "shooter", type: "شوتر" },
    { name: "Warframe", id: 230410, category: "shooter", type: "شوتر" },
    { name: "Apex Legends", id: 1172470, category: "shooter", type: "شوتر" },
    { name: "PAYDAY 2", id: 218620, category: "shooter", type: "شوتر" },
    { name: "Left 4 Dead 2", id: 550, category: "shooter", type: "شوتر" },
    { name: "Half-Life 2", id: 220, category: "shooter", type: "شوتر" },
    { name: "Half-Life 2: Episode One", id: 380, category: "shooter", type: "شوتر" },
    { name: "Half-Life 2: Episode Two", id: 420, category: "shooter", type: "شوتر" },
    { name: "Portal 2", id: 620, category: "shooter", type: "شوتر" },
    { name: "Borderlands 2", id: 49520, category: "shooter", type: "شوتر" },
    { name: "Borderlands 3", id: 397540, category: "shooter", type: "شوتر" },
    { name: "Far Cry 2", id: 19900, category: "shooter", type: "شوتر" },
    { name: "Crysis", id: 17300, category: "shooter", type: "شوتر" },
    { name: "Crysis 2", id: 108800, category: "shooter", type: "شوتر" },
    { name: "Crysis 3 Remastered", id: 2096610, category: "shooter", type: "شوتر" },
    { name: "DOOM 3", id: 9050, category: "shooter", type: "شوتر" },
    { name: "RAGE", id: 9200, category: "shooter", type: "شوتر" },
    { name: "Quake", id: 2310, category: "shooter", type: "شوتر" },

    /* ================= HORROR ================= */

    { name: "Resident Evil 2", id: 883710, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 3", id: 952060, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 4", id: 2050650, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 7 Biohazard", id: 418370, category: "horror", type: "ترسناک" },
    { name: "Resident Evil Village", id: 1196590, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 5", id: 21690, category: "horror", type: "ترسناک" },
    { name: "Resident Evil 6", id: 221040, category: "horror", type: "ترسناک" },
    { name: "Resident Evil Revelations", id: 222480, category: "horror", type: "ترسناک" },
    { name: "Resident Evil Revelations 2", id: 287290, category: "horror", type: "ترسناک" },
    { name: "Outlast", id: 238320, category: "horror", type: "ترسناک" },
    { name: "Outlast 2", id: 414700, category: "horror", type: "ترسناک" },
    { name: "Amnesia: The Dark Descent", id: 57300, category: "horror", type: "ترسناک" },
    { name: "Amnesia: Rebirth", id: 999220, category: "horror", type: "ترسناک" },
    { name: "SOMA", id: 282140, category: "horror", type: "ترسناک" },
    { name: "Alien: Isolation", id: 214490, category: "horror", type: "ترسناک" },
    { name: "The Evil Within", id: 268050, category: "horror", type: "ترسناک" },
    { name: "The Evil Within 2", id: 601430, category: "horror", type: "ترسناک" },
    { name: "Little Nightmares", id: 424840, category: "horror", type: "ترسناک" },
    { name: "Little Nightmares II", id: 860510, category: "horror", type: "ترسناک" },
    { name: "Phasmophobia", id: 739630, category: "horror", type: "ترسناک" },
    { name: "Dead by Daylight", id: 381210, category: "horror", type: "ترسناک" },
    { name: "The Forest", id: 242760, category: "horror", type: "ترسناک" },
    { name: "Sons of the Forest", id: 1326470, category: "horror", type: "ترسناک" },
    { name: "Dead Space", id: 1693980, category: "horror", type: "ترسناک" },
    { name: "Dead Space 2", id: 47780, category: "horror", type: "ترسناک" },
    { name: "Dead Space 3", id: 1238060, category: "horror", type: "ترسناک" },
    { name: "Alan Wake", id: 108710, category: "horror", type: "ترسناک" },
    { name: "Alan Wake 2", id: 1088850, category: "horror", type: "ترسناک" },
    { name: "Visage", id: 594330, category: "horror", type: "ترسناک" },
    { name: "Layers of Fear", id: 391720, category: "horror", type: "ترسناک" },

    /* ================= ADVENTURE ================= */

    { name: "Tomb Raider", id: 203160, category: "adventure", type: "ماجراجویی" },
    { name: "Rise of the Tomb Raider", id: 391220, category: "adventure", type: "ماجراجویی" },
    { name: "Shadow of the Tomb Raider", id: 750920, category: "adventure", type: "ماجراجویی" },
    { name: "Uncharted: Legacy of Thieves Collection", id: 1659420, category: "adventure", type: "ماجراجویی" },
    { name: "Death Stranding", id: 1190460, category: "adventure", type: "ماجراجویی" },
    { name: "Death Stranding Director's Cut", id: 1850570, category: "adventure", type: "ماجراجویی" },
    { name: "Stray", id: 1332010, category: "adventure", type: "ماجراجویی" },
    { name: "The Last of Us Part I", id: 1888930, category: "adventure", type: "ماجراجویی" },
    { name: "Detroit: Become Human", id: 1222140, category: "adventure", type: "ماجراجویی" },
    { name: "Heavy Rain", id: 960910, category: "adventure", type: "ماجراجویی" },
    { name: "Beyond: Two Souls", id: 960990, category: "adventure", type: "ماجراجویی" },
    { name: "Life is Strange", id: 319630, category: "adventure", type: "ماجراجویی" },
    { name: "Life is Strange 2", id: 532210, category: "adventure", type: "ماجراجویی" },
    { name: "Life is Strange: True Colors", id: 936790, category: "adventure", type: "ماجراجویی" },
    { name: "Firewatch", id: 383870, category: "adventure", type: "ماجراجویی" },
    { name: "What Remains of Edith Finch", id: 501300, category: "adventure", type: "ماجراجویی" },
    { name: "The Walking Dead", id: 207610, category: "adventure", type: "ماجراجویی" },
    { name: "The Walking Dead: Season Two", id: 261030, category: "adventure", type: "ماجراجویی" },
    { name: "Batman: Arkham Origins", id: 209000, category: "adventure", type: "ماجراجویی" },
    { name: "Control", id: 870780, category: "adventure", type: "ماجراجویی" },
    { name: "Quantum Break", id: 474960, category: "adventure", type: "ماجراجویی" },
    { name: "Alan Wake's American Nightmare", id: 202750, category: "adventure", type: "ماجراجویی" },
    { name: "The Stanley Parable: Ultra Deluxe", id: 1703340, category: "adventure", type: "ماجراجویی" },
    { name: "Inside", id: 304430, category: "adventure", type: "ماجراجویی" },
    { name: "Limbo", id: 48000, category: "adventure", type: "ماجراجویی" },
    { name: "Ori and the Blind Forest", id: 261570, category: "adventure", type: "ماجراجویی" },
    { name: "Ori and the Will of the Wisps", id: 1057090, category: "adventure", type: "ماجراجویی" },
    { name: "Hollow Knight", id: 367520, category: "adventure", type: "ماجراجویی" },
    { name: "Subnautica", id: 264710, category: "adventure", type: "ماجراجویی" },
    { name: "Hades", id: 1145360, category: "adventure", type: "ماجراجویی" },

    /* ================= RACING ================= */

    { name: "Forza Horizon 4", id: 1293830, category: "racing", type: "مسابقه‌ای" },
    { name: "Forza Horizon 5", id: 1551360, category: "racing", type: "مسابقه‌ای" },
    { name: "Need for Speed Heat", id: 1222680, category: "racing", type: "مسابقه‌ای" },
    { name: "Need for Speed Unbound", id: 1846380, category: "racing", type: "مسابقه‌ای" },
    { name: "Need for Speed Payback", id: 1262580, category: "racing", type: "مسابقه‌ای" },
    { name: "Dirt Rally 2.0", id: 690790, category: "racing", type: "مسابقه‌ای" },
    { name: "Assetto Corsa", id: 244210, category: "racing", type: "مسابقه‌ای" },
    { name: "Euro Truck Simulator 2", id: 227300, category: "racing", type: "مسابقه‌ای" },
    { name: "American Truck Simulator", id: 270880, category: "racing", type: "مسابقه‌ای" },
    { name: "CarX Drift Racing Online", id: 635260, category: "racing", type: "مسابقه‌ای" },

    /* ================= SPORTS ================= */

    { name: "eFootball", id: 1665460, category: "sports", type: "ورزشی" },
    { name: "TEKKEN 8", id: 1778820, category: "sports", type: "ورزشی" },
    { name: "TEKKEN 7", id: 389730, category: "sports", type: "ورزشی" },
    { name: "Street Fighter 6", id: 1364780, category: "sports", type: "ورزشی" },
    { name: "EA SPORTS FC 24", id: 2195250, category: "sports", type: "ورزشی" },
    { name: "EA SPORTS FC 25", id: 2669320, category: "sports", type: "ورزشی" },
    { name: "NBA 2K25", id: 2878980, category: "sports", type: "ورزشی" },
    { name: "WWE 2K24", id: 2315690, category: "sports", type: "ورزشی" },
    { name: "Rocket League", id: 252950, category: "sports", type: "ورزشی" },
    { name: "Trackmania", id: 2225070, category: "sports", type: "ورزشی" }

];


/* =========================================================
   DATA VALIDATION
   ========================================================= */

const uniqueNames = new Set(
    games.map(game => game.name.toLowerCase())
);

const uniqueIds = new Set(
    games.map(game => game.id)
);

if (games.length !== 200) {

    console.error(
        `ARTIN GAMES ERROR: Expected 200 games, but found ${games.length}.`
    );

}

if (uniqueNames.size !== games.length) {

    console.error(
        "ARTIN GAMES ERROR: Duplicate game names detected."
    );

}

if (uniqueIds.size !== games.length) {

    console.error(
        "ARTIN GAMES ERROR: Duplicate Steam App IDs detected."
    );

}


/* =========================================================
   SETTINGS
   ========================================================= */

const GAMES_PER_LOAD = 20;

let currentCategory = "all";
let currentSearch = "";
let visibleGames = GAMES_PER_LOAD;


/* =========================================================
   ELEMENTS
   ========================================================= */

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");
const gameCount = document.getElementById("gameCount");
const loadingBox = document.getElementById("loadingBox");
const noResults = document.getElementById("noResults");
const loadMoreButton = document.getElementById("loadMoreButton");
const filters = document.querySelectorAll(".filter");


/* =========================================================
   STEAM IMAGE
   ========================================================= */

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


/* =========================================================
   STEAM LINK
   ========================================================= */

function getSteamLink(id) {

    return `https://store.steampowered.com/app/${id}/`;

}


/* =========================================================
   FILTER
   ========================================================= */

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


/* =========================================================
   CREATE CARD
   ========================================================= */

function createGameCard(game) {

    const card = document.createElement("article");

    card.className = "game-card";

    card.innerHTML = `

        <div class="game-image">

            <img
                src="${getGameImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
                decoding="async"
                onerror="this.style.display='none';"
            >

        </div>

        <div class="game-info">

            <div class="game-category">
                ${game.type}
            </div>

            <div class="game-name">
                ${game.name}
            </div>

            <button
                class="view-game"
                type="button"
            >
                مشاهده بازی
            </button>

        </div>

    `;


    const button =
        card.querySelector(".view-game");


    button.addEventListener("click", () => {

        openGame(game);

    });


    return card;

}


/* =========================================================
   OPEN GAME
   ========================================================= */

function openGame(game) {

    const steamLink =
        getSteamLink(game.id);


    const message =

        `🎮 ${game.name}\n\n` +

        `دسته‌بندی: ${game.type}\n\n` +

        `برای مشاهده اطلاعات کامل و صفحه رسمی بازی، ` +
        `صفحه Steam آن را باز کنید.`;


    const shouldOpen =
        confirm(
            message +
            "\n\nباز کردن صفحه رسمی بازی؟"
        );


    if (shouldOpen) {

        window.open(
            steamLink,
            "_blank",
            "noopener,noreferrer"
        );

    }

}


/* =========================================================
   RENDER
   ========================================================= */

function renderGames(reset = true) {

    const filteredGames =
        getFilteredGames();


    if (reset) {

        visibleGames =
            GAMES_PER_LOAD;

        gamesGrid.innerHTML = "";

    }


    const gamesToShow =
        filteredGames.slice(
            0,
            visibleGames
        );


    gamesToShow.forEach(game => {

        gamesGrid.appendChild(
            createGameCard(game)
        );

    });


    if (filteredGames.length === 0) {

        noResults.style.display =
            "block";

        gamesGrid.style.display =
            "none";

    } else {

        noResults.style.display =
            "none";

        gamesGrid.style.display =
            "grid";

    }


    if (
        filteredGames.length >
        visibleGames
    ) {

        loadMoreButton.classList.remove(
            "hidden"
        );

    } else {

        loadMoreButton.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   LOAD MORE
   ========================================================= */

loadMoreButton.addEventListener(
    "click",
    () => {

        visibleGames +=
            GAMES_PER_LOAD;

        renderGames(false);

    }
);


/* =========================================================
   SEARCH
   ========================================================= */

gameSearch.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value.trim();

        renderGames(true);

    }
);


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            renderGames(true);

        }
    );

});


/* =========================================================
   INITIALIZE
   ========================================================= */

function initGamesPage() {

    if (gameCount) {

        gameCount.textContent =
            games.length;

    }


    if (loadingBox) {

        loadingBox.style.display =
            "none";

    }


    renderGames(true);


    console.log(
        `ARTIN GAMES: ${games.length} unique games loaded.`
    );

}


/* =========================================================
   START
   ========================================================= */

initGamesPage();
