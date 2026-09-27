```javascript
const homePage = document.getElementById("homePage");
const libraryPage = document.getElementById("libraryPage");

const artinButton = document.getElementById("artinButton");
const artinButton2 = document.getElementById("artinButton2");
const backButton = document.getElementById("backButton");


// رفتن به صفحه بازی‌ها
function openLibrary() {
    homePage.style.display = "none";
    libraryPage.style.display = "block";

    window.scrollTo(0, 0);
}


// برگشت به صفحه اصلی
function goHome() {
    libraryPage.style.display = "none";
    homePage.style.display = "block";

    window.scrollTo(0, 0);
}


// دکمه ورود به دنیای بازی‌ها
if (artinButton) {
    artinButton.onclick = openLibrary;
}


// دکمه مشاهده همه بازی‌ها
if (artinButton2) {
    artinButton2.onclick = openLibrary;
}


// دکمه برگشت
if (backButton) {
    backButton.onclick = goHome;
}


// جستجوی بازی‌ها
const searchBox = document.getElementById("gameSearch");
const gameCards = document.querySelectorAll(".library-card");
const gameCount = document.getElementById("gameCount");
const noResults = document.getElementById("noResults");

let currentFilter = "all";


function filterGames() {

    const searchText = searchBox.value.toLowerCase().trim();

    let count = 0;


    gameCards.forEach(function(card) {

        const title =
            card.getAttribute("data-title").toLowerCase();

        const category =
            card.getAttribute("data-category").toLowerCase();


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


    gameCount.textContent = count + " بازی";


    if (count === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}


// جستجو
if (searchBox) {

    searchBox.addEventListener(
        "input",
        filterGames
    );

}


// فیلترها
const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function(button) {

    button.onclick = function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentFilter =
            button.getAttribute("data-filter");


        filterGames();

    };

});


// دکمه‌های مشاهده بازی
const viewButtons =
    document.querySelectorAll(".view-game");


viewButtons.forEach(function(button) {

    button.onclick = function() {

        const card =
            button.closest(".library-card");

        const title =
            card.querySelector("h2").textContent;

        alert(
            "صفحه اختصاصی " +
            title.trim() +
            " به‌زودی ساخته می‌شود."
        );

    };

});
```
