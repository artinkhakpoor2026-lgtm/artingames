"use strict";

/* =========================================================
   ARTIN GAMES
   MAIN SCRIPT
   ========================================================= */


/* =========================================================
   CATEGORY NAMES
   ========================================================= */

const categoryNames = {

    action: "اکشن",
    shooter: "شوتر",
    rpg: "نقش‌آفرینی",
    horror: "ترسناک",
    adventure: "ماجراجویی",
    racing: "مسابقه‌ای",
    sports: "ورزشی"

};


/* =========================================================
   GAMES DATABASE
   EXACTLY 200 GAMES
   ========================================================= */

const games = [

    /* ================= ACTION 1-45 ================= */

    {id:271590,name:"Grand Theft Auto V",category:"action",year:2015},
    {id:12210,name:"Grand Theft Auto IV",category:"action",year:2008},
    {id:12120,name:"Grand Theft Auto: San Andreas",category:"action",year:2005},
    {id:12110,name:"Grand Theft Auto: Vice City",category:"action",year:2003},
    {id:12100,name:"Grand Theft Auto III",category:"action",year:2002},
    {id:1174180,name:"Red Dead Redemption 2",category:"action",year:2019},
    {id:307690,name:"Sleeping Dogs: Definitive Edition",category:"action",year:2014},
    {id:243470,name:"Watch Dogs",category:"action",year:2014},
    {id:447040,name:"Watch Dogs 2",category:"action",year:2016},
    {id:2231380,name:"Watch Dogs: Legion",category:"action",year:2020},
    {id:225540,name:"Just Cause 3",category:"action",year:2015},
    {id:517630,name:"Just Cause 4",category:"action",year:2018},
    {id:234140,name:"Mad Max",category:"action",year:2015},
    {id:208650,name:"Batman: Arkham Knight",category:"action",year:2015},
    {id:200260,name:"Batman: Arkham City",category:"action",year:2011},
    {id:35140,name:"Batman: Arkham Asylum",category:"action",year:2009},
    {id:241930,name:"Middle-earth: Shadow of Mordor",category:"action",year:2014},
    {id:356190,name:"Middle-earth: Shadow of War",category:"action",year:2017},
    {id:33230,name:"Assassin's Creed II",category:"action",year:2010},
    {id:48190,name:"Assassin's Creed Brotherhood",category:"action",year:2011},
    {id:201870,name:"Assassin's Creed Revelations",category:"action",year:2011},
    {id:208480,name:"Assassin's Creed III",category:"action",year:2012},
    {id:242050,name:"Assassin's Creed IV Black Flag",category:"action",year:2013},
    {id:289650,name:"Assassin's Creed Unity",category:"action",year:2014},
    {id:582160,name:"Assassin's Creed Origins",category:"action",year:2017},
    {id:812140,name:"Assassin's Creed Odyssey",category:"action",year:2018},
    {id:2208920,name:"Assassin's Creed Valhalla",category:"action",year:2020},
    {id:220240,name:"Far Cry 3",category:"action",year:2012},
    {id:298110,name:"Far Cry 4",category:"action",year:2014},
    {id:552520,name:"Far Cry 5",category:"action",year:2018},
    {id:2369390,name:"Far Cry 6",category:"action",year:2021},
    {id:239140,name:"Dying Light",category:"action",year:2015},
    {id:534380,name:"Dying Light 2 Stay Human",category:"action",year:2022},
    {id:1259420,name:"Days Gone",category:"action",year:2019},
    {id:1151640,name:"Horizon Zero Dawn",category:"action",year:2020},
    {id:2420110,name:"Horizon Forbidden West",category:"action",year:2024},
    {id:1593500,name:"God of War",category:"action",year:2018},
    {id:2322010,name:"God of War Ragnarök",category:"action",year:2024},
    {id:1817070,name:"Marvel's Spider-Man Remastered",category:"action",year:2022},
    {id:1817190,name:"Marvel's Spider-Man: Miles Morales",category:"action",year:2022},
    {id:2358720,name:"Black Myth: Wukong",category:"action",year:2024},
    {id:1623730,name:"Palworld",category:"action",year:2024},
    {id:105600,name:"Terraria",category:"action",year:2011},
    {id:413150,name:"Stardew Valley",category:"action",year:2016},
    {id:892970,name:"Valheim",category:"action",year:2021},


    /* ================= RPG 46-75 ================= */

    {id:1091500,name:"Cyberpunk 2077",category:"rpg",year:2020},
    {id:292030,name:"The Witcher 3: Wild Hunt",category:"rpg",year:2015},
    {id:20920,name:"The Witcher 2: Assassins of Kings",category:"rpg",year:2011},
    {id:489830,name:"The Elder Scrolls V: Skyrim",category:"rpg",year:2011},
    {id:377160,name:"Fallout 4",category:"rpg",year:2015},
    {id:22380,name:"Fallout: New Vegas",category:"rpg",year:2010},
    {id:1245620,name:"Elden Ring",category:"rpg",year:2022},
    {id:1086940,name:"Baldur's Gate 3",category:"rpg",year:2023},
    {id:570940,name:"Dark Souls Remastered",category:"rpg",year:2018},
    {id:374320,name:"Dark Souls III",category:"rpg",year:2016},
    {id:814380,name:"Sekiro: Shadows Die Twice",category:"rpg",year:2019},
    {id:582010,name:"Monster Hunter: World",category:"rpg",year:2018},
    {id:1446780,name:"Monster Hunter Rise",category:"rpg",year:2022},
    {id:2054970,name:"Dragon's Dogma 2",category:"rpg",year:2024},
    {id:1716740,name:"Starfield",category:"rpg",year:2023},
    {id:1328670,name:"Mass Effect Legendary Edition",category:"rpg",year:2021},
    {id:1222690,name:"Dragon Age: Inquisition",category:"rpg",year:2014},
    {id:379430,name:"Kingdom Come: Deliverance",category:"rpg",year:2018},
    {id:1771300,name:"Kingdom Come: Deliverance II",category:"rpg",year:2025},
    {id:435150,name:"Divinity: Original Sin 2",category:"rpg",year:2017},
    {id:1687950,name:"Persona 5 Royal",category:"rpg",year:2022},
    {id:1462040,name:"Final Fantasy VII Remake Intergrade",category:"rpg",year:2021},
    {id:637650,name:"Final Fantasy XV Windows Edition",category:"rpg",year:2018},
    {id:740130,name:"Tales of Arise",category:"rpg",year:2021},
    {id:524220,name:"NieR:Automata",category:"rpg",year:2017},
    {id:1113560,name:"NieR Replicant ver.1.22474487139...",category:"rpg",year:2021},
    {id:1235140,name:"Yakuza: Like a Dragon",category:"rpg",year:2020},
    {id:2072450,name:"Like a Dragon: Infinite Wealth",category:"rpg",year:2024},
    {id:238960,name:"Path of Exile",category:"rpg",year:2013},
    {id:2694490,name:"Path of Exile 2",category:"rpg",year:2024},


    /* ================= SHOOTER 76-120 ================= */

    {id:730,name:"Counter-Strike 2",category:"shooter",year:2023},
    {id:240,name:"Counter-Strike: Source",category:"shooter",year:2004},
    {id:10,name:"Counter-Strike 1.6",category:"shooter",year:2000},
    {id:7940,name:"Call of Duty 4: Modern Warfare",category:"shooter",year:2007},
    {id:10180,name:"Call of Duty: Modern Warfare 2",category:"shooter",year:2009},
    {id:42700,name:"Call of Duty: Black Ops",category:"shooter",year:2010},
    {id:202970,name:"Call of Duty: Black Ops II",category:"shooter",year:2012},
    {id:209160,name:"Call of Duty: Ghosts",category:"shooter",year:2013},
    {id:209650,name:"Call of Duty: Advanced Warfare",category:"shooter",year:2014},
    {id:476600,name:"Call of Duty: WWII",category:"shooter",year:2017},
    {id:311210,name:"Call of Duty: Black Ops III",category:"shooter",year:2015},
    {id:393080,name:"Call of Duty: Modern Warfare Remastered",category:"shooter",year:2017},
    {id:2000950,name:"Call of Duty: Modern Warfare",category:"shooter",year:2019},
    {id:379720,name:"DOOM",category:"shooter",year:2016},
    {id:782330,name:"DOOM Eternal",category:"shooter",year:2020},
    {id:201810,name:"Wolfenstein: The New Order",category:"shooter",year:2014},
    {id:612880,name:"Wolfenstein II: The New Colossus",category:"shooter",year:2017},
    {id:1237970,name:"Titanfall 2",category:"shooter",year:2016},
    {id:1238840,name:"Battlefield 1",category:"shooter",year:2016},
    {id:1238810,name:"Battlefield V",category:"shooter",year:2018},
    {id:1517290,name:"Battlefield 2042",category:"shooter",year:2021},
    {id:1238860,name:"Battlefield 4",category:"shooter",year:2013},
    {id:1238880,name:"Battlefield Hardline",category:"shooter",year:2015},
    {id:286690,name:"Metro 2033 Redux",category:"shooter",year:2014},
    {id:287390,name:"Metro: Last Light Redux",category:"shooter",year:2014},
    {id:412020,name:"Metro Exodus",category:"shooter",year:2019},
    {id:1449560,name:"Metro Exodus Enhanced Edition",category:"shooter",year:2021},
    {id:1085660,name:"Destiny 2",category:"shooter",year:2017},
    {id:230410,name:"Warframe",category:"shooter",year:2013},
    {id:1172470,name:"Apex Legends",category:"shooter",year:2019},
    {id:218620,name:"PAYDAY 2",category:"shooter",year:2013},
    {id:550,name:"Left 4 Dead 2",category:"shooter",year:2009},
    {id:220,name:"Half-Life 2",category:"shooter",year:2004},
    {id:380,name:"Half-Life 2: Episode One",category:"shooter",year:2006},
    {id:420,name:"Half-Life 2: Episode Two",category:"shooter",year:2007},
    {id:620,name:"Portal 2",category:"shooter",year:2011},
    {id:49520,name:"Borderlands 2",category:"shooter",year:2012},
    {id:397540,name:"Borderlands 3",category:"shooter",year:2019},
    {id:19900,name:"Far Cry 2",category:"shooter",year:2008},
    {id:17300,name:"Crysis",category:"shooter",year:2007},
    {id:108800,name:"Crysis 2",category:"shooter",year:2011},
    {id:2096610,name:"Crysis 3 Remastered",category:"shooter",year:2021},
    {id:9050,name:"DOOM 3",category:"shooter",year:2004},
    {id:9200,name:"RAGE",category:"shooter",year:2011},
    {id:2310,name:"Quake",category:"shooter",year:1996},


    /* ================= HORROR 121-150 ================= */

    {id:883710,name:"Resident Evil 2",category:"horror",year:2019},
    {id:952060,name:"Resident Evil 3",category:"horror",year:2020},
    {id:2050650,name:"Resident Evil 4",category:"horror",year:2023},
    {id:418370,name:"Resident Evil 7 Biohazard",category:"horror",year:2017},
    {id:1196590,name:"Resident Evil Village",category:"horror",year:2021},
    {id:21690,name:"Resident Evil 5",category:"horror",year:2009},
    {id:221040,name:"Resident Evil 6",category:"horror",year:2013},
    {id:222480,name:"Resident Evil Revelations",category:"horror",year:2013},
    {id:287290,name:"Resident Evil Revelations 2",category:"horror",year:2015},
    {id:238320,name:"Outlast",category:"horror",year:2013},
    {id:414700,name:"Outlast 2",category:"horror",year:2017},
    {id:57300,name:"Amnesia: The Dark Descent",category:"horror",year:2010},
    {id:999220,name:"Amnesia: Rebirth",category:"horror",year:2020},
    {id:282140,name:"SOMA",category:"horror",year:2015},
    {id:214490,name:"Alien: Isolation",category:"horror",year:2014},
    {id:268050,name:"The Evil Within",category:"horror",year:2014},
    {id:601430,name:"The Evil Within 2",category:"horror",year:2017},
    {id:424840,name:"Little Nightmares",category:"horror",year:2017},
    {id:860510,name:"Little Nightmares II",category:"horror",year:2021},
    {id:739630,name:"Phasmophobia",category:"horror",year:2020},
    {id:381210,name:"Dead by Daylight",category:"horror",year:2016},
    {id:242760,name:"The Forest",category:"horror",year:2018},
    {id:1326470,name:"Sons of the Forest",category:"horror",year:2024},
    {id:1693980,name:"Dead Space",category:"horror",year:2023},
    {id:47780,name:"Dead Space 2",category:"horror",year:2011},
    {id:1238060,name:"Dead Space 3",category:"horror",year:2013},
    {id:108710,name:"Alan Wake",category:"horror",year:2012},
    {id:1088850,name:"Alan Wake 2",category:"horror",year:2023},
    {id:594330,name:"Visage",category:"horror",year:2020},
    {id:391720,name:"Layers of Fear",category:"horror",year:2016},


    /* ================= ADVENTURE 151-180 ================= */

    {id:203160,name:"Tomb Raider",category:"adventure",year:2013},
    {id:391220,name:"Rise of the Tomb Raider",category:"adventure",year:2016},
    {id:750920,name:"Shadow of the Tomb Raider",category:"adventure",year:2018},
    {id:1659420,name:"Uncharted: Legacy of Thieves Collection",category:"adventure",year:2022},
    {id:1190460,name:"Death Stranding",category:"adventure",year:2020},
    {id:1850570,name:"Death Stranding Director's Cut",category:"adventure",year:2022},
    {id:1332010,name:"Stray",category:"adventure",year:2022},
    {id:1888930,name:"The Last of Us Part I",category:"adventure",year:2023},
    {id:1222140,name:"Detroit: Become Human",category:"adventure",year:2019},
    {id:960910,name:"Heavy Rain",category:"adventure",year:2019},
    {id:960990,name:"Beyond: Two Souls",category:"adventure",year:2019},
    {id:319630,name:"Life is Strange",category:"adventure",year:2015},
    {id:532210,name:"Life is Strange 2",category:"adventure",year:2018},
    {id:936790,name:"Life is Strange: True Colors",category:"adventure",year:2021},
    {id:383870,name:"Firewatch",category:"adventure",year:2016},
    {id:501300,name:"What Remains of Edith Finch",category:"adventure",year:2017},
    {id:207610,name:"The Walking Dead",category:"adventure",year:2012},
    {id:261030,name:"The Walking Dead: Season Two",category:"adventure",year:2013},
    {id:209000,name:"Batman: Arkham Origins",category:"adventure",year:2013},
    {id:870780,name:"Control",category:"adventure",year:2019},
    {id:474960,name:"Quantum Break",category:"adventure",year:2016},
    {id:202750,name:"Alan Wake's American Nightmare",category:"adventure",year:2012},
    {id:1703340,name:"The Stanley Parable: Ultra Deluxe",category:"adventure",year:2022},
    {id:304430,name:"Inside",category:"adventure",year:2016},
    {id:48000,name:"Limbo",category:"adventure",year:2010},
    {id:261570,name:"Ori and the Blind Forest",category:"adventure",year:2015},
    {id:1057090,name:"Ori and the Will of the Wisps",category:"adventure",year:2020},
    {id:367520,name:"Hollow Knight",category:"adventure",year:2017},
    {id:264710,name:"Subnautica",category:"adventure",year:2018},
    {id:1145360,name:"Hades",category:"adventure",year:2020},


    /* ================= RACING 181-190 ================= */

    {id:1293830,name:"Forza Horizon 4",category:"racing",year:2018},
    {id:1551360,name:"Forza Horizon 5",category:"racing",year:2021},
    {id:1222680,name:"Need for Speed Heat",category:"racing",year:2019},
    {id:1846380,name:"Need for Speed Unbound",category:"racing",year:2022},
    {id:1262580,name:"Need for Speed Payback",category:"racing",year:2017},
    {id:690790,name:"Dirt Rally 2.0",category:"racing",year:2019},
    {id:244210,name:"Assetto Corsa",category:"racing",year:2014},
    {id:227300,name:"Euro Truck Simulator 2",category:"racing",year:2012},
    {id:270880,name:"American Truck Simulator",category:"racing",year:2016},
    {id:635260,name:"CarX Drift Racing Online",category:"racing",year:2017},


    /* ================= SPORTS 191-200 ================= */

    {id:1665460,name:"eFootball",category:"sports",year:2021},
    {id:1778820,name:"TEKKEN 8",category:"sports",year:2024},
    {id:389730,name:"TEKKEN 7",category:"sports",year:2017},
    {id:1364780,name:"Street Fighter 6",category:"sports",year:2023},
    {id:2195250,name:"EA SPORTS FC 24",category:"sports",year:2023},
    {id:2669320,name:"EA SPORTS FC 25",category:"sports",year:2024},
    {id:2878980,name:"NBA 2K25",category:"sports",year:2024},
    {id:2315690,name:"WWE 2K24",category:"sports",year:2024},
    {id:252950,name:"Rocket League",category:"sports",year:2015},
    {id:2225070,name:"Trackmania",category:"sports",year:2020}

];


/* =========================================================
   SAFETY CHECK
   ========================================================= */

console.log("ARTIN GAMES - Total games:", games.length);


/*
   اگر تعداد بازی‌ها اشتباه باشد،
   در Console مرورگر مشخص می‌شود.
*/

if (games.length !== 200) {

    console.error(
        "ARTIN GAMES ERROR: تعداد بازی‌ها باید 200 باشد اما:",
        games.length
    );

}


/*
   بررسی ID های تکراری
*/

const gameIds = games.map(game => game.id);

const duplicateIds = gameIds.filter(
    (id, index) =>
        gameIds.indexOf(id) !== index
);


if (duplicateIds.length > 0) {

    console.error(
        "ARTIN GAMES ERROR: ID تکراری:",
        duplicateIds
    );

}


/* =========================================================
   HELPERS
   ========================================================= */

function getGameById(id) {

    return games.find(
        game => String(game.id) === String(id)
    );

}


function getCategoryName(category) {

    return categoryNames[category] || "بازی";

}


function getSteamLink(id) {

    return `https://store.steampowered.com/app/${id}/`;

}


function getGameImage(id) {

    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`;

}


/* =========================================================
   DESCRIPTION
   ========================================================= */

function getDescription(game) {

    const descriptions = {

        action:
            "یک بازی اکشن با تمرکز بر مبارزه، مأموریت، اکتشاف و پیشرفت در دنیای بازی.",

        shooter:
            "یک بازی شوتر با تمرکز بر مبارزات، سلاح‌ها، مأموریت‌های مختلف و گیم‌پلی سریع.",

        rpg:
            "یک بازی نقش‌آفرینی با تمرکز بر داستان، شخصیت‌ها، اکتشاف و پیشرفت بازیکن.",

        horror:
            "یک بازی ترسناک و دلهره‌آور که با محیط، صدا و اتفاقات مختلف فضای خاصی ایجاد می‌کند.",

        adventure:
            "یک بازی ماجراجویی با تمرکز بر داستان، اکتشاف محیط و اتفاقات مختلف.",

        racing:
            "یک بازی مسابقه‌ای که در آن بازیکن می‌تواند با وسایل نقلیه مختلف در مسابقات متنوع رقابت کند.",

        sports:
            "یک بازی ورزشی و رقابتی که بازیکن می‌تواند در مسابقات و حالت‌های مختلف بازی کند."

    };

    return descriptions[game.category] ||
        "اطلاعات این بازی در کتابخانه ARTIN GAMES قرار دارد.";

}


/* =========================================================
   SYSTEM REQUIREMENTS
   ========================================================= */

function getRequirements(game) {

    /*
       فعلاً اطلاعات پایه نمایش داده می‌شود.
       ساختار آماده است تا بعداً برای هر بازی
       مشخصات واقعی جداگانه قرار دهیم.
    */

    if (game.year >= 2020) {

        return {

            minimum: {

                os: "Windows 10 64-bit",
                cpu: "Intel Core i5 / AMD Ryzen 5",
                ram: "8 GB RAM",
                gpu: "NVIDIA GTX 1060 / AMD RX 580",
                directx: "DirectX 12",
                storage: "حداقل 70 GB"

            },

            recommended: {

                os: "Windows 10 / 11 64-bit",
                cpu: "Intel Core i7 / AMD Ryzen 7",
                ram: "16 GB RAM",
                gpu: "NVIDIA RTX 2060 / AMD RX 5700",
                directx: "DirectX 12",
                storage: "حدود 100 GB"

            }

        };

    }


    return {

        minimum: {

            os: "Windows 7 / 8 / 10 64-bit",
            cpu: "Intel Core i3 / AMD equivalent",
            ram: "4 GB RAM",
            gpu: "NVIDIA GTX 660 / AMD Radeon HD 7870",
            directx: "DirectX 11",
            storage: "حداقل 30 GB"

        },

        recommended: {

            os: "Windows 10 64-bit",
            cpu: "Intel Core i5 / AMD Ryzen 5",
            ram: "8 GB RAM",
            gpu: "NVIDIA GTX 1060 / AMD RX 580",
            directx: "DirectX 11",
            storage: "حدود 50 GB"

        }

    };

}


/* =========================================================
   GAMES PAGE VARIABLES
   ========================================================= */

let filteredGames = [...games];

let visibleGames = 0;

const GAMES_PER_LOAD = 20;


/* =========================================================
   CREATE GAME CARD
   ========================================================= */

function createGameCard(game) {

    const card = document.createElement("article");

    card.className = "game-card";

    card.dataset.id = game.id;

    card.innerHTML = `

        <div class="game-card-image">

            <img
                src="${getGameImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
            >

            <span class="game-card-category">
                ${getCategoryName(game.category)}
            </span>

        </div>


        <div class="game-card-content">

            <h3>
                ${game.name}
            </h3>


            <div class="game-card-info">

                <span>
                    ${game.year}
                </span>

                <span>
                    ${getCategoryName(game.category)}
                </span>

            </div>


            <button
                class="view-game-button"
                type="button"
            >
                مشاهده بازی
            </button>

        </div>

    `;


    const image =
        card.querySelector("img");


    image.addEventListener(
        "error",
        function () {

            this.src =
                "https://placehold.co/600x338/111111/ffffff?text=ARTIN+GAMES";

        },
        { once: true }
    );


    const button =
        card.querySelector(
            ".view-game-button"
        );


    button.addEventListener(
        "click",
        function () {

            window.location.href =
                `game.html?id=${game.id}`;

        }
    );


    return card;

}


/* =========================================================
   RENDER FIRST 20
   ========================================================= */

function renderGames() {

    const grid =
        document.getElementById(
            "gamesGrid"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    const loadMore =
        document.getElementById(
            "loadMoreButton"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";

    visibleGames = 0;


    const firstBatch =
        filteredGames.slice(
            0,
            GAMES_PER_LOAD
        );


    firstBatch.forEach(
        game => {

            grid.appendChild(
                createGameCard(game)
            );

        }
    );


    visibleGames =
        firstBatch.length;


    updateGameControls();

}


/* =========================================================
   LOAD MORE
   ========================================================= */

function loadMoreGames() {

    const grid =
        document.getElementById(
            "gamesGrid"
        );


    if (!grid) {
        return;
    }


    const start =
        visibleGames;


    const end =
        Math.min(
            start + GAMES_PER_LOAD,
            filteredGames.length
        );


    /*
       فقط بازی‌های جدید را اضافه می‌کنیم.
       بازی‌های قبلی دوباره render نمی‌شوند.
    */

    const newGames =
        filteredGames.slice(
            start,
            end
        );


    newGames.forEach(
        game => {

            grid.appendChild(
                createGameCard(game)
            );

        }
    );


    visibleGames = end;


    updateGameControls();

}


/* =========================================================
   CONTROLS
   ========================================================= */

function updateGameControls() {

    const noResults =
        document.getElementById(
            "noResults"
        );

    const loadMore =
        document.getElementById(
            "loadMoreButton"
        );


    if (noResults) {

        noResults.style.display =
            filteredGames.length === 0
                ? "block"
                : "none";

    }


    if (loadMore) {

        loadMore.style.display =
            visibleGames <
            filteredGames.length
                ? "inline-flex"
                : "none";

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchGames(text) {

    const search =
        text
            .trim()
            .toLowerCase();


    if (!search) {

        filteredGames =
            [...games];

    } else {

        filteredGames =
            games.filter(
                game =>
                    game.name
                        .toLowerCase()
                        .includes(search)
            );

    }


    renderGames();

}


/* =========================================================
   CATEGORY
   ========================================================= */

function filterGames(category) {

    if (category === "all") {

        filteredGames =
            [...games];

    } else {

        filteredGames =
            games.filter(
                game =>
                    game.category === category
            );

    }


    renderGames();

}


/* =========================================================
   INITIALIZE GAMES PAGE
   ========================================================= */

function initGamesPage() {

    const grid =
        document.getElementById(
            "gamesGrid"
        );


    if (!grid) {
        return;
    }


    const loading =
        document.getElementById(
            "loadingBox"
        );


    const count =
        document.getElementById(
            "gameCount"
        );


    const search =
        document.getElementById(
            "gameSearch"
        );


    const loadMore =
        document.getElementById(
            "loadMoreButton"
        );


    const filters =
        document.querySelectorAll(
            ".filter"
        );


    if (loading) {

        loading.style.display =
            "none";

    }


    if (count) {

        count.textContent =
            games.length;

    }


    renderGames();


    if (search) {

        search.addEventListener(
            "input",
            function () {

                searchGames(
                    this.value
                );

            }
        );

    }


    filters.forEach(
        filter => {

            filter.addEventListener(
                "click",
                function () {

                    filters.forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                    this.classList.add(
                        "active"
                    );


                    filterGames(
                        this.dataset.category
                    );

                }
            );

        }
    );


    if (loadMore) {

        loadMore.addEventListener(
            "click",
            loadMoreGames
        );

    }

}


/* =========================================================
   GAME DETAILS
   ========================================================= */

function initGameDetails() {

    const container =
        document.getElementById(
            "gameDetails"
        );


    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    if (!id) {

        showGameNotFound(
            container
        );

        return;

    }


    const game =
        getGameById(id);


    if (!game) {

        showGameNotFound(
            container
        );

        return;

    }


    renderGameDetails(
        container,
        game
    );

}


/* =========================================================
   RENDER DETAILS
   ========================================================= */

function renderGameDetails(
    container,
    game
) {

    const requirements =
        getRequirements(game);


    container.innerHTML = `

        <div class="game-details-container">


            <div class="game-details-top">


                <div class="game-details-cover">

                    <img
                        id="gameDetailImage"
                        src="${getGameImage(game.id)}"
                        alt="${game.name}"
                    >

                </div>


                <div class="game-details-main">


                    <span class="game-details-category">

                        ${getCategoryName(game.category)}

                    </span>


                    <h1>

                        ${game.name}

                    </h1>


                    <p class="game-details-description">

                        ${getDescription(game)}

                    </p>


                    <div class="game-meta">


                        <div class="meta-item">

                            <strong>
                                سال انتشار
                            </strong>

                            <span>
                                ${game.year}
                            </span>

                        </div>


                        <div class="meta-item">

                            <strong>
                                دسته‌بندی
                            </strong>

                            <span>
                                ${getCategoryName(game.category)}
                            </span>

                        </div>


                        <div class="meta-item">

                            <strong>
                                پلتفرم
                            </strong>

                            <span>
                                PC
                            </span>

                        </div>


                        <div class="meta-item">

                            <strong>
                                سیستم‌عامل
                            </strong>

                            <span>
                                Windows
                            </span>

                        </div>


                    </div>


                    <div class="game-details-actions">


                        <a
                            href="${getSteamLink(game.id)}"
                            class="download-game-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            دانلود / خرید از Steam

                        </a>


                        <a
                            href="games.html"
                            class="back-games-button"
                        >

                            ← بازگشت به بازی‌ها

                        </a>


                    </div>


                </div>


            </div>


            <section class="requirements-section">


                <div class="section-title">

                    <span>
                        SYSTEM REQUIREMENTS
                    </span>

                    <h2>
                        سیستم مورد نیاز
                    </h2>

                </div>


                <div class="requirements-grid">


                    <div class="requirement-box">

                        <div class="requirement-header">

                            <h3>
                                حداقل سیستم
                            </h3>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                سیستم‌عامل
                            </strong>

                            <span>
                                ${requirements.minimum.os}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                پردازنده
                            </strong>

                            <span>
                                ${requirements.minimum.cpu}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                رم
                            </strong>

                            <span>
                                ${requirements.minimum.ram}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                کارت گرافیک
                            </strong>

                            <span>
                                ${requirements.minimum.gpu}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                DirectX
                            </strong>

                            <span>
                                ${requirements.minimum.directx}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                فضای ذخیره‌سازی
                            </strong>

                            <span>
                                ${requirements.minimum.storage}
                            </span>

                        </div>

                    </div>



                    <div class="requirement-box">

                        <div class="requirement-header">

                            <h3>
                                سیستم پیشنهادی
                            </h3>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                سیستم‌عامل
                            </strong>

                            <span>
                                ${requirements.recommended.os}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                پردازنده
                            </strong>

                            <span>
                                ${requirements.recommended.cpu}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                رم
                            </strong>

                            <span>
                                ${requirements.recommended.ram}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                کارت گرافیک
                            </strong>

                            <span>
                                ${requirements.recommended.gpu}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                DirectX
                            </strong>

                            <span>
                                ${requirements.recommended.directx}
                            </span>

                        </div>


                        <div class="requirement-row">

                            <strong>
                                فضای ذخیره‌سازی
                            </strong>

                            <span>
                                ${requirements.recommended.storage}
                            </span>

                        </div>

                    </div>


                </div>


            </section>


            <div class="game-details-footer">

                <a
                    href="games.html"
                    class="back-games-button"
                >

                    ← بازگشت به کتابخانه بازی‌ها

                </a>

            </div>


        </div>

    `;


    const image =
        document.getElementById(
            "gameDetailImage"
        );


    if (image) {

        image.addEventListener(
            "error",
            function () {

                this.src =
                    "https://placehold.co/600x338/111111/ffffff?text=ARTIN+GAMES";

            },
            { once: true }
        );

    }

}


/* =========================================================
   NOT FOUND
   ========================================================= */

function showGameNotFound(container) {

    container.innerHTML = `

        <div class="game-not-found">

            <div class="game-not-found-icon">
                🎮
            </div>


            <h1>
                بازی پیدا نشد
            </h1>


            <p>
                بازی موردنظر در کتابخانه ARTIN GAMES
                وجود ندارد.
            </p>


            <a
                href="games.html"
                class="back-games-button"
            >

                ← بازگشت به بازی‌ها

            </a>

        </div>

    `;

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initGamesPage();

        initGameDetails();

    }
);
