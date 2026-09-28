```javascript
const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("gameSearch");
const countBox = document.getElementById("gameCount");
const loadingBox = document.getElementById("loadingBox");
const noResults = document.getElementById("noResults");

let games = [];
let activeFilter = "all";


/* =========================================
   منبع دیتای واقعی
========================================= */

const DATA_URL =
"https://raw.githubusercontent.com/clivewearing/SteamGamesDataAnalysis/main/steam_games_2026.csv";


/* =========================================
   CSV Parser
========================================= */

function parseCSVLine(line) {

    const result = [];

    let current = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {

        const char = line[i];

        if (char === '"') {

            if (
                insideQuotes &&
                line[i + 1] === '"'
            ) {

                current += '"';
                i++;

            } else {

                insideQuotes = !insideQuotes;

            }

        } else if (
            char === "," &&
            !insideQuotes
        ) {

            result.push(current);
            current = "";

        } else {

            current += char;

        }

    }

    result.push(current);

    return result;

}


/* =========================================
   تشخیص دسته بازی
========================================= */

function getCategory(genre, tags) {

    const text =
        `${genre || ""} ${tags || ""}`.toLowerCase();


    if (
        text.includes("horror") ||
        text.includes("survival horror")
    ) {
        return "horror";
    }


    if (
        text.includes("shooter") ||
        text.includes("fps")
    ) {
        return "shooter";
    }


    if (
        text.includes("rpg")
    ) {
        return "rpg";
    }


    if (
        text.includes("racing")
    ) {
        return "racing";
    }


    if (
        text.includes("sports")
    ) {
        return "sports";
    }


    if (
        text.includes("adventure")
    ) {
        return "adventure";
    }


    return "action";

}


/* =========================================
   کاور Steam
========================================= */

function getCover(appId) {

    return (
        "https://cdn.akamai.steamstatic.com/steam/apps/" +
        appId +
        "/library_600x900_2x.jpg"
    );

}


/* =========================================
   ساخت کارت
========================================= */

function createCard(game) {

    const article =
        document.createElement("article");

    article.className =
        "library-card";


    const imageBox =
        document.createElement("div");

    imageBox.className =
        "card-image";


    const image =
        document.createElement("img");

    image.src =
        getCover(game.id);

    image.alt =
        game.title;

    image.loading =
        "lazy";


    image.onerror =
        function () {

            this.src =
                "https://placehold.co/600x900/111111/ffffff?text=ARTIN+GAMES";

        };


    const overlay =
        document.createElement("div");

    overlay.className =
        "card-overlay";


    const category =
        document.createElement("span");

    category.textContent =
        game.genre || "بازی";


    overlay.appendChild(category);


    imageBox.appendChild(image);
    imageBox.appendChild(overlay);


    const info =
        document.createElement("div");

    info.className =
        "card-info";


    const title =
        document.createElement("h3");

    title.textContent =
        game.title;


    const button =
        document.createElement("button");

    button.type =
        "button";

    button.textContent =
        "مشاهده بازی";


    button.addEventListener(
        "click",
        function () {

            window.open(
                "https://store.steampowered.com/app/" +
                game.id +
                "/",
                "_blank",
                "noopener,noreferrer"
            );

        }
    );


    info.appendChild(title);
    info.appendChild(button);


    article.appendChild(imageBox);
    article.appendChild(info);


    return article;

}


/* =========================================
   نمایش بازی‌ها
========================================= */

function renderGames() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const filtered =
        games.filter(game => {

            const matchesSearch =
                !search ||
                game.title
                    .toLowerCase()
                    .includes(search);


            const matchesFilter =
                activeFilter === "all" ||
                game.category === activeFilter;


            return (
                matchesSearch &&
                matchesFilter
            );

        });


    gamesGrid.innerHTML = "";


    const fragment =
        document.createDocumentFragment();


    filtered.forEach(game => {

        fragment.appendChild(
            createCard(game)
        );

    });


    gamesGrid.appendChild(fragment);


    countBox.textContent =
        `${filtered.length} بازی`;


    noResults.hidden =
        filtered.length !== 0;

}


/* =========================================
   دریافت دیتاست
========================================= */

async function loadGames() {

    loadingBox.hidden = false;

    loadingBox.textContent =
        "در حال دریافت کتابخانه بازی‌ها...";


    try {

        const response =
            await fetch(DATA_URL);


        if (!response.ok) {

            throw new Error(
                "Dataset could not be loaded"
            );

        }


        const csv =
            await response.text();


        const lines =
            csv
                .replace(/^\uFEFF/, "")
                .split(/\r?\n/)
                .filter(Boolean);


        if (lines.length < 2) {

            throw new Error(
                "Dataset is empty"
            );

        }


        const headers =
            parseCSVLine(lines[0]);


        const appIdIndex =
            headers.findIndex(
                x =>
                    x.toLowerCase() ===
                    "appid"
            );


        const nameIndex =
            headers.findIndex(
                x =>
                    x.toLowerCase() ===
                    "name"
            );


        const genreIndex =
            headers.findIndex(
                x =>
                    x.toLowerCase().includes(
                        "genre"
                    )
            );


        const tagsIndex =
            headers.findIndex(
                x =>
                    x.toLowerCase().includes(
                        "tags"
                    )
            );


        if (
            appIdIndex === -1 ||
            nameIndex === -1
        ) {

            throw new Error(
                "Required columns not found"
            );

        }


        const unique =
            new Set();


        games = [];


        for (
            let i = 1;
            i < lines.length &&
            games.length < 500;
            i++
        ) {

            const row =
                parseCSVLine(lines[i]);


            const id =
                Number(row[appIdIndex]);


            const title =
                row[nameIndex];


            if (
                !id ||
                !title ||
                unique.has(id)
            ) {

                continue;

            }


            unique.add(id);


            const genre =
                genreIndex >= 0
                    ? row[genreIndex]
                    : "";


            const tags =
                tagsIndex >= 0
                    ? row[tagsIndex]
                    : "";


            games.push({

                id: id,

                title: title,

                genre: genre,

                category:
                    getCategory(
                        genre,
                        tags
                    )

            });

        }


        loadingBox.hidden =
            true;


        renderGames();


    } catch (error) {

        console.error(error);


        loadingBox.textContent =
            "دریافت اطلاعات بازی‌ها ناموفق بود. اتصال اینترنت را بررسی کنید و صفحه را دوباره باز کنید.";

    }

}


/* =========================================
   جستجو
========================================= */

searchInput.addEventListener(
    "input",
    renderGames
);


/* =========================================
   فیلترها
========================================= */

document
    .querySelectorAll(".filter-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".filter-button"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add(
                    "active"
                );


                activeFilter =
                    this.dataset.filter;


                renderGames();

            }
        );

    });


/* =========================================
   دکمه ورود به بازی‌ها
========================================= */

document
    .getElementById("enterGames")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("library")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   آخرین بازی‌ها
========================================= */

document
    .getElementById("latestBtn")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("library")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   شروع
========================================= */

loadGames();
```
