// ======================================================
// ARTIN GAMES
// GAMES DATABASE + GAMES PAGE + GAME DETAILS PAGE
// ======================================================


// ======================================================
// DATABASE - 200 GAMES
// ======================================================

const games = [

    // ================= ACTION =================

    { name: "Grand Theft Auto V", id: 271590, category: "action", year: 2015 },
    { name: "Grand Theft Auto IV", id: 12210, category: "action", year: 2008 },
    { name: "Grand Theft Auto: San Andreas", id: 12120, category: "action", year: 2005 },
    { name: "Grand Theft Auto: Vice City", id: 12110, category: "action", year: 2003 },
    { name: "Grand Theft Auto III", id: 12100, category: "action", year: 2002 },
    { name: "Red Dead Redemption 2", id: 1174180, category: "action", year: 2019 },
    { name: "Sleeping Dogs: Definitive Edition", id: 307690, category: "action", year: 2014 },
    { name: "Watch Dogs", id: 243470, category: "action", year: 2014 },
    { name: "Watch Dogs 2", id: 447040, category: "action", year: 2016 },
    { name: "Watch Dogs: Legion", id: 2231380, category: "action", year: 2020 },
    { name: "Just Cause 3", id: 225540, category: "action", year: 2015 },
    { name: "Just Cause 4", id: 517630, category: "action", year: 2018 },
    { name: "Mad Max", id: 234140, category: "action", year: 2015 },
    { name: "Batman: Arkham Knight", id: 208650, category: "action", year: 2015 },
    { name: "Batman: Arkham City", id: 200260, category: "action", year: 2011 },
    { name: "Batman: Arkham Asylum", id: 35140, category: "action", year: 2009 },
    { name: "Middle-earth: Shadow of Mordor", id: 241930, category: "action", year: 2014 },
    { name: "Middle-earth: Shadow of War", id: 356190, category: "action", year: 2017 },
    { name: "Assassin's Creed II", id: 33230, category: "action", year: 2010 },
    { name: "Assassin's Creed Brotherhood", id: 48190, category: "action", year: 2010 },
    { name: "Assassin's Creed Revelations", id: 201870, category: "action", year: 2011 },
    { name: "Assassin's Creed III", id: 208480, category: "action", year: 2012 },
    { name: "Assassin's Creed IV Black Flag", id: 242050, category: "action", year: 2013 },
    { name: "Assassin's Creed Unity", id: 289650, category: "action", year: 2014 },
    { name: "Assassin's Creed Origins", id: 582160, category: "action", year: 2017 },
    { name: "Assassin's Creed Odyssey", id: 812140, category: "action", year: 2018 },
    { name: "Assassin's Creed Valhalla", id: 2208920, category: "action", year: 2020 },
    { name: "Far Cry 3", id: 220240, category: "action", year: 2012 },
    { name: "Far Cry 4", id: 298110, category: "action", year: 2014 },
    { name: "Far Cry 5", id: 552520, category: "action", year: 2018 },
    { name: "Far Cry 6", id: 2369390, category: "action", year: 2021 },
    { name: "Dying Light", id: 239140, category: "action", year: 2015 },
    { name: "Dying Light 2 Stay Human", id: 534380, category: "action", year: 2022 },
    { name: "Days Gone", id: 1259420, category: "action", year: 2021 },
    { name: "Horizon Zero Dawn", id: 1151640, category: "action", year: 2020 },
    { name: "Horizon Forbidden West", id: 2420110, category: "action", year: 2024 },
    { name: "God of War", id: 1593500, category: "action", year: 2022 },
    { name: "God of War Ragnarök", id: 2322010, category: "action", year: 2024 },
    { name: "Marvel's Spider-Man Remastered", id: 1817070, category: "action", year: 2022 },
    { name: "Marvel's Spider-Man: Miles Morales", id: 1817190, category: "action", year: 2022 },
    { name: "Black Myth: Wukong", id: 2358720, category: "action", year: 2024 },
    { name: "Palworld", id: 1623730, category: "action", year: 2024 },
    { name: "Terraria", id: 105600, category: "action", year: 2011 },
    { name: "Stardew Valley", id: 413150, category: "action", year: 2016 },
    { name: "Valheim", id: 892970, category: "action", year: 2021 },


    // ================= RPG =================

    { name: "Cyberpunk 2077", id: 1091500, category: "rpg", year: 2020 },
    { name: "The Witcher 3: Wild Hunt", id: 292030, category: "rpg", year: 2015 },
    { name: "The Witcher 2: Assassins of Kings", id: 20920, category: "rpg", year: 2011 },
    { name: "The Elder Scrolls V: Skyrim", id: 489830, category: "rpg", year: 2016 },
    { name: "Fallout 4", id: 377160, category: "rpg", year: 2015 },
    { name: "Fallout: New Vegas", id: 22380, category: "rpg", year: 2010 },
    { name: "Elden Ring", id: 1245620, category: "rpg", year: 2022 },
    { name: "Baldur's Gate 3", id: 1086940, category: "rpg", year: 2023 },
    { name: "Dark Souls Remastered", id: 570940, category: "rpg", year: 2018 },
    { name: "Dark Souls III", id: 374320, category: "rpg", year: 2016 },
    { name: "Sekiro: Shadows Die Twice", id: 814380, category: "rpg", year: 2019 },
    { name: "Monster Hunter: World", id: 582010, category: "rpg", year: 2018 },
    { name: "Monster Hunter Rise", id: 1446780, category: "rpg", year: 2022 },
    { name: "Dragon's Dogma 2", id: 2054970, category: "rpg", year: 2024 },
    { name: "Starfield", id: 1716740, category: "rpg", year: 2023 },
    { name: "Mass Effect Legendary Edition", id: 1328670, category: "rpg", year: 2021 },
    { name: "Dragon Age: Inquisition", id: 1222690, category: "rpg", year: 2014 },
    { name: "Kingdom Come: Deliverance", id: 379430, category: "rpg", year: 2018 },
    { name: "Kingdom Come: Deliverance II", id: 1771300, category: "rpg", year: 2025 },
    { name: "Divinity: Original Sin 2", id: 435150, category: "rpg", year: 2017 },
    { name: "Persona 5 Royal", id: 1687950, category: "rpg", year: 2022 },
    { name: "Final Fantasy VII Remake Intergrade", id: 1462040, category: "rpg", year: 2022 },
    { name: "Final Fantasy XV Windows Edition", id: 637650, category: "rpg", year: 2018 },
    { name: "Tales of Arise", id: 740130, category: "rpg", year: 2021 },
    { name: "NieR:Automata", id: 524220, category: "rpg", year: 2017 },
    { name: "NieR Replicant ver.1.22474487139...", id: 1113560, category: "rpg", year: 2021 },
    { name: "Yakuza: Like a Dragon", id: 1235140, category: "rpg", year: 2020 },
    { name: "Like a Dragon: Infinite Wealth", id: 2072450, category: "rpg", year: 2024 },
    { name: "Path of Exile", id: 238960, category: "rpg", year: 2013 },
    { name: "Path of Exile 2", id: 2694490, category: "rpg", year: 2024 },


    // ================= SHOOTER =================

    { name: "Counter-Strike 2", id: 730, category: "shooter", year: 2023 },
    { name: "Counter-Strike: Source", id: 240, category: "shooter", year: 2004 },
    { name: "Counter-Strike 1.6", id: 10, category: "shooter", year: 2000 },
    { name: "Call of Duty 4: Modern Warfare", id: 7940, category: "shooter", year: 2007 },
    { name: "Call of Duty: Modern Warfare 2", id: 10180, category: "shooter", year: 2009 },
    { name: "Call of Duty: Black Ops", id: 42700, category: "shooter", year: 2010 },
    { name: "Call of Duty: Black Ops II", id: 202970, category: "shooter", year: 2012 },
    { name: "Call of Duty: Ghosts", id: 209160, category: "shooter", year: 2013 },
    { name: "Call of Duty: Advanced Warfare", id: 209650, category: "shooter", year: 2014 },
    { name: "Call of Duty: WWII", id: 476600, category: "shooter", year: 2017 },
    { name: "Call of Duty: Black Ops III", id: 311210, category: "shooter", year: 2015 },
    { name: "Call of Duty: Modern Warfare Remastered", id: 393080, category: "shooter", year: 2016 },
    { name: "Call of Duty: Modern Warfare", id: 2000950, category: "shooter", year: 2019 },
    { name: "DOOM", id: 379720, category: "shooter", year: 2016 },
    { name: "DOOM Eternal", id: 782330, category: "shooter", year: 2020 },
    { name: "Wolfenstein: The New Order", id: 201810, category: "shooter", year: 2014 },
    { name: "Wolfenstein II: The New Colossus", id: 612880, category: "shooter", year: 2017 },
    { name: "Titanfall 2", id: 1237970, category: "shooter", year: 2016 },
    { name: "Battlefield 1", id: 1238840, category: "shooter", year: 2016 },
    { name: "Battlefield V", id: 1238810, category: "shooter", year: 2018 },
    { name: "Battlefield 2042", id: 1517290, category: "shooter", year: 2021 },
    { name: "Battlefield 4", id: 1238860, category: "shooter", year: 2013 },
    { name: "Battlefield Hardline", id: 1238880, category: "shooter", year: 2015 },
    { name: "Metro 2033 Redux", id: 286690, category: "shooter", year: 2014 },
    { name: "Metro: Last Light Redux", id: 287390, category: "shooter", year: 2014 },
    { name: "Metro Exodus", id: 412020, category: "shooter", year: 2019 },
    { name: "Metro Exodus Enhanced Edition", id: 1449560, category: "shooter", year: 2021 },
    { name: "Destiny 2", id: 1085660, category: "shooter", year: 2017 },
    { name: "Warframe", id: 230410, category: "shooter", year: 2013 },
    { name: "Apex Legends", id: 1172470, category: "shooter", year: 2020 },
    { name: "PAYDAY 2", id: 218620, category: "shooter", year: 2013 },
    { name: "Left 4 Dead 2", id: 550, category: "shooter", year: 2009 },
    { name: "Half-Life 2", id: 220, category: "shooter", year: 2004 },
    { name: "Half-Life 2: Episode One", id: 380, category: "shooter", year: 2006 },
    { name: "Half-Life 2: Episode Two", id: 420, category: "shooter", year: 2007 },
    { name: "Portal 2", id: 620, category: "shooter", year: 2011 },
    { name: "Borderlands 2", id: 49520, category: "shooter", year: 2012 },
    { name: "Borderlands 3", id: 397540, category: "shooter", year: 2019 },
    { name: "Far Cry 2", id: 19900, category: "shooter", year: 2008 },
    { name: "Crysis", id: 17300, category: "shooter", year: 2007 },
    { name: "Crysis 2", id: 108800, category: "shooter", year: 2011 },
    { name: "Crysis 3 Remastered", id: 2096610, category: "shooter", year: 2021 },
    { name: "DOOM 3", id: 9050, category: "shooter", year: 2004 },
    { name: "RAGE", id: 9200, category: "shooter", year: 2011 },
    { name: "Quake", id: 2310, category: "shooter", year: 1996 },


    // ================= HORROR =================

    { name: "Resident Evil 2", id: 883710, category: "horror", year: 2019 },
    { name: "Resident Evil 3", id: 952060, category: "horror", year: 2020 },
    { name: "Resident Evil 4", id: 2050650, category: "horror", year: 2023 },
    { name: "Resident Evil 7 Biohazard", id: 418370, category: "horror", year: 2017 },
    { name: "Resident Evil Village", id: 1196590, category: "horror", year: 2021 },
    { name: "Resident Evil 5", id: 21690, category: "horror", year: 2009 },
    { name: "Resident Evil 6", id: 221040, category: "horror", year: 2013 },
    { name: "Resident Evil Revelations", id: 222480, category: "horror", year: 2013 },
    { name: "Resident Evil Revelations 2", id: 287290, category: "horror", year: 2015 },
    { name: "Outlast", id: 238320, category: "horror", year: 2013 },
    { name: "Outlast 2", id: 414700, category: "horror", year: 2017 },
    { name: "Amnesia: The Dark Descent", id: 57300, category: "horror", year: 2010 },
    { name: "Amnesia: Rebirth", id: 999220, category: "horror", year: 2020 },
    { name: "SOMA", id: 282140, category: "horror", year: 2015 },
    { name: "Alien: Isolation", id: 214490, category: "horror", year: 2014 },
    { name: "The Evil Within", id: 268050, category: "horror", year: 2014 },
    { name: "The Evil Within 2", id: 601430, category: "horror", year: 2017 },
    { name: "Little Nightmares", id: 424840, category: "horror", year: 2017 },
    { name: "Little Nightmares II", id: 860510, category: "horror", year: 2021 },
    { name: "Phasmophobia", id: 739630, category: "horror", year: 2020 },
    { name: "Dead by Daylight", id: 381210, category: "horror", year: 2016 },
    { name: "The Forest", id: 242760, category: "horror", year: 2018 },
    { name: "Sons of the Forest", id: 1326470, category: "horror", year: 2024 },
    { name: "Dead Space", id: 1693980, category: "horror", year: 2023 },
    { name: "Dead Space 2", id: 47780, category: "horror", year: 2011 },
    { name: "Dead Space 3", id: 1238060, category: "horror", year: 2013 },
    { name: "Alan Wake", id: 108710, category: "horror", year: 2012 },
    { name: "Alan Wake 2", id: 1088850, category: "horror", year: 2023 },
    { name: "Visage", id: 594330, category: "horror", year: 2020 },
    { name: "Layers of Fear", id: 391720, category: "horror", year: 2016 },


    // ================= ADVENTURE =================

    { name: "Tomb Raider", id: 203160, category: "adventure", year: 2013 },
    { name: "Rise of the Tomb Raider", id: 391220, category: "adventure", year: 2016 },
    { name: "Shadow of the Tomb Raider", id: 750920, category: "adventure", year: 2018 },
    { name: "Uncharted: Legacy of Thieves Collection", id: 1659420, category: "adventure", year: 2022 },
    { name: "Death Stranding", id: 1190460, category: "adventure", year: 2020 },
    { name: "Death Stranding Director's Cut", id: 1850570, category: "adventure", year: 2022 },
    { name: "Stray", id: 1332010, category: "adventure", year: 2022 },
    { name: "The Last of Us Part I", id: 1888930, category: "adventure", year: 2023 },
    { name: "Detroit: Become Human", id: 1222140, category: "adventure", year: 2019 },
    { name: "Heavy Rain", id: 960910, category: "adventure", year: 2019 },
    { name: "Beyond: Two Souls", id: 960990, category: "adventure", year: 2019 },
    { name: "Life is Strange", id: 319630, category: "adventure", year: 2015 },
    { name: "Life is Strange 2", id: 532210, category: "adventure", year: 2018 },
    { name: "Life is Strange: True Colors", id: 936790, category: "adventure", year: 2021 },
    { name: "Firewatch", id: 383870, category: "adventure", year: 2016 },
    { name: "What Remains of Edith Finch", id: 501300, category: "adventure", year: 2017 },
    { name: "The Walking Dead", id: 207610, category: "adventure", year: 2012 },
    { name: "The Walking Dead: Season Two", id: 261030, category: "adventure", year: 2013 },
    { name: "Batman: Arkham Origins", id: 209000, category: "adventure", year: 2013 },
    { name: "Control", id: 870780, category: "adventure", year: 2019 },
    { name: "Quantum Break", id: 474960, category: "adventure", year: 2016 },
    { name: "Alan Wake's American Nightmare", id: 202750, category: "adventure", year: 2012 },
    { name: "The Stanley Parable: Ultra Deluxe", id: 1703340, category: "adventure", year: 2022 },
    { name: "Inside", id: 304430, category: "adventure", year: 2016 },
    { name: "Limbo", id: 48000, category: "adventure", year: 2010 },
    { name: "Ori and the Blind Forest", id: 261570, category: "adventure", year: 2015 },
    { name: "Ori and the Will of the Wisps", id: 1057090, category: "adventure", year: 2020 },
    { name: "Hollow Knight", id: 367520, category: "adventure", year: 2017 },
    { name: "Subnautica", id: 264710, category: "adventure", year: 2018 },
    { name: "Hades", id: 1145360, category: "adventure", year: 2020 },


    // ================= RACING =================

    { name: "Forza Horizon 4", id: 1293830, category: "racing", year: 2018 },
    { name: "Forza Horizon 5", id: 1551360, category: "racing", year: 2021 },
    { name: "Need for Speed Heat", id: 1222680, category: "racing", year: 2019 },
    { name: "Need for Speed Unbound", id: 1846380, category: "racing", year: 2022 },
    { name: "Need for Speed Payback", id: 1262580, category: "racing", year: 2017 },
    { name: "Dirt Rally 2.0", id: 690790, category: "racing", year: 2019 },
    { name: "Assetto Corsa", id: 244210, category: "racing", year: 2014 },
    { name: "Euro Truck Simulator 2", id: 227300, category: "racing", year: 2012 },
    { name: "American Truck Simulator", id: 270880, category: "racing", year: 2016 },
    { name: "CarX Drift Racing Online", id: 635260, category: "racing", year: 2017 },


    // ================= SPORTS =================

    { name: "eFootball", id: 1665460, category: "sports", year: 2021 },
    { name: "TEKKEN 8", id: 1778820, category: "sports", year: 2024 },
    { name: "TEKKEN 7", id: 389730, category: "sports", year: 2017 },
    { name: "Street Fighter 6", id: 1364780, category: "sports", year: 2023 },
    { name: "EA SPORTS FC 24", id: 2195250, category: "sports", year: 2023 },
    { name: "EA SPORTS FC 25", id: 2669320, category: "sports", year: 2024 },
    { name: "NBA 2K25", id: 2878980, category: "sports", year: 2024 },
    { name: "WWE 2K24", id: 2315690, category: "sports", year: 2024 },
    { name: "Rocket League", id: 252950, category: "sports", year: 2015 },
    { name: "Trackmania", id: 2225070, category: "sports", year: 2020 }

];


// ======================================================
// CATEGORY NAMES
// ======================================================

const categoryNames = {

    action: "اکشن",
    shooter: "شوتر",
    rpg: "نقش‌آفرینی",
    horror: "ترسناک",
    adventure: "ماجراجویی",
    racing: "مسابقه‌ای",
    sports: "ورزشی"

};


// ======================================================
// STEAM
// ======================================================

function getSteamLink(id) {

    return `https://store.steampowered.com/app/${id}/`;

}


// ======================================================
// IMAGE
// ======================================================

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


// ======================================================
// GAME FINDER
// ======================================================

function getGameById(id) {

    return games.find(game => game.id === Number(id));

}


// ======================================================
// GAMES PAGE
// ======================================================

function initGamesLibrary() {

    const gamesGrid = document.getElementById("gamesGrid");

    if (!gamesGrid) return;


    const gameSearch =
        document.getElementById("gameSearch");

    const gameCount =
        document.getElementById("gameCount");

    const loadingBox =
        document.getElementById("loadingBox");

    const noResults =
        document.getElementById("noResults");

    const loadMoreButton =
        document.getElementById("loadMoreButton");

    const filters =
        document.querySelectorAll(".filter");


    const GAMES_PER_LOAD = 20;

    let currentCategory = "all";

    let currentSearch = "";

    let visibleGames = GAMES_PER_LOAD;


    if (loadingBox) {

        loadingBox.style.display = "none";

    }


    if (gameCount) {

        gameCount.textContent = games.length;

    }


    function getFilteredGames() {

        return games.filter(game => {

            const categoryMatch =
                currentCategory === "all" ||
                game.category === currentCategory;


            const searchMatch =
                game.name
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    );


            return categoryMatch && searchMatch;

        });

    }


    function createCard(game) {

        const card =
            document.createElement("article");


        card.className = "game-card";


        card.innerHTML = `

            <div class="game-image">

                <img
                    src="${getGameImage(game.id)}"
                    alt="${game.name}"
                    loading="lazy"
                >

            </div>

            <div class="game-info">

                <span class="game-category">
                    ${categoryNames[game.category]}
                </span>

                <h3 class="game-name">
                    ${game.name}
                </h3>

                <button
                    class="view-game"
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
                    "https://via.placeholder.com/600x900?text=ARTIN+GAMES";

            }
        );


        const button =
            card.querySelector(".view-game");


        button.addEventListener(
            "click",
            function () {

                window.location.href =
                    `game.html?id=${game.id}`;

            }
        );


        return card;

    }


    function renderGames(reset = true) {

        const filteredGames =
            getFilteredGames();


        if (reset) {

            visibleGames =
                GAMES_PER_LOAD;

            gamesGrid.innerHTML = "";

        }


        if (filteredGames.length === 0) {

            noResults.style.display =
                "block";

            loadMoreButton.style.display =
                "none";

            return;

        }


        noResults.style.display =
            "none";


        const gamesToShow =
            filteredGames.slice(
                0,
                visibleGames
            );


        gamesToShow.forEach(game => {

            gamesGrid.appendChild(
                createCard(game)
            );

        });


        if (
            visibleGames <
            filteredGames.length
        ) {

            loadMoreButton.style.display =
                "inline-flex";

        } else {

            loadMoreButton.style.display =
                "none";

        }

    }


    if (gameSearch) {

        gameSearch.addEventListener(
            "input",
            function () {

                currentSearch =
                    this.value.trim();

                renderGames(true);

            }
        );

    }


    filters.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filters.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add("active");


                currentCategory =
                    this.dataset.category;


                renderGames(true);

            }
        );

    });


    if (loadMoreButton) {

        loadMoreButton.addEventListener(
            "click",
            function () {

                const filteredGames =
                    getFilteredGames();


                const oldVisibleGames =
                    visibleGames;


                visibleGames =
                    Math.min(
                        visibleGames +
                        GAMES_PER_LOAD,
                        filteredGames.length
                    );


                const newGames =
                    filteredGames.slice(
                        oldVisibleGames,
                        visibleGames
                    );


                newGames.forEach(game => {

                    gamesGrid.appendChild(
                        createCard(game)
                    );

                });


                if (
                    visibleGames >=
                    filteredGames.length
                ) {

                    loadMoreButton.style.display =
                        "none";

                }

            }
        );

    }


    renderGames(true);

}


// ======================================================
// GAME DETAILS PAGE
// ======================================================

function initGameDetails() {

    const detailsContainer =
        document.getElementById("gameDetails");


    if (!detailsContainer) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    const game =
        getGameById(id);


    if (!game) {

        detailsContainer.innerHTML = `

            <div class="game-not-found">

                <div class="not-found-icon">
                    🎮
                </div>

                <h1>
                    بازی پیدا نشد
                </h1>

                <p>
                    بازی موردنظر در کتابخانه ARTIN GAMES وجود ندارد.
                </p>

                <a
                    href="games.html"
                    class="back-games-button"
                >
                    بازگشت به بازی‌ها
                </a>

            </div>

        `;

        return;

    }


    document.title =
        `ARTIN GAMES | ${game.name}`;


    detailsContainer.innerHTML = `

        <div class="game-details-container">


            <div class="game-details-top">


                <div class="game-details-cover">

                    <img
                        src="${getGameImage(game.id)}"
                        alt="${game.name}"
                        onerror="
                            this.src='https://via.placeholder.com/600x900?text=ARTIN+GAMES'
                        "
                    >

                </div>


                <div class="game-details-main">


                    <span class="game-details-category">
                        ${categoryNames[game.category]}
                    </span>


                    <h1>
                        ${game.name}
                    </h1>


                    <p class="game-details-description">

                        ${getGameDescription(game)}

                    </p>


                    <div class="game-meta">


                        <div class="meta-item">

                            <span>
                                ژانر
                            </span>

                            <strong>
                                ${categoryNames[game.category]}
                            </strong>

                        </div>


                        <div class="meta-item">

                            <span>
                                سال انتشار
                            </span>

                            <strong>
                                ${game.year}
                            </strong>

                        </div>


                        <div class="meta-item">

                            <span>
                                پلتفرم
                            </span>

                            <strong>
                                PC
                            </strong>

                        </div>


                        <div class="meta-item">

                            <span>
                                فروشگاه
                            </span>

                            <strong>
                                Steam
                            </strong>

                        </div>


                    </div>


                    <a
                        href="${getSteamLink(game.id)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="download-game-button"
                    >

                        <span>
                            ↓
                        </span>

                        دانلود / خرید از Steam

                    </a>


                </div>


            </div>


            <section class="requirements-section">


                <div class="details-section-title">

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

                            <span>
                                حداقل سیستم
                            </span>

                            <strong>
                                MINIMUM
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                سیستم‌عامل
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.os}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                پردازنده
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.cpu}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                رم
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.ram}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                کارت گرافیک
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.gpu}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                DirectX
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.directx}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                فضای خالی
                            </span>

                            <strong>
                                ${getRequirements(game).minimum.storage}
                            </strong>

                        </div>


                    </div>


                    <div class="requirement-box recommended">


                        <div class="requirement-header">

                            <span>
                                سیستم پیشنهادی
                            </span>

                            <strong>
                                RECOMMENDED
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                سیستم‌عامل
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.os}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                پردازنده
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.cpu}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                رم
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.ram}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                کارت گرافیک
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.gpu}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                DirectX
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.directx}
                            </strong>

                        </div>


                        <div class="requirement-row">

                            <span>
                                فضای خالی
                            </span>

                            <strong>
                                ${getRequirements(game).recommended.storage}
                            </strong>

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

}


// ======================================================
// GAME DESCRIPTION
// ======================================================

function getGameDescription(game) {

    const descriptions = {

        action:
            `${game.name} یکی از بازی‌های محبوب سبک اکشن است که تجربه‌ای هیجان‌انگیز و سرگرم‌کننده را برای بازیکنان PC ارائه می‌دهد.`,

        shooter:
            `${game.name} یک بازی تیراندازی با تمرکز بر مبارزات، سلاح‌ها و گیم‌پلی سریع است.`,

        rpg:
            `${game.name} یک بازی نقش‌آفرینی است که روی داستان، شخصیت‌ها، پیشرفت بازیکن و دنیای بازی تمرکز دارد.`,

        horror:
            `${game.name} یک تجربه ترسناک و داستان‌محور است که فضای تاریک و هیجان‌انگیزی را به بازیکن ارائه می‌کند.`,

        adventure:
            `${game.name} یک بازی ماجراجویی با تمرکز بر داستان، اکتشاف و تجربه متفاوت گیم‌پلی است.`,

        racing:
            `${game.name} یک بازی مسابقه‌ای برای PC است که روی رانندگی، رقابت و تجربه سرعت تمرکز دارد.`,

        sports:
            `${game.name} یک بازی ورزشی و رقابتی است که تجربه‌ای سرگرم‌کننده برای بازیکنان PC فراهم می‌کند.`

    };


    return descriptions[game.category] ||
        "اطلاعات بازی در ARTIN GAMES.";

}


// ======================================================
// SYSTEM REQUIREMENTS
// ======================================================
//
// توجه:
// این قسمت ساختار اطلاعات سیستم را مدیریت می‌کند.
// برای بازی‌هایی که مشخصات اختصاصی ندارند، اطلاعات عمومی
// بر اساس نسل بازی نمایش داده می‌شود.
// ======================================================

function getRequirements(game) {

    const modern =
        game.year >= 2020;


    if (modern) {

        return {

            minimum: {

                os: "Windows 10 64-bit",

                cpu:
                    "Intel Core i5 / AMD Ryzen 5",

                ram:
                    "8 GB RAM",

                gpu:
                    "GTX 1060 / RX 580",

                directx:
                    "Version 12",

                storage:
                    "70 GB"

            },

            recommended: {

                os:
                    "Windows 10/11 64-bit",

                cpu:
                    "Intel Core i7 / AMD Ryzen 7",

                ram:
                    "16 GB RAM",

                gpu:
                    "RTX 2060 / RX 5700",

                directx:
                    "Version 12",

                storage:
                    "100 GB"

            }

        };

    }


    return {

        minimum: {

            os:
                "Windows 7 / 8 / 10 64-bit",

            cpu:
                "Intel Core i3 / AMD equivalent",

            ram:
                "4 GB RAM",

            gpu:
                "GTX 660 / Radeon HD 7870",

            directx:
                "Version 11",

            storage:
                "30 GB"

        },

        recommended: {

            os:
                "Windows 10 64-bit",

            cpu:
                "Intel Core i5 / AMD Ryzen 5",

            ram:
                "8 GB RAM",

            gpu:
                "GTX 1060 / RX 580",

            directx:
                "Version 11",

            storage:
                "50 GB"

        }

    };

}


// ======================================================
// START
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initGamesLibrary();

        initGameDetails();

    }
);
