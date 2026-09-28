// ======================================================
// STEAM COVER CACHE
// ======================================================

const coverCache = new Map();
const coverLoading = new Map();


// ======================================================
// STEAM TITLE SEARCH
// ======================================================

async function getSteamCover(gameName) {

    // قبلاً پیدا شده
    if (coverCache.has(gameName)) {
        return coverCache.get(gameName);
    }

    // همین الان در حال جستجو
    if (coverLoading.has(gameName)) {
        return coverLoading.get(gameName);
    }

    const promise = (async () => {

        try {

            const titles = getPossibleTitles(gameName);

            for (const title of titles) {

                const url =
                    "https://store.steampowered.com/api/storesearch/" +
                    "?term=" +
                    encodeURIComponent(title) +
                    "&cc=us&l=en";

                const response =
                    await fetch(url);

                if (!response.ok) {
                    continue;
                }

                const data =
                    await response.json();

                if (
                    !data ||
                    !data.items ||
                    data.items.length === 0
                ) {
                    continue;
                }

                // اول دنبال اسم دقیق می‌گردیم
                const exact =
                    data.items.find(item => {

                        if (!item.name) {
                            return false;
                        }

                        return (
                            item.name
                                .toLowerCase()
                                .trim() ===
                            title
                                .toLowerCase()
                                .trim()
                        );

                    });

                const result =
                    exact || data.items[0];

                if (!result || !result.id) {
                    continue;
                }

                const appId =
                    result.id;

                // کاور عمودی Steam
                const cover =
                    `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900_2x.jpg`;

                coverCache.set(
                    gameName,
                    cover
                );

                return cover;

            }

        }

        catch (error) {

            console.warn(
                "Steam cover error:",
                gameName,
                error
            );

        }

        // پیدا نشد
        coverCache.set(
            gameName,
            null
        );

        return null;

    })();

    coverLoading.set(
        gameName,
        promise
    );

    const result =
        await promise;

    coverLoading.delete(
        gameName
    );

    return result;

}


// ======================================================
// COVER PLACEHOLDER
// ======================================================

function createPlaceholder(game) {

    return `

        <div class="game-cover">

            <div class="cover-not-found">
                کاور Steam موجود نیست
            </div>

            <div class="game-number">
                ${games.indexOf(game) + 1}
            </div>

        </div>

    `;

}


// ======================================================
// COVER HTML
// ======================================================

function createCover(game) {

    const cover =
        coverCache.get(game.name);

    if (!cover) {

        return createPlaceholder(game);

    }

    return `

        <div class="game-cover">

            <img
                src="${cover}"
                alt="کاور ${game.name}"
                loading="lazy"
                onerror="
                    this.style.display='none';
                    this.nextElementSibling.style.display='flex';
                "
            >

            <div
                class="cover-fallback"
                style="display:none;"
            >
                کاور Steam موجود نیست
            </div>

            <div class="game-number">
                ${games.indexOf(game) + 1}
            </div>

        </div>

    `;

}


// ======================================================
// LOAD STEAM COVERS
// ======================================================

async function loadCovers(list) {

    // همزمان فقط 5 بازی
    const batchSize = 5;

    for (
        let i = 0;
        i < list.length;
        i += batchSize
    ) {

        const batch =
            list.slice(
                i,
                i + batchSize
            );

        await Promise.all(

            batch.map(
                game =>
                    getSteamCover(game.name)
            )

        );

        batch.forEach(game => {

            const cards =
                document.querySelectorAll(
                    ".game-card"
                );

            let card = null;

            cards.forEach(currentCard => {

                if (
                    currentCard.dataset.game ===
                    game.name
                ) {

                    card = currentCard;

                }

            });

            if (!card) {
                return;
            }

            const oldCover =
                card.querySelector(
                    ".game-cover"
                );

            if (!oldCover) {
                return;
            }

            const newHTML =
                createCover(game);

            const temporary =
                document.createElement("div");

            temporary.innerHTML =
                newHTML.trim();

            const newCover =
                temporary.firstElementChild;

            oldCover.replaceWith(
                newCover
            );

        });

    }

}
