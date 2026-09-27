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


let games = [];
let currentFilter = "all";


/* ================= NAVIGATION ================= */

function openLibrary() {

    homePage.classList.add("hidden");
    libraryPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (games.length === 0) {
        loadGames();
    }
}


function goHome() {

    libraryPage.classList.add("hidden");
    homePage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


artinButton.addEventListener("click", openLibrary);
artinButton2.addEventListener("click", openLibrary);
backButton.addEventListener("click", goHome);


/* ================= LOAD GAMES ================= */

async function loadGames() {

    loadingBox.classList.remove("hidden");

    gamesGrid.innerHTML = "";

    gameCount.textContent = "در حال دریافت بازی‌ها...";

    try {

        /*
         * SteamSpy API
         * صفحه اول شامل بازی‌های محبوب Steam است.
         */

        const response = await fetch(
            "https://steamspy.com/api.php?request=all&page=0"
        );

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        const data = await response.json();


        games = Object.values(data)
            .filter(game => game && game.appid && game.name)
            .slice(0, 500)
            .map(game => {

                return {
                    id: Number(game.appid),
                    title: game.name,
                    genre: game.genre || "Game",
                    tags: game.tags || {}
                };

            });


        if (games.length === 0) {
            throw new Error("بازی پیدا نشد");
        }


        loadingBox.classList.add("hidden");

        renderGames(games);

    } catch (error) {

        console.error(error);

        loadingBox.classList.add("hidden");

        gameCount.textContent =
            "دریافت بازی‌ها انجام نشد.";

        gamesGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                border:1px solid #292929;
                border-radius:20px;
                background:#090909;
            ">
                <h2>مشکل در دریافت بازی‌ها</h2>

                <p style="
                    color:#777;
                    margin-top:10px;
                    font-size:13px;
                ">
                    اتصال اینترنت را بررسی کن و دوباره صفحه را باز کن.
                </p>

                <button
                    onclick="location.reload()"
                    style="
                        margin-top:20px;
                        padding:11px 20px;
                        background:#151515;
                        color:white;
                        border:1px solid #444;
                        border-radius:10px;
                        cursor:pointer;
                        font-family:inherit;
                    "
                >
                    تلاش دوباره
                </button>
            </div>
        `;

    }
}


/* ================= IMAGE ================= */

function getGameImage(appId) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900_2x.jpg`;
}


function getFallbackImage(title) {

    const safeTitle = encodeURIComponent(title);

    return `https://placehold.co/600x900/0b0b0b/ffffff?text=${safeTitle}`;
}


/* ================= CATEGORY ================= */

function getCategory(game) {

    const genre = String(game.genre || "").toLowerCase();

    const tagText = Object.keys(game.tags || {})
        .join(" ")
        .toLowerCase();


    const text = `${genre} ${tagText}`;


    if (
        text.includes("horror") ||
        text.includes("survival horror")
    ) {
        return "horror";
    }


    if (
        text.includes("shooter") ||
        text.includes("fps") ||
        text.includes("third-person shooter")
    ) {
        return "shooter";
    }


    if (
        text.includes("sports") ||
        text.includes("football") ||
        text.includes("soccer")
    ) {
        return "sports";
    }


    if (
        text.includes("racing") ||
        text.includes("driving")
    ) {
        return "racing";
    }


    if (
        text.includes("rpg") ||
        text.includes("role-playing")
    ) {
        return "rpg";
    }


    if (
        text.includes("adventure") ||
        text.includes("exploration")
    ) {
        return "adventure";
    }


    if (
        text.includes("action")
    ) {
        return "action";
    }


    return "action";
}


/* ================= CREATE CARD ================= */

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

            this.dataset.fallback = "true";

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


    const category = document.createElement("span");

    category.className = "game-tag";

    category.textContent = translateCategory(
        getCategory(game)
    );


    const id = document.createElement("span");

    id.textContent = `ID: ${game.id}`;


    meta.appendChild(category);
    meta.appendChild(id);


    const button = document.createElement("button");

    button.className = "game-button";

    button.textContent = "مشاهده بازی";


    button.addEventListener("click", function () {

        const steamUrl =
            `https://store.steampowered.com/app/${game.id}/`;

        window.open(
            steamUrl,
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


/* ================= TRANSLATE CATEGORY ================= */

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


/* ================= RENDER ================= */

function renderGames(list) {

    gamesGrid.innerHTML = "";


    if (list.length === 0) {

        noResults.classList.remove("hidden");

        gameCount.textContent =
            "هیچ بازی پیدا نشد.";

        return;
    }


    noResults.classList.add("hidden");


    const fragment = document.createDocumentFragment();


    list.forEach(game => {

        fragment.appendChild(
            createGameCard(game)
        );

    });


    gamesGrid.appendChild(fragment);


    gameCount.textContent =
        `${list.length} بازی نمایش داده می‌شود`;
}


/* ================= FILTER ================= */

function filterGames() {

    const searchText =
        gameSearch.value
            .trim()
            .toLowerCase();


    const filtered = games.filter(game => {

        const title =
            String(game.title || "").toLowerCase();


        const matchesSearch =
            title.includes(searchText);


        const category =
            getCategory(game);


        const matchesCategory =
            currentFilter === "all" ||
            category === currentFilter;


        return (
            matchesSearch &&
            matchesCategory
        );

    });


    renderGames(filtered);
}


/* ================= SEARCH ================= */

gameSearch.addEventListener(
    "input",
    filterGames
);


/* ================= FILTER BUTTONS ================= */

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        currentFilter =
            this.dataset.filter;


        filterGames();

    });

});
