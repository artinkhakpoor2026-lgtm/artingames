const homePage = document.getElementById("homePage");
const libraryPage = document.getElementById("libraryPage");

const artinButton = document.getElementById("artinButton");
const artinButton2 = document.getElementById("artinButton2");
const backButton = document.getElementById("backButton");


// ===============================
// رفتن به صفحه دنیای بازی‌ها
// ===============================

function openLibrary() {

    if (homePage) {
        homePage.style.display = "none";
    }

    if (libraryPage) {
        libraryPage.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// برگشت به صفحه اصلی
// ===============================

function goHome() {

    if (libraryPage) {
        libraryPage.style.display = "none";
    }

    if (homePage) {
        homePage.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// دکمه ورود به دنیای بازی‌ها
// ===============================

if (artinButton) {
    artinButton.addEventListener("click", openLibrary);
}


// ===============================
// دکمه مشاهده همه بازی‌ها
// ===============================

if (artinButton2) {
    artinButton2.addEventListener("click", openLibrary);
}


// ===============================
// دکمه برگشت
// ===============================

if (backButton) {
    backButton.addEventListener("click", goHome);
}


// ===============================
// جستجوی بازی‌ها
// ===============================

const searchBox = document.getElementById("gameSearch");

const gameCards = document.querySelectorAll(".library-card");

const gameCount = document.getElementById("gameCount");

const noResults = document.getElementById("noResults");

let currentFilter = "all";


function filterGames() {

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase().trim();

    let count = 0;


    gameCards.forEach(function(card) {

        const title =
            (card.getAttribute("data-title") || "")
            .toLowerCase();

        const category =
            (card.getAttribute("data-category") || "")
            .toLowerCase();


        const searchMatch =
            title.includes(searchText);


        const filterMatch =
            currentFilter === "all" ||
            category.includes(currentFilter);


        if (searchMatch && filterMatch) {

            card.classList.remove("hidden");

            count++;

        } else {

            card.classList.add("hidden");

        }

    });


    if (gameCount) {

        gameCount.textContent =
            count + " بازی";

    }


    if (noResults) {

        if (count === 0) {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }

}


// ===============================
// فعال کردن جستجو
// ===============================

if (searchBox) {

    searchBox.addEventListener(
        "input",
        filterGames
    );

}


// ===============================
// فیلتر دسته‌بندی بازی‌ها
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            filterButtons.forEach(
                function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            currentFilter =
                button.getAttribute(
                    "data-filter"
                ) || "all";


            filterGames();

        }
    );

});


// ===============================
// دکمه صفحه هر بازی
// ===============================

const viewButtons =
    document.querySelectorAll(".view-game");


viewButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const card =
                button.closest(".library-card");


            if (!card) {
                return;
            }


            const titleElement =
                card.querySelector("h2");


            const title =
                titleElement
                    ? titleElement.textContent.trim()
                    : "این بازی";


            alert(
                "صفحه اختصاصی «" +
                title +
                "» به‌زودی ساخته می‌شود."
            );

        }
    );

});


// ===============================
// اجرای اولیه فیلتر
// ===============================

filterGames();
