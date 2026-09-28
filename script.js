// ======================================================
// ZEUS GAMING - SCRIPT.JS
// Steam Covers + 20 Games Pagination
// ======================================================


// ======================================================
// GAMES
// ======================================================

const games = [
    { name: "Grand Theft Auto V", genre: "Action", year: 2013, rating: 9.5 },
    { name: "Red Dead Redemption 2", genre: "Action", year: 2018, rating: 9.8 },
    { name: "Cyberpunk 2077", genre: "RPG", year: 2020, rating: 9.0 },
    { name: "The Witcher 3", genre: "RPG", year: 2015, rating: 9.7 },
    { name: "Elden Ring", genre: "RPG", year: 2022, rating: 9.6 },
    { name: "God of War", genre: "Action", year: 2018, rating: 9.5 },
    { name: "God of War Ragnarök", genre: "Action", year: 2022, rating: 9.6 },
    { name: "Hogwarts Legacy", genre: "RPG", year: 2023, rating: 8.8 },
    { name: "Resident Evil 4", genre: "Horror", year: 2023, rating: 9.4 },
    { name: "Resident Evil Village", genre: "Horror", year: 2021, rating: 9.0 },
    { name: "Resident Evil 2", genre: "Horror", year: 2019, rating: 9.3 },
    { name: "Resident Evil 3", genre: "Horror", year: 2020, rating: 8.4 },
    { name: "Resident Evil 7", genre: "Horror", year: 2017, rating: 9.0 },
    { name: "Resident Evil 5", genre: "Action", year: 2009, rating: 8.0 },
    { name: "Resident Evil 6", genre: "Action", year: 2012, rating: 7.8 },
    { name: "Silent Hill 2", genre: "Horror", year: 2024, rating: 9.1 },
    { name: "Dead Space", genre: "Horror", year: 2023, rating: 9.0 },
    { name: "The Last of Us Part I", genre: "Action", year: 2022, rating: 9.2 },
    { name: "The Last of Us Part II", genre: "Action", year: 2020, rating: 9.3 },
    { name: "Days Gone", genre: "Action", year: 2019, rating: 8.5 },

    { name: "Horizon Zero Dawn", genre: "Action", year: 2017, rating: 9.0 },
    { name: "Horizon Forbidden West", genre: "Action", year: 2022, rating: 9.1 },
    { name: "Ghost of Tsushima", genre: "Action", year: 2020, rating: 9.4 },
    { name: "Death Stranding", genre: "Action", year: 2019, rating: 8.9 },
    { name: "Death Stranding 2", genre: "Action", year: 2025, rating: 9.2 },
    { name: "Uncharted 4", genre: "Action", year: 2016, rating: 9.3 },
    { name: "Uncharted Legacy of Thieves", genre: "Action", year: 2022, rating: 9.0 },
    { name: "Marvel's Spider-Man", genre: "Action", year: 2018, rating: 9.2 },
    { name: "Spider-Man Miles Morales", genre: "Action", year: 2020, rating: 8.8 },
    { name: "Spider-Man 2", genre: "Action", year: 2023, rating: 9.3 },
    { name: "Batman Arkham Asylum", genre: "Action", year: 2009, rating: 9.0 },
    { name: "Batman Arkham City", genre: "Action", year: 2011, rating: 9.4 },
    { name: "Batman Arkham Knight", genre: "Action", year: 2015, rating: 9.2 },
    { name: "Assassin's Creed II", genre: "Action", year: 2009, rating: 9.1 },
    { name: "Assassin's Creed Brotherhood", genre: "Action", year: 2010, rating: 9.0 },
    { name: "Assassin's Creed Revelations", genre: "Action", year: 2011, rating: 8.5 },
    { name: "Assassin's Creed III", genre: "Action", year: 2012, rating: 8.4 },
    { name: "Assassin's Creed IV Black Flag", genre: "Action", year: 2013, rating: 9.0 },
    { name: "Assassin's Creed Origins", genre: "RPG", year: 2017, rating: 9.0 },
    { name: "Assassin's Creed Odyssey", genre: "RPG", year: 2018, rating: 9.0 },

    { name: "Assassin's Creed Valhalla", genre: "RPG", year: 2020, rating: 8.5 },
    { name: "Far Cry 3", genre: "Action", year: 2012, rating: 9.0 },
    { name: "Far Cry 4", genre: "Action", year: 2014, rating: 8.8 },
    { name: "Far Cry 5", genre: "Action", year: 2018, rating: 8.6 },
    { name: "Far Cry 6", genre: "Action", year: 2021, rating: 8.0 },
    { name: "Far Cry New Dawn", genre: "Action", year: 2019, rating: 7.8 },
    { name: "Crysis", genre: "FPS", year: 2007, rating: 8.8 },
    { name: "Crysis 2", genre: "FPS", year: 2011, rating: 8.7 },
    { name: "Crysis 3", genre: "FPS", year: 2013, rating: 8.5 },
    { name: "Metro 2033 Redux", genre: "FPS", year: 2014, rating: 9.0 },
    { name: "Metro Last Light Redux", genre: "FPS", year: 2014, rating: 8.8 },
    { name: "Metro Exodus", genre: "FPS", year: 2019, rating: 9.0 },
    { name: "Metro Exodus Enhanced Edition", genre: "FPS", year: 2021, rating: 9.0 },
    { name: "Call of Duty 4 Modern Warfare", genre: "FPS", year: 2007, rating: 9.2 },
    { name: "Call of Duty Modern Warfare 2", genre: "FPS", year: 2009, rating: 9.4 },
    { name: "Call of Duty Black Ops", genre: "FPS", year: 2010, rating: 9.2 },
    { name: "Call of Duty Modern Warfare 3", genre: "FPS", year: 2011, rating: 8.8 },
    { name: "Call of Duty Black Ops II", genre: "FPS", year: 2012, rating: 9.0 },
    { name: "Call of Duty Ghosts", genre: "FPS", year: 2013, rating: 7.8 },
    { name: "Call of Duty Advanced Warfare", genre: "FPS", year: 2014, rating: 8.0 },

    { name: "Call of Duty Black Ops III", genre: "FPS", year: 2015, rating: 8.2 },
    { name: "Call of Duty Infinite Warfare", genre: "FPS", year: 2016, rating: 7.8 },
    { name: "Call of Duty WWII", genre: "FPS", year: 2017, rating: 8.2 },
    { name: "Call of Duty Black Ops 4", genre: "FPS", year: 2018, rating: 8.0 },
    { name: "Call of Duty Modern Warfare", genre: "FPS", year: 2019, rating: 8.7 },
    { name: "Call of Duty Black Ops Cold War", genre: "FPS", year: 2020, rating: 8.2 },
    { name: "Call of Duty Vanguard", genre: "FPS", year: 2021, rating: 7.5 },
    { name: "Call of Duty Modern Warfare II", genre: "FPS", year: 2022, rating: 8.2 },
    { name: "Call of Duty Modern Warfare III", genre: "FPS", year: 2023, rating: 7.8 },
    { name: "DOOM", genre: "FPS", year: 2016, rating: 9.2 },
    { name: "DOOM Eternal", genre: "FPS", year: 2020, rating: 9.4 },
    { name: "Wolfenstein The New Order", genre: "FPS", year: 2014, rating: 8.8 },
    { name: "Wolfenstein II The New Colossus", genre: "FPS", year: 2017, rating: 8.7 },
    { name: "Titanfall 2", genre: "FPS", year: 2016, rating: 9.2 },
    { name: "Battlefield 3", genre: "FPS", year: 2011, rating: 8.8 },
    { name: "Battlefield 4", genre: "FPS", year: 2013, rating: 8.7 },
    { name: "Battlefield 1", genre: "FPS", year: 2016, rating: 8.9 },
    { name: "Battlefield V", genre: "FPS", year: 2018, rating: 8.0 },
    { name: "Battlefield 2042", genre: "FPS", year: 2021, rating: 7.2 },
    { name: "Counter-Strike 2", genre: "FPS", year: 2023, rating: 8.8 },

    { name: "Valorant", genre: "FPS", year: 2020, rating: 8.5 },
    { name: "Apex Legends", genre: "FPS", year: 2019, rating: 8.8 },
    { name: "Overwatch 2", genre: "FPS", year: 2022, rating: 8.0 },
    { name: "Rainbow Six Siege", genre: "FPS", year: 2015, rating: 8.8 },
    { name: "PUBG", genre: "Battle Royale", year: 2017, rating: 8.5 },
    { name: "Fortnite", genre: "Battle Royale", year: 2017, rating: 8.7 },
    { name: "Minecraft", genre: "Adventure", year: 2011, rating: 9.5 },
    { name: "Terraria", genre: "Adventure", year: 2011, rating: 9.3 },
    { name: "Valheim", genre: "Survival", year: 2021, rating: 8.8 },
    { name: "Rust", genre: "Survival", year: 2018, rating: 8.5 },
    { name: "Subnautica", genre: "Survival", year: 2018, rating: 9.2 },
    { name: "Subnautica Below Zero", genre: "Survival", year: 2021, rating: 8.4 },
    { name: "No Man's Sky", genre: "Adventure", year: 2016, rating: 8.5 },
    { name: "Starfield", genre: "RPG", year: 2023, rating: 8.0 },
    { name: "Fallout 4", genre: "RPG", year: 2015, rating: 8.8 },
    { name: "Fallout New Vegas", genre: "RPG", year: 2010, rating: 9.2 },
    { name: "Skyrim", genre: "RPG", year: 2011, rating: 9.5 },
    { name: "Baldur's Gate 3", genre: "RPG", year: 2023, rating: 9.8 },
    { name: "Dragon Age Inquisition", genre: "RPG", year: 2014, rating: 8.8 },
    { name: "Mass Effect", genre: "RPG", year: 2007, rating: 9.0 },

    { name: "Mass Effect 2", genre: "RPG", year: 2010, rating: 9.5 },
    { name: "Mass Effect 3", genre: "RPG", year: 2012, rating: 9.0 },
    { name: "Dark Souls", genre: "RPG", year: 2011, rating: 9.3 },
    { name: "Dark Souls II", genre: "RPG", year: 2014, rating: 8.7 },
    { name: "Dark Souls III", genre: "RPG", year: 2016, rating: 9.4 },
    { name: "Sekiro Shadows Die Twice", genre: "Action", year: 2019, rating: 9.5 },
    { name: "Lies of P", genre: "RPG", year: 2023, rating: 9.0 },
    { name: "Monster Hunter World", genre: "RPG", year: 2018, rating: 9.0 },
    { name: "Final Fantasy VII Remake", genre: "RPG", year: 2020, rating: 9.0 },
    { name: "Final Fantasy XVI", genre: "RPG", year: 2023, rating: 8.8 },
    { name: "Kingdom Hearts III", genre: "RPG", year: 2019, rating: 8.5 },
    { name: "Persona 5 Royal", genre: "RPG", year: 2019, rating: 9.5 },
    { name: "Yakuza 0", genre: "Action", year: 2015, rating: 9.2 },
    { name: "Like a Dragon", genre: "RPG", year: 2020, rating: 9.0 },
    { name: "Like a Dragon Infinite Wealth", genre: "RPG", year: 2024, rating: 9.1 },
    { name: "Dying Light", genre: "Action", year: 2015, rating: 8.8 },
    { name: "Dying Light 2", genre: "Action", year: 2022, rating: 8.0 },
    { name: "Dead Island 2", genre: "Action", year: 2023, rating: 8.2 },
    { name: "State of Decay 2", genre: "Survival", year: 2018, rating: 8.2 },
    { name: "Left 4 Dead 2", genre: "FPS", year: 2009, rating: 9.4 },

    { name: "Portal", genre: "Puzzle", year: 2007, rating: 9.5 },
    { name: "Portal 2", genre: "Puzzle", year: 2011, rating: 9.8 },
    { name: "Half-Life 2", genre: "FPS", year: 2004, rating: 9.7 },
    { name: "Half-Life Alyx", genre: "VR", year: 2020, rating: 9.6 },
    { name: "Dota 2", genre: "Strategy", year: 2013, rating: 8.8 },
    { name: "League of Legends", genre: "MOBA", year: 2009, rating: 8.8 },
    { name: "StarCraft II", genre: "Strategy", year: 2010, rating: 9.4 },
    { name: "Age of Empires II", genre: "Strategy", year: 1999, rating: 9.4 },
    { name: "Age of Empires IV", genre: "Strategy", year: 2021, rating: 8.8 },
    { name: "Civilization VI", genre: "Strategy", year: 2016, rating: 9.0 },
    { name: "Total War Warhammer III", genre: "Strategy", year: 2022, rating: 8.8 },
    { name: "XCOM 2", genre: "Strategy", year: 2016, rating: 9.0 },
    { name: "Frostpunk", genre: "Strategy", year: 2018, rating: 8.8 },
    { name: "Cities Skylines", genre: "Simulation", year: 2015, rating: 9.0 },
    { name: "The Sims 4", genre: "Simulation", year: 2014, rating: 8.5 },
    { name: "Euro Truck Simulator 2", genre: "Simulation", year: 2012, rating: 9.3 },
    { name: "American Truck Simulator", genre: "Simulation", year: 2016, rating: 9.2 },
    { name: "Forza Horizon 4", genre: "Racing", year: 2018, rating: 9.2 },
    { name: "Forza Horizon 5", genre: "Racing", year: 2021, rating: 9.4 },
    { name: "Forza Motorsport", genre: "Racing", year: 2023, rating: 8.3 },

    { name: "Need for Speed Most Wanted", genre: "Racing", year: 2005, rating: 9.4 },
    { name: "Need for Speed Carbon", genre: "Racing", year: 2006, rating: 8.8 },
    { name: "Need for Speed Hot Pursuit", genre: "Racing", year: 2010, rating: 8.7 },
    { name: "Need for Speed Rivals", genre: "Racing", year: 2013, rating: 8.2 },
    { name: "Need for Speed Heat", genre: "Racing", year: 2019, rating: 8.5 },
    { name: "Need for Speed Unbound", genre: "Racing", year: 2022, rating: 8.0 },
    { name: "Dirt Rally", genre: "Racing", year: 2015, rating: 8.8 },
    { name: "Dirt Rally 2.0", genre: "Racing", year: 2019, rating: 9.0 },
    { name: "Assetto Corsa", genre: "Racing", year: 2014, rating: 9.0 },
    { name: "F1 2023", genre: "Racing", year: 2023, rating: 8.0 },
    { name: "EA Sports FC 24", genre: "Sports", year: 2023, rating: 8.0 },
    { name: "EA Sports FC 25", genre: "Sports", year: 2024, rating: 8.0 },
    { name: "eFootball 2024", genre: "Sports", year: 2023, rating: 7.5 },
    { name: "PES 2021", genre: "Sports", year: 2020, rating: 8.8 },
    { name: "NBA 2K24", genre: "Sports", year: 2023, rating: 7.8 },
    { name: "WWE 2K24", genre: "Sports", year: 2024, rating: 8.5 },
    { name: "Tony Hawk's Pro Skater 1 + 2", genre: "Sports", year: 2020, rating: 9.0 },
    { name: "Rocket League", genre: "Sports", year: 2015, rating: 9.0 },
    { name: "Tekken 8", genre: "Fighting", year: 2024, rating: 9.0 },
    { name: "Street Fighter 6", genre: "Fighting", year: 2023, rating: 9.2 },

    { name: "Mortal Kombat 11", genre: "Fighting", year: 2019, rating: 8.8 },
    { name: "Mortal Kombat 1", genre: "Fighting", year: 2023, rating: 8.0 },
    { name: "Devil May Cry 5", genre: "Action", year: 2019, rating: 9.3 },
    { name: "Nioh", genre: "Action", year: 2017, rating: 8.8 },
    { name: "Nioh 2", genre: "Action", year: 2020, rating: 9.0 },
    { name: "Control", genre: "Action", year: 2019, rating: 9.0 },
    { name: "Alan Wake", genre: "Action", year: 2010, rating: 8.8 },
    { name: "Alan Wake 2", genre: "Horror", year: 2023, rating: 9.2 },
    { name: "Quantum Break", genre: "Action", year: 2016, rating: 8.5 },
    { name: "Watch Dogs", genre: "Action", year: 2014, rating: 8.0 },
    { name: "Watch Dogs 2", genre: "Action", year: 2016, rating: 8.7 },
    { name: "Watch Dogs Legion", genre: "Action", year: 2020, rating: 7.8 },
    { name: "Sleeping Dogs", genre: "Action", year: 2012, rating: 9.0 },
    { name: "Just Cause 3", genre: "Action", year: 2015, rating: 8.3 },
    { name: "Just Cause 4", genre: "Action", year: 2018, rating: 7.8 },
    { name: "Mafia Definitive Edition", genre: "Action", year: 2020, rating: 8.8 },
    { name: "Mafia II", genre: "Action", year: 2010, rating: 9.0 },
    { name: "Mafia III", genre: "Action", year: 2016, rating: 7.8 },
    { name: "L.A. Noire", genre: "Action", year: 2011, rating: 8.8 },
    { name: "Hitman", genre: "Action", year: 2016, rating: 9.0 },

    { name: "Hitman 2", genre: "Action", year: 2018, rating: 9.0 },
    { name: "Hitman 3", genre: "Action", year: 2021, rating: 9.2 },
    { name: "Deathloop", genre: "Action", year: 2021, rating: 8.5 },
    { name: "Dishonored", genre: "Action", year: 2012, rating: 9.2 },
    { name: "Dishonored 2", genre: "Action", year: 2016, rating: 9.0 },
    { name: "Prey", genre: "Action", year: 2017, rating: 8.8 },
    { name: "The Outer Worlds", genre: "RPG", year: 2019, rating: 8.3 },
    { name: "Atomic Heart", genre: "Action", year: 2023, rating: 8.0 },
    { name: "S.T.A.L.K.E.R. Shadow of Chernobyl", genre: "FPS", year: 2007, rating: 9.0 },
    { name: "S.T.A.L.K.E.R. 2", genre: "FPS", year: 2024, rating: 8.5 },
    { name: "Kingdom Come Deliverance", genre: "RPG", year: 2018, rating: 9.0 },
    { name: "Kingdom Come Deliverance II", genre: "RPG", year: 2025, rating: 9.2 },
    { name: "Mount & Blade Warband", genre: "RPG", year: 2010, rating: 9.0 },
    { name: "Mount & Blade II Bannerlord", genre: "RPG", year: 2022, rating: 8.8 },
    { name: "The Forest", genre: "Survival", year: 2018, rating: 9.0 },
    { name: "Sons of the Forest", genre: "Survival", year: 2024, rating: 8.8 },
    { name: "Amnesia The Dark Descent", genre: "Horror", year: 2010, rating: 9.0 },
    { name: "Outlast", genre: "Horror", year: 2013, rating: 9.0 },
    { name: "Outlast 2", genre: "Horror", year: 2017, rating: 8.2 },
    { name: "Little Nightmares", genre: "Horror", year: 2017, rating: 8.8 },

    { name: "Little Nightmares II", genre: "Horror", year: 2021, rating: 9.0 },
    { name: "Inside", genre: "Adventure", year: 2016, rating: 9.2 },
    { name: "Limbo", genre: "Adventure", year: 2010, rating: 9.0 },
    { name: "Ori and the Blind Forest", genre: "Adventure", year: 2015, rating: 9.3 },
    { name: "Ori and the Will of the Wisps", genre: "Adventure", year: 2020, rating: 9.4 },
    { name: "Hades", genre: "Action", year: 2020, rating: 9.5 },
    { name: "Hollow Knight", genre: "Adventure", year: 2017, rating: 9.6 },
    { name: "Cuphead", genre: "Action", year: 2017, rating: 9.2 },
    { name: "Celeste", genre: "Adventure", year: 2018, rating: 9.4 },
    { name: "It Takes Two", genre: "Adventure", year: 2021, rating: 9.5 },
    { name: "A Way Out", genre: "Adventure", year: 2018, rating: 8.8 },
    { name: "Detroit Become Human", genre: "Adventure", year: 2018, rating: 9.2 },
    { name: "Heavy Rain", genre: "Adventure", year: 2010, rating: 8.8 },
    { name: "Beyond Two Souls", genre: "Adventure", year: 2013, rating: 8.5 },
    { name: "Life is Strange", genre: "Adventure", year: 2015, rating: 9.0 },
    { name: "Life is Strange 2", genre: "Adventure", year: 2018, rating: 8.5 },
    { name: "Stray", genre: "Adventure", year: 2022, rating: 9.0 },
    { name: "Kena Bridge of Spirits", genre: "Adventure", year: 2021, rating: 8.8 },
    { name: "Tomb Raider", genre: "Action", year: 2013, rating: 9.0 },
    { name: "Rise of the Tomb Raider", genre: "Action", year: 2015, rating: 9.1 },

    { name: "Shadow of the Tomb Raider", genre: "Action", year: 2018, rating: 8.8 },
    { name: "Just Dance 2024", genre: "Sports", year: 2023, rating: 7.5 },
    { name: "Golf With Your Friends", genre: "Sports", year: 2020, rating: 8.0 },
    { name: "Wreckfest", genre: "Racing", year: 2018, rating: 8.7 },
    { name: "GRID Legends", genre: "Racing", year: 2022, rating: 8.0 },
    { name: "Trackmania", genre: "Racing", year: 2020, rating: 8.5 },
    { name: "SnowRunner", genre: "Simulation", year: 2020, rating: 9.0 },
    { name: "F1 2024", genre: "Racing", year: 2024, rating: 8.0 },
    { name: "TEKKEN 7", genre: "Fighting", year: 2017, rating: 8.8 },
    { name: "Dragon Ball FighterZ", genre: "Fighting", year: 2018, rating: 9.0 }
];


// ======================================================
// DOM ELEMENTS
// ======================================================

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const gameCount = document.getElementById("gameCount");
const noResult = document.getElementById("noResult");
const sortSelect = document.getElementById("sortSelect");

const gameModal = document.getElementById("gameModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");


// ======================================================
// PAGINATION
// ======================================================

const GAMES_PER_PAGE = 20;

let currentPage = 1;

let selectedCategory = "همه";

const loadMoreBtn = document.getElementById("loadMoreBtn");


// ======================================================
// STEAM CACHE
// ======================================================

const coverCache = new Map();
const coverLoading = new Map();


// ======================================================
// STEAM ALIASES
// ======================================================

const titleAliases = {

    "Grand Theft Auto V": "Grand Theft Auto V",

    "God of War Ragnarök": "God of War Ragnarök",

    "The Witcher 3": "The Witcher 3: Wild Hunt",

    "Metro 2033 Redux": "Metro 2033",
    "Metro Last Light Redux": "Metro: Last Light",
    "Metro Exodus Enhanced Edition": "Metro Exodus",

    "Call of Duty 4 Modern Warfare":
        "Call of Duty 4: Modern Warfare",

    "Call of Duty Modern Warfare 2":
        "Call of Duty: Modern Warfare 2",

    "Call of Duty Modern Warfare 3":
        "Call of Duty: Modern Warfare 3",

    "Call of Duty Modern Warfare":
        "Call of Duty: Modern Warfare",

    "Call of Duty Modern Warfare II":
        "Call of Duty: Modern Warfare II",

    "Call of Duty Modern Warfare III":
        "Call of Duty: Modern Warfare III",

    "Call of Duty WWII":
        "Call of Duty: WWII",

    "Resident Evil 7":
        "Resident Evil 7: Biohazard",

    "Marvel's Spider-Man":
        "Marvel's Spider-Man",

    "Spider-Man Miles Morales":
        "Marvel's Spider-Man: Miles Morales",

    "Spider-Man 2":
        "Marvel's Spider-Man 2",

    "S.T.A.L.K.E.R. Shadow of Chernobyl":
        "S.T.A.L.K.E.R.: Shadow of Chernobyl",

    "S.T.A.L.K.E.R. 2":
        "S.T.A.L.K.E.R. 2: Heart of Chornobyl",

    "Assassin's Creed IV Black Flag":
        "Assassin's Creed IV: Black Flag",

    "Dying Light 2":
        "Dying Light 2 Stay Human",

    "Mafia Definitive Edition":
        "Mafia: Definitive Edition",

    "PES 2021":
        "eFootball PES 2021",

    "eFootball 2024":
        "eFootball",

    "F1 2023":
        "F1 23",

    "F1 2024":
        "F1 24",

    "Need for Speed Most Wanted":
        "Need for Speed: Most Wanted",

    "Need for Speed Hot Pursuit":
        "Need for Speed: Hot Pursuit",

    "The Last of Us Part I":
        "The Last of Us Part I",

    "The Last of Us Part II":
        "The Last of Us Part II",

    "Uncharted 4":
        "Uncharted 4: A Thief's End",

    "Uncharted Legacy of Thieves":
        "Uncharted: Legacy of Thieves Collection",

    "Batman Arkham Asylum":
        "Batman: Arkham Asylum",

    "Batman Arkham City":
        "Batman: Arkham City",

    "Batman Arkham Knight":
        "Batman: Arkham Knight",

    "Half-Life Alyx":
        "Half-Life: Alyx",

    "Cities Skylines":
        "Cities: Skylines",

    "Mount & Blade Warband":
        "Mount & Blade: Warband",

    "Mount & Blade II Bannerlord":
        "Mount & Blade II: Bannerlord",

    "Kingdom Come Deliverance":
        "Kingdom Come: Deliverance",

    "Kingdom Come Deliverance II":
        "Kingdom Come: Deliverance II",

    "Watch Dogs Legion":
        "Watch Dogs: Legion",

    "L.A. Noire":
        "L.A. Noire",

    "Detroit Become Human":
        "Detroit: Become Human",

    "Life is Strange":
        "Life Is Strange",

    "Kena Bridge of Spirits":
        "Kena: Bridge of Spirits",

    "Rise of the Tomb Raider":
        "Rise of the Tomb Raider",

    "Shadow of the Tomb Raider":
        "Shadow of the Tomb Raider",

    "Tony Hawk's Pro Skater 1 + 2":
        "Tony Hawk's Pro Skater 1 + 2",

    "Dragon Ball FighterZ":
        "DRAGON BALL FighterZ"
};


// ======================================================
// POSSIBLE STEAM TITLES
// ======================================================

function getPossibleTitles(gameName) {

    const titles = [];

    if (titleAliases[gameName]) {
        titles.push(titleAliases[gameName]);
    }

    titles.push(gameName);

    return [...new Set(titles)];
}


// ======================================================
// NORMALIZE TITLE
// ======================================================

function normalizeTitle(title) {

    return title
        .toLowerCase()
        .replace(/[™®©]/g, "")
        .replace(/[:\-–—]/g, " ")
        .replace(/[^\w\s\u0600-\u06FF]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


// ======================================================
// GET STEAM COVER
// ======================================================

async function getSteamCover(gameName) {

    if (coverCache.has(gameName)) {
        return coverCache.get(gameName);
    }

    if (coverLoading.has(gameName)) {
        return coverLoading.get(gameName);
    }

    const promise = (async () => {

        const possibleTitles = getPossibleTitles(gameName);

        for (const title of possibleTitles) {

            try {

                const url =
                    "https://store.steampowered.com/api/storesearch/" +
                    "?term=" +
                    encodeURIComponent(title) +
                    "&cc=us&l=en";

                const response = await fetch(url);

                if (!response.ok) {
                    continue;
                }

                const data = await response.json();

                if (
                    !data ||
                    !Array.isArray(data.items) ||
                    data.items.length === 0
                ) {
                    continue;
                }


                const normalizedSearch =
                    normalizeTitle(title);


                // اول دنبال تطابق دقیق بگرد
                let result = data.items.find(item => {

                    return normalizeTitle(item.name) === normalizedSearch;

                });


                // اگر دقیق نبود، دنبال تطابق نزدیک بگرد
                if (!result) {

                    result = data.items.find(item => {

                        const steamName =
                            normalizeTitle(item.name);

                        return (
                            steamName.includes(normalizedSearch) ||
                            normalizedSearch.includes(steamName)
                        );

                    });

                }


                // در نهایت اولین نتیجه
                if (!result) {
                    result = data.items[0];
                }


                if (result && result.id) {

                    const appId = result.id;

                    const cover =
                        `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900_2x.jpg`;


                    coverCache.set(gameName, cover);

                    return cover;
                }

            } catch (error) {

                console.warn(
                    "Steam cover error:",
                    gameName,
                    error
                );

            }
        }


        // اگر کاور پیدا نشد
        coverCache.set(gameName, null);

        return null;

    })();


    coverLoading.set(gameName, promise);

    const result = await promise;

    coverLoading.delete(gameName);

    return result;
}


// ======================================================
// COVER PLACEHOLDER
// ======================================================

function createPlaceholder() {

    return `
        <div class="cover-placeholder">
            <span>کاور Steam موجود نیست</span>
        </div>
    `;
}


// ======================================================
// CREATE COVER
// ======================================================

function createCover(game, container) {

    if (!container) return;

    const cover = coverCache.get(game.name);


    if (!cover) {

        container.innerHTML = createPlaceholder();

        return;
    }


    container.innerHTML = `
        <img
            src="${cover}"
            alt="${game.name}"
            loading="lazy"
            draggable="false"
        >
    `;


    const img = container.querySelector("img");


    img.addEventListener("error", () => {

        coverCache.set(game.name, null);

        container.innerHTML =
            createPlaceholder();

    });

}


// ======================================================
// LOAD COVERS
// ======================================================

async function loadCovers(list) {

    /*
        فقط بازی‌های موجود در صفحه فعلی
        کاور می‌گیرند.
    */

    const batchSize = 5;


    for (
        let i = 0;
        i < list.length;
        i += batchSize
    ) {

        const batch =
            list.slice(i, i + batchSize);


        await Promise.all(

            batch.map(async game => {

                const cover =
                    await getSteamCover(game.name);


                const containers =
                    document.querySelectorAll(
                        `[data-game-name="${CSS.escape(game.name)}"]`
                    );


                containers.forEach(container => {

                    if (cover) {

                        container.innerHTML = `
                            <img
                                src="${cover}"
                                alt="${game.name}"
                                loading="lazy"
                                draggable="false"
                            >
                        `;

                    } else {

                        container.innerHTML =
                            createPlaceholder();

                    }

                });

            })

        );


        /*
            بعد از هر 5 بازی کمی مکث می‌کنیم
            تا مرورگر تحت فشار قرار نگیرد.
        */

        await new Promise(resolve =>
            setTimeout(resolve, 100)
        );
    }
}


// ======================================================
// GET FILTERED GAMES
// ======================================================

function getFilteredGames() {

    let list = [...games];


    // CATEGORY
    if (
        selectedCategory &&
        selectedCategory !== "همه"
    ) {

        list = list.filter(game =>
            game.genre === selectedCategory
        );

    }


    // SEARCH
    const search =
        searchInput?.value
            ?.trim()
            .toLowerCase();


    if (search) {

        list = list.filter(game =>

            game.name
                .toLowerCase()
                .includes(search)

            ||

            game.genre
                .toLowerCase()
                .includes(search)

        );

    }


    // SORT
    if (sortSelect) {

        const sort =
            sortSelect.value;


        if (sort === "name") {

            list.sort((a, b) =>
                a.name.localeCompare(
                    b.name,
                    "en"
                )
            );

        }


        else if (sort === "rating") {

            list.sort((a, b) =>
                Number(b.rating) -
                Number(a.rating)
            );

        }


        else if (sort === "year") {

            list.sort((a, b) =>
                Number(b.year) -
                Number(a.year)
            );

        }

    }


    return list;
}


// ======================================================
// RENDER GAMES
// ======================================================

function renderGames(list) {

    if (!gamesGrid) return;


    gamesGrid.innerHTML = "";


    const visibleGames =
        list.slice(
            0,
            currentPage * GAMES_PER_PAGE
        );


    // NO RESULT
    if (
        visibleGames.length === 0
    ) {

        if (noResult) {
            noResult.style.display =
                "block";
        }

        if (loadMoreBtn) {
            loadMoreBtn.style.display =
                "none";
        }

        if (gameCount) {
            gameCount.textContent =
                "0 بازی";
        }

        return;
    }


    if (noResult) {
        noResult.style.display =
            "none";
    }


    // CREATE CARDS
    visibleGames.forEach(game => {

        const card =
            document.createElement("div");


        card.className =
            "game-card";


        card.innerHTML = `

            <div
                class="game-cover"
                data-game-name="${escapeHtmlAttribute(game.name)}"
            >
                <div class="cover-loading">
                    در حال بارگذاری کاور...
                </div>
            </div>


            <div class="game-info">

                <h3>
                    ${escapeHtml(game.name)}
                </h3>


                <div class="game-meta">

                    <span>
                        ${escapeHtml(game.genre)}
                    </span>

                    <span>
                        ${game.year}
                    </span>

                </div>


                <div class="game-rating">
                    ⭐ ${game.rating}
                </div>

            </div>
        `;


        card.addEventListener(
            "click",
            () => openGame(game)
        );


        gamesGrid.appendChild(card);

    });


    // COUNT
    if (gameCount) {

        gameCount.textContent =
            `${visibleGames.length} بازی از ${list.length}`;

    }


    // LOAD COVERS
    loadCovers(visibleGames);


    // LOAD MORE BUTTON
    if (loadMoreBtn) {

        if (
            visibleGames.length <
            list.length
        ) {

            loadMoreBtn.style.display =
                "block";

            loadMoreBtn.textContent =
                "ادامه";

        } else {

            loadMoreBtn.style.display =
                "none";

        }

    }

}


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeHtmlAttribute(text) {

    return escapeHtml(text);

}


// ======================================================
// LOAD MORE BUTTON
// ======================================================

if (loadMoreBtn) {

    loadMoreBtn.addEventListener(
        "click",
        () => {

            currentPage++;


            const list =
                getFilteredGames();


            renderGames(list);


            /*
                بعد از کلیک، صفحه کمی پایین
                می‌رود تا بازی‌های جدید دیده شوند.
            */

            setTimeout(() => {

                const cards =
                    gamesGrid.querySelectorAll(
                        ".game-card"
                    );


                if (cards.length > 20) {

                    const target =
                        cards[
                            cards.length - 20
                        ];


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }, 150);

        }
    );

}


// ======================================================
// SEARCH
// ======================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            currentPage = 1;

            renderGames(
                getFilteredGames()
            );

        }
    );

}


// ======================================================
// CLEAR SEARCH
// ======================================================

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        () => {

            if (searchInput) {
                searchInput.value = "";
            }

            currentPage = 1;

            renderGames(
                getFilteredGames()
            );

        }
    );

}


// ======================================================
// SORT
// ======================================================

if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        () => {

            currentPage = 1;

            renderGames(
                getFilteredGames()
            );

        }
    );

}


// ======================================================
// CATEGORY
// ======================================================

document.addEventListener(
    "click",
    event => {

        const category =
            event.target.closest(
                "[data-category]"
            );


        if (!category) return;


        selectedCategory =
            category.dataset.category;


        currentPage = 1;


        renderGames(
            getFilteredGames()
        );

    }
);


// ======================================================
// OPEN GAME MODAL
// ======================================================

async function openGame(game) {

    if (!gameModal) return;


    if (modalTitle) {
        modalTitle.textContent =
            game.name;
    }


    if (modalCategory) {
        modalCategory.textContent =
            game.genre;
    }


    if (modalYear) {
        modalYear.textContent =
            game.year;
    }


    if (modalRating) {
        modalRating.textContent =
            game.rating;
    }


    if (modalDescription) {

        modalDescription.textContent =
            `${game.name} یک بازی ${game.genre} است که در سال ${game.year} منتشر شده است.`;

    }


    if (modalImage) {

        modalImage.innerHTML = `
            <div class="cover-loading">
                در حال بارگذاری کاور...
            </div>
        `;


        const cover =
            await getSteamCover(
                game.name
            );


        if (cover) {

            modalImage.innerHTML = `
                <img
                    src="${cover}"
                    alt="${escapeHtml(game.name)}"
                    draggable="false"
                >
            `;

        } else {

            modalImage.innerHTML =
                createPlaceholder();

        }

    }


    gameModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


// ======================================================
// CLOSE MODAL
// ======================================================

function closeGameModal() {

    if (!gameModal) return;


    gameModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeGameModal
    );

}


if (gameModal) {

    gameModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                gameModal
            ) {

                closeGameModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeGameModal();

        }

    }
);


// ======================================================
// MOBILE MENU
// ======================================================

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );

const navMenu =
    document.querySelector(
        ".nav-menu"
    );


if (
    menuToggle &&
    navMenu
) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


// ======================================================
// INITIAL LOAD
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        currentPage = 1;

        renderGames(
            getFilteredGames()
        );

    }
);


// اگر DOM قبلاً لود شده باشد
if (
    document.readyState !==
    "loading"
) {

    currentPage = 1;

    renderGames(
        getFilteredGames()
    );

}
