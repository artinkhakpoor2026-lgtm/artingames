const games = [

    // ACTION
    {id:271590,name:"GTA V",category:"action"},
    {id:12210,name:"GTA IV",category:"action"},
    {id:12120,name:"GTA San Andreas",category:"action"},
    {id:12110,name:"GTA Vice City",category:"action"},
    {id:12100,name:"GTA III",category:"action"},
    {id:1174180,name:"Red Dead Redemption 2",category:"action"},
    {id:307690,name:"Sleeping Dogs",category:"action"},
    {id:243470,name:"Watch Dogs",category:"action"},
    {id:447040,name:"Watch Dogs 2",category:"action"},
    {id:2231380,name:"Watch Dogs Legion",category:"action"},
    {id:225540,name:"Just Cause 3",category:"action"},
    {id:517630,name:"Just Cause 4",category:"action"},
    {id:234140,name:"Mad Max",category:"action"},
    {id:208650,name:"Batman Arkham Knight",category:"action"},
    {id:200260,name:"Batman Arkham City",category:"action"},
    {id:35140,name:"Batman Arkham Asylum",category:"action"},
    {id:241930,name:"Shadow of Mordor",category:"action"},
    {id:356190,name:"Shadow of War",category:"action"},
    {id:33230,name:"Assassin's Creed II",category:"action"},
    {id:48190,name:"Assassin's Creed Brotherhood",category:"action"},
    {id:201870,name:"Assassin's Creed Revelations",category:"action"},
    {id:208480,name:"Assassin's Creed III",category:"action"},
    {id:242050,name:"Assassin's Creed IV Black Flag",category:"action"},
    {id:289650,name:"Assassin's Creed Unity",category:"action"},
    {id:582160,name:"Assassin's Creed Origins",category:"action"},
    {id:812140,name:"Assassin's Creed Odyssey",category:"action"},
    {id:2208920,name:"Assassin's Creed Valhalla",category:"action"},
    {id:220240,name:"Far Cry 3",category:"action"},
    {id:298110,name:"Far Cry 4",category:"action"},
    {id:552520,name:"Far Cry 5",category:"action"},
    {id:2369390,name:"Far Cry 6",category:"action"},
    {id:239140,name:"Dying Light",category:"action"},
    {id:534380,name:"Dying Light 2",category:"action"},
    {id:1259420,name:"Days Gone",category:"action"},
    {id:1151640,name:"Horizon Zero Dawn",category:"action"},
    {id:2420110,name:"Horizon Forbidden West",category:"action"},
    {id:1593500,name:"God of War",category:"action"},
    {id:2322010,name:"God of War Ragnarök",category:"action"},
    {id:1817070,name:"Spider-Man Remastered",category:"action"},
    {id:1817190,name:"Spider-Man Miles Morales",category:"action"},
    {id:2358720,name:"Black Myth Wukong",category:"action"},
    {id:1623730,name:"Palworld",category:"action"},
    {id:105600,name:"Terraria",category:"action"},
    {id:413150,name:"Stardew Valley",category:"action"},
    {id:892970,name:"Valheim",category:"action"},

    // RPG
    {id:1091500,name:"Cyberpunk 2077",category:"rpg"},
    {id:292030,name:"The Witcher 3",category:"rpg"},
    {id:20920,name:"The Witcher 2",category:"rpg"},
    {id:489830,name:"Skyrim",category:"rpg"},
    {id:377160,name:"Fallout 4",category:"rpg"},
    {id:22380,name:"Fallout New Vegas",category:"rpg"},
    {id:1245620,name:"Elden Ring",category:"rpg"},
    {id:1086940,name:"Baldur's Gate 3",category:"rpg"},
    {id:570940,name:"Dark Souls Remastered",category:"rpg"},
    {id:374320,name:"Dark Souls III",category:"rpg"},
    {id:814380,name:"Sekiro",category:"rpg"},
    {id:582010,name:"Monster Hunter World",category:"rpg"},
    {id:1446780,name:"Monster Hunter Rise",category:"rpg"},
    {id:2054970,name:"Dragon's Dogma 2",category:"rpg"},
    {id:1716740,name:"Starfield",category:"rpg"},
    {id:1328670,name:"Mass Effect Legendary Edition",category:"rpg"},
    {id:1222690,name:"Dragon Age Inquisition",category:"rpg"},
    {id:379430,name:"Kingdom Come Deliverance",category:"rpg"},
    {id:1771300,name:"Kingdom Come Deliverance II",category:"rpg"},
    {id:435150,name:"Divinity Original Sin 2",category:"rpg"},
    {id:1687950,name:"Persona 5 Royal",category:"rpg"},
    {id:1462040,name:"Final Fantasy VII Remake",category:"rpg"},
    {id:637650,name:"Final Fantasy XV",category:"rpg"},
    {id:740130,name:"Tales of Arise",category:"rpg"},
    {id:524220,name:"NieR Automata",category:"rpg"},
    {id:1113560,name:"NieR Replicant",category:"rpg"},
    {id:1235140,name:"Yakuza Like a Dragon",category:"rpg"},
    {id:2072450,name:"Like a Dragon Infinite Wealth",category:"rpg"},
    {id:238960,name:"Path of Exile",category:"rpg"},
    {id:2694490,name:"Path of Exile 2",category:"rpg"},

    // SHOOTER
    {id:730,name:"Counter-Strike 2",category:"shooter"},
    {id:240,name:"Counter-Strike Source",category:"shooter"},
    {id:10,name:"Counter-Strike 1.6",category:"shooter"},
    {id:7940,name:"Call of Duty 4 Modern Warfare",category:"shooter"},
    {id:10180,name:"Call of Duty Modern Warfare 2",category:"shooter"},
    {id:42700,name:"Call of Duty Black Ops",category:"shooter"},
    {id:202970,name:"Call of Duty Black Ops II",category:"shooter"},
    {id:209160,name:"Call of Duty Ghosts",category:"shooter"},
    {id:209650,name:"Call of Duty Advanced Warfare",category:"shooter"},
    {id:476600,name:"Call of Duty WWII",category:"shooter"},
    {id:311210,name:"Call of Duty Black Ops III",category:"shooter"},
    {id:393080,name:"Call of Duty MW Remastered",category:"shooter"},
    {id:2000950,name:"Call of Duty Modern Warfare",category:"shooter"},
    {id:379720,name:"DOOM",category:"shooter"},
    {id:782330,name:"DOOM Eternal",category:"shooter"},
    {id:201810,name:"Wolfenstein The New Order",category:"shooter"},
    {id:612880,name:"Wolfenstein II",category:"shooter"},
    {id:1237970,name:"Titanfall 2",category:"shooter"},
    {id:1238840,name:"Battlefield 1",category:"shooter"},
    {id:1238810,name:"Battlefield V",category:"shooter"},
    {id:1517290,name:"Battlefield 2042",category:"shooter"},
    {id:1238860,name:"Battlefield 4",category:"shooter"},
    {id:1238880,name:"Battlefield Hardline",category:"shooter"},
    {id:286690,name:"Metro 2033 Redux",category:"shooter"},
    {id:287390,name:"Metro Last Light Redux",category:"shooter"},
    {id:412020,name:"Metro Exodus",category:"shooter"},
    {id:1449560,name:"Metro Exodus Enhanced",category:"shooter"},
    {id:1085660,name:"Destiny 2",category:"shooter"},
    {id:230410,name:"Warframe",category:"shooter"},
    {id:1172470,name:"Apex Legends",category:"shooter"},
    {id:218620,name:"PAYDAY 2",category:"shooter"},
    {id:550,name:"Left 4 Dead 2",category:"shooter"},
    {id:220,name:"Half-Life 2",category:"shooter"},
    {id:380,name:"Half-Life 2 Episode One",category:"shooter"},
    {id:420,name:"Half-Life 2 Episode Two",category:"shooter"},
    {id:620,name:"Portal 2",category:"shooter"},
    {id:49520,name:"Borderlands 2",category:"shooter"},
    {id:397540,name:"Borderlands 3",category:"shooter"},
    {id:19900,name:"Far Cry 2",category:"shooter"},
    {id:17300,name:"Crysis",category:"shooter"},
    {id:108800,name:"Crysis 2",category:"shooter"},
    {id:2096610,name:"Crysis 3 Remastered",category:"shooter"},
    {id:9050,name:"DOOM 3",category:"shooter"},
    {id:9200,name:"RAGE",category:"shooter"},
    {id:2310,name:"Quake",category:"shooter"},

    // HORROR
    {id:883710,name:"Resident Evil 2",category:"horror"},
    {id:952060,name:"Resident Evil 3",category:"horror"},
    {id:2050650,name:"Resident Evil 4",category:"horror"},
    {id:418370,name:"Resident Evil 7",category:"horror"},
    {id:1196590,name:"Resident Evil Village",category:"horror"},
    {id:21690,name:"Resident Evil 5",category:"horror"},
    {id:221040,name:"Resident Evil 6",category:"horror"},
    {id:222480,name:"Resident Evil Revelations",category:"horror"},
    {id:287290,name:"Resident Evil Revelations 2",category:"horror"},
    {id:238320,name:"Outlast",category:"horror"},
    {id:414700,name:"Outlast 2",category:"horror"},
    {id:57300,name:"Amnesia The Dark Descent",category:"horror"},
    {id:999220,name:"Amnesia Rebirth",category:"horror"},
    {id:282140,name:"SOMA",category:"horror"},
    {id:214490,name:"Alien Isolation",category:"horror"},
    {id:268050,name:"The Evil Within",category:"horror"},
    {id:601430,name:"The Evil Within 2",category:"horror"},
    {id:424840,name:"Little Nightmares",category:"horror"},
    {id:860510,name:"Little Nightmares II",category:"horror"},
    {id:739630,name:"Phasmophobia",category:"horror"},
    {id:381210,name:"Dead by Daylight",category:"horror"},
    {id:242760,name:"The Forest",category:"horror"},
    {id:1326470,name:"Sons of the Forest",category:"horror"},
    {id:1693980,name:"Dead Space",category:"horror"},
    {id:47780,name:"Dead Space 2",category:"horror"},
    {id:1238060,name:"Dead Space 3",category:"horror"},
    {id:108710,name:"Alan Wake",category:"horror"},
    {id:1088850,name:"Alan Wake 2",category:"horror"},
    {id:594330,name:"Visage",category:"horror"},
    {id:391720,name:"Layers of Fear",category:"horror"},

    // ADVENTURE
    {id:203160,name:"Tomb Raider",category:"adventure"},
    {id:391220,name:"Rise of the Tomb Raider",category:"adventure"},
    {id:750920,name:"Shadow of the Tomb Raider",category:"adventure"},
    {id:1659420,name:"Uncharted Legacy of Thieves",category:"adventure"},
    {id:1190460,name:"Death Stranding",category:"adventure"},
    {id:1850570,name:"Death Stranding Director's Cut",category:"adventure"},
    {id:1332010,name:"Stray",category:"adventure"},
    {id:1888930,name:"The Last of Us Part I",category:"adventure"},
    {id:1222140,name:"Detroit Become Human",category:"adventure"},
    {id:960910,name:"Heavy Rain",category:"adventure"},
    {id:960990,name:"Beyond Two Souls",category:"adventure"},
    {id:319630,name:"Life is Strange",category:"adventure"},
    {id:532210,name:"Life is Strange 2",category:"adventure"},
    {id:936790,name:"Life is Strange True Colors",category:"adventure"},
    {id:383870,name:"Firewatch",category:"adventure"},
    {id:501300,name:"What Remains of Edith Finch",category:"adventure"},
    {id:207610,name:"The Walking Dead",category:"adventure"},
    {id:261030,name:"The Walking Dead Season Two",category:"adventure"},
    {id:209000,name:"Batman Arkham Origins",category:"adventure"},
    {id:870780,name:"Control",category:"adventure"},
    {id:474960,name:"Quantum Break",category:"adventure"},
    {id:202750,name:"Alan Wake American Nightmare",category:"adventure"},
    {id:1703340,name:"The Stanley Parable Ultra Deluxe",category:"adventure"},
    {id:304430,name:"Inside",category:"adventure"},
    {id:48000,name:"Limbo",category:"adventure"},
    {id:261570,name:"Ori and the Blind Forest",category:"adventure"},
    {id:1057090,name:"Ori and the Will of the Wisps",category:"adventure"},
    {id:367520,name:"Hollow Knight",category:"adventure"},
    {id:264710,name:"Subnautica",category:"adventure"},
    {id:1145360,name:"Hades",category:"adventure"},

    // RACING
    {id:1293830,name:"Forza Horizon 4",category:"racing"},
    {id:1551360,name:"Forza Horizon 5",category:"racing"},
    {id:1222680,name:"Need for Speed Heat",category:"racing"},
    {id:1846380,name:"Need for Speed Unbound",category:"racing"},
    {id:1262580,name:"Need for Speed Payback",category:"racing"},
    {id:690790,name:"DiRT Rally 2.0",category:"racing"},
    {id:244210,name:"Assetto Corsa",category:"racing"},
    {id:227300,name:"Euro Truck Simulator 2",category:"racing"},
    {id:270880,name:"American Truck Simulator",category:"racing"},
    {id:635260,name:"CarX Drift Racing Online",category:"racing"},

    // SPORTS
    {id:1665460,name:"eFootball",category:"sports"},
    {id:1778820,name:"TEKKEN 8",category:"sports"},
    {id:389730,name:"TEKKEN 7",category:"sports"},
    {id:1364780,name:"Street Fighter 6",category:"sports"},
    {id:2195250,name:"EA FC 24",category:"sports"},
    {id:2669320,name:"EA FC 25",category:"sports"},
    {id:2878980,name:"NBA 2K25",category:"sports"},
    {id:2315690,name:"WWE 2K24",category:"sports"},
    {id:252950,name:"Rocket League",category:"sports"},
    {id:2225070,name:"Trackmania",category:"sports"}
];


const categoryNames = {
    action: "اکشن",
    rpg: "RPG",
    shooter: "شوتر",
    horror: "ترسناک",
    adventure: "ماجراجویی",
    racing: "مسابقه‌ای",
    sports: "ورزشی"
};


/* =========================
   GAME HELPERS
========================= */

function getGameById(id) {
    return games.find(game => String(game.id) === String(id));
}


function getSteamImage(id) {
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`;
}


function getSteamLink(id) {
    return `https://store.steampowered.com/app/${id}/`;
}


/* =========================
   GAMES PAGE
========================= */

let filteredGames = [...games];
let visibleGames = 20;


function createGameCard(game) {

    return `
        <div class="game-card">

            <img
                class="game-image"
                src="${getSteamImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/600x900/15151d/ffffff?text=ARTIN+GAMES'"
            >

            <div class="game-info">

                <h3>${game.name}</h3>

                <div class="category">
                    ${categoryNames[game.category] || game.category}
                </div>

                <a
                    class="view-button"
                    href="game.html?id=${encodeURIComponent(game.id)}"
                >
                    مشاهده بازی
                </a>

            </div>

        </div>
    `;
}


function renderGames() {

    const grid = document.getElementById("gamesGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const gamesToShow = filteredGames.slice(0, visibleGames);

    gamesToShow.forEach(game => {
        grid.insertAdjacentHTML(
            "beforeend",
            createGameCard(game)
        );
    });

    updateCount();

    const loadMore = document.getElementById("loadMore");

    if (loadMore) {
        loadMore.style.display =
            visibleGames < filteredGames.length
                ? "block"
                : "none";
    }

    if (filteredGames.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                <h2>بازی پیدا نشد</h2>
                <p>بازی موردنظر پیدا نشد.</p>
            </div>
        `;
    }
}


function updateCount() {

    const count = document.getElementById("count");

    if (!count) return;

    count.textContent =
        `نمایش ${Math.min(visibleGames, filteredGames.length)} بازی از ${filteredGames.length} بازی`;
}


function loadMoreGames() {

    visibleGames += 20;

    renderGames();
}


function filterGames() {

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const search =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";


    filteredGames = games.filter(game => {

        const matchesSearch =
            game.name.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" ||
            game.category === category;

        return matchesSearch && matchesCategory;
    });


    visibleGames = 20;

    renderGames();
}


/* =========================
   GAME DETAILS PAGE
========================= */

function renderGameDetails() {

    const container =
        document.getElementById("gameDetails");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("id");


    const game =
        getGameById(id);


    if (!game) {

        container.innerHTML = `
            <div class="not-found">

                <h2>🎮 بازی پیدا نشد</h2>

                <p>
                    بازی موردنظر در کتابخانه ARTIN GAMES وجود ندارد.
                </p>

                <div class="buttons">
                    <a class="button back" href="games.html">
                        بازگشت به بازی‌ها
                    </a>
                </div>

            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="game-details">

            <img
                class="game-cover"
                src="${getSteamImage(game.id)}"
                alt="${game.name}"
                onerror="this.src='https://placehold.co/1200x500/15151d/ffffff?text=ARTIN+GAMES'"
            >

            <div class="content">

                <h2>${game.name}</h2>

                <div class="category">
                    دسته‌بندی:
                    ${categoryNames[game.category] || game.category}
                </div>

                <p class="description">
                    ${game.name} یکی از بازی‌های موجود در کتابخانه
                    ARTIN GAMES است. برای مشاهده اطلاعات بیشتر و
                    صفحه رسمی بازی می‌توانید از لینک زیر استفاده کنید.
                </p>

                <div class="buttons">

                    <a
                        class="button"
                        href="${getSteamLink(game.id)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        مشاهده در Steam
                    </a>

                    <a
                        class="button back"
                        href="games.html"
                    >
                        بازگشت به بازی‌ها
                    </a>

                </div>

            </div>

        </div>
    `;
}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const gamesGrid =
        document.getElementById("gamesGrid");

    const gameDetails =
        document.getElementById("gameDetails");


    // Games page
    if (gamesGrid) {

        renderGames();


        const loadMore =
            document.getElementById("loadMore");

        if (loadMore) {
            loadMore.addEventListener(
                "click",
                loadMoreGames
            );
        }


        const searchInput =
            document.getElementById("searchInput");

        if (searchInput) {
            searchInput.addEventListener(
                "input",
                filterGames
            );
        }


        const categoryFilter =
            document.getElementById("categoryFilter");

        if (categoryFilter) {
            categoryFilter.addEventListener(
                "change",
                filterGames
            );
        }
    }


    // Game details page
    if (gameDetails) {
        renderGameDetails();
    }

});
