```javascript
document.addEventListener("DOMContentLoaded", function () {

    const homePage = document.getElementById("homePage");
    const libraryPage = document.getElementById("libraryPage");

    const artinButton = document.getElementById("artinButton");
    const artinButton2 = document.getElementById("artinButton2");
    const backButton = document.getElementById("backButton");

    const gameSearch = document.getElementById("gameSearch");
    const gamesGrid = document.getElementById("gamesGrid");
    const gameCount = document.getElementById("gameCount");
    const noResults = document.getElementById("noResults");

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const gameCards =
        document.querySelectorAll(".library-card");



    /* ================= OPEN LIBRARY ================= */

    function openLibrary() {

        homePage.style.display = "none";

        libraryPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }



    /* ================= BACK HOME ================= */

    function goHome() {

        libraryPage.classList.remove("active");

        homePage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }



    /* ================= BUTTONS ================= */

    if (artinButton) {

        artinButton.addEventListener(
            "click",
            openLibrary
        );

    }


    if (artinButton2) {

        artinButton2.addEventListener(
            "click",
            openLibrary
        );

    }


    if (backButton) {

        backButton.addEventListener(
            "click",
            goHome
        );

    }



    /* ================= LIBRARY FILTER ================= */

    let currentFilter = "all";


    function updateGames() {

        const searchText =
            gameSearch.value
                .trim()
                .toLowerCase();


        let visibleGames = 0;


        gameCards.forEach(function (card) {

            const title =
                card.dataset.title
                    .toLowerCase();

            const category =
                card.dataset.category
                    .toLowerCase();


            const matchesSearch =
                title.includes(searchText);


            const matchesFilter =
                currentFilter === "all" ||
                category.includes(currentFilter);


            if (
                matchesSearch &&
                matchesFilter
            ) {

                card.classList.remove("hidden");

                visibleGames++;

            } else {

                card.classList.add("hidden");

            }

        });


        gameCount.textContent =
            visibleGames + " بازی";


        if (visibleGames === 0) {

            noResults.classList.add("show");

            gamesGrid.style.display = "none";

        } else {

            noResults.classList.remove("show");

            gamesGrid.style.display = "grid";

        }

    }



    /* ================= SEARCH ================= */

    if (gameSearch) {

        gameSearch.addEventListener(
            "input",
            updateGames
        );

    }



    /* ================= FILTER BUTTONS ================= */

    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add("active");


                currentFilter =
                    button.dataset.filter;


                updateGames();

            }
        );

    });



    /* ================= GAME BUTTONS ================= */

    const gameButtons =
        document.querySelectorAll(".view-game");


    gameButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(
                        ".library-card"
                    );


                const title =
                    card.querySelector(
                        "h2"
                    ).textContent;


                alert(
                    "صفحه اختصاصی «" +
                    title.trim() +
                    "» به‌زودی ساخته می‌شود."
                );

            }
        );

    });


});
```
