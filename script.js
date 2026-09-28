// ======================================================
// GAMEZONE
// 200 GAMES + STEAM COVERS
// ======================================================


// ======================================================
// GAMES
// ======================================================

const games = [

    { name:"Grand Theft Auto V", genre:"اکشن", year:2013, rating:9.7 },
    { name:"Red Dead Redemption 2", genre:"ماجراجویی", year:2018, rating:9.8 },
    { name:"Cyberpunk 2077", genre:"RPG", year:2020, rating:9.0 },
    { name:"The Witcher 3", genre:"RPG", year:2015, rating:9.8 },
    { name:"Elden Ring", genre:"RPG", year:2022, rating:9.6 },
    { name:"God of War", genre:"اکشن", year:2018, rating:9.5 },
    { name:"God of War Ragnarök", genre:"اکشن", year:2022, rating:9.5 },
    { name:"Hogwarts Legacy", genre:"ماجراجویی", year:2023, rating:8.8 },
    { name:"Resident Evil 4", genre:"ترسناک", year:2023, rating:9.4 },
    { name:"Resident Evil Village", genre:"ترسناک", year:2021, rating:9.1 },

    { name:"Resident Evil 2", genre:"ترسناک", year:2019, rating:9.3 },
    { name:"Resident Evil 3", genre:"ترسناک", year:2020, rating:8.6 },
    { name:"Resident Evil 7", genre:"ترسناک", year:2017, rating:9.0 },
    { name:"Resident Evil 5", genre:"اکشن", year:2009, rating:8.5 },
    { name:"Resident Evil 6", genre:"اکشن", year:2012, rating:7.9 },
    { name:"Silent Hill 2", genre:"ترسناک", year:2024, rating:9.2 },
    { name:"Dead Space", genre:"ترسناک", year:2023, rating:9.1 },
    { name:"The Last of Us Part I", genre:"ماجراجویی", year:2022, rating:9.6 },
    { name:"The Last of Us Part II", genre:"اکشن", year:2020, rating:9.4 },
    { name:"Days Gone", genre:"اکشن", year:2019, rating:8.7 },

    { name:"Horizon Zero Dawn", genre:"RPG", year:2017, rating:9.0 },
    { name:"Horizon Forbidden West", genre:"RPG", year:2022, rating:9.1 },
    { name:"Ghost of Tsushima", genre:"اکشن", year:2020, rating:9.5 },
    { name:"Death Stranding", genre:"ماجراجویی", year:2019, rating:8.8 },
    { name:"Death Stranding 2", genre:"ماجراجویی", year:2025, rating:9.0 },
    { name:"Uncharted 4", genre:"ماجراجویی", year:2016, rating:9.4 },
    { name:"Uncharted Legacy of Thieves", genre:"ماجراجویی", year:2022, rating:9.1 },
    { name:"Marvel's Spider-Man", genre:"اکشن", year:2018, rating:9.2 },
    { name:"Spider-Man Miles Morales", genre:"اکشن", year:2020, rating:9.0 },
    { name:"Spider-Man 2", genre:"اکشن", year:2023, rating:9.4 },

    { name:"Batman Arkham Asylum", genre:"اکشن", year:2009, rating:9.2 },
    { name:"Batman Arkham City", genre:"اکشن", year:2011, rating:9.5 },
    { name:"Batman Arkham Knight", genre:"اکشن", year:2015, rating:9.3 },
    { name:"Assassin's Creed II", genre:"اکشن", year:2009, rating:9.2 },
    { name:"Assassin's Creed Brotherhood", genre:"اکشن", year:2010, rating:9.1 },
    { name:"Assassin's Creed Revelations", genre:"اکشن", year:2011, rating:8.9 },
    { name:"Assassin's Creed III", genre:"اکشن", year:2012, rating:8.8 },
    { name:"Assassin's Creed IV Black Flag", genre:"ماجراجویی", year:2013, rating:9.3 },
    { name:"Assassin's Creed Origins", genre:"RPG", year:2017, rating:9.0 },
    { name:"Assassin's Creed Odyssey", genre:"RPG", year:2018, rating:9.1 },

    { name:"Assassin's Creed Valhalla", genre:"RPG", year:2020, rating:8.8 },
    { name:"Far Cry 3", genre:"شوتر", year:2012, rating:9.2 },
    { name:"Far Cry 4", genre:"شوتر", year:2014, rating:8.8 },
    { name:"Far Cry 5", genre:"شوتر", year:2018, rating:8.7 },
    { name:"Far Cry 6", genre:"شوتر", year:2021, rating:8.4 },
    { name:"Far Cry New Dawn", genre:"شوتر", year:2019, rating:7.9 },
    { name:"Crysis", genre:"شوتر", year:2007, rating:8.8 },
    { name:"Crysis 2", genre:"شوتر", year:2011, rating:8.7 },
    { name:"Crysis 3", genre:"شوتر", year:2013, rating:8.5 },
    { name:"Metro 2033 Redux", genre:"شوتر", year:2014, rating:8.9 },

    { name:"Metro Last Light Redux", genre:"شوتر", year:2014, rating:9.0 },
    { name:"Metro Exodus", genre:"شوتر", year:2019, rating:9.3 },
    { name:"Metro Exodus Enhanced Edition", genre:"شوتر", year:2021, rating:9.4 },
    { name:"Call of Duty 4 Modern Warfare", genre:"شوتر", year:2007, rating:9.4 },
    { name:"Call of Duty Modern Warfare 2", genre:"شوتر", year:2009, rating:9.5 },
    { name:"Call of Duty Black Ops", genre:"شوتر", year:2010, rating:9.3 },
    { name:"Call of Duty Modern Warfare 3", genre:"شوتر", year:2011, rating:9.0 },
    { name:"Call of Duty Black Ops II", genre:"شوتر", year:2012, rating:9.2 },
    { name:"Call of Duty Ghosts", genre:"شوتر", year:2013, rating:8.0 },
    { name:"Call of Duty Advanced Warfare", genre:"شوتر", year:2014, rating:8.2 },

    { name:"Call of Duty Black Ops III", genre:"شوتر", year:2015, rating:8.5 },
    { name:"Call of Duty Infinite Warfare", genre:"شوتر", year:2016, rating:8.1 },
    { name:"Call of Duty WWII", genre:"شوتر", year:2017, rating:8.4 },
    { name:"Call of Duty Black Ops 4", genre:"شوتر", year:2018, rating:8.2 },
    { name:"Call of Duty Modern Warfare", genre:"شوتر", year:2019, rating:8.9 },
    { name:"Call of Duty Black Ops Cold War", genre:"شوتر", year:2020, rating:8.6 },
    { name:"Call of Duty Vanguard", genre:"شوتر", year:2021, rating:7.9 },
    { name:"Call of Duty Modern Warfare II", genre:"شوتر", year:2022, rating:8.5 },
    { name:"Call of Duty Modern Warfare III", genre:"شوتر", year:2023, rating:8.0 },
    { name:"DOOM", genre:"شوتر", year:2016, rating:9.0 },

    { name:"DOOM Eternal", genre:"شوتر", year:2020, rating:9.4 },
    { name:"Wolfenstein The New Order", genre:"شوتر", year:2014, rating:8.9 },
    { name:"Wolfenstein II The New Colossus", genre:"شوتر", year:2017, rating:8.7 },
    { name:"Titanfall 2", genre:"شوتر", year:2016, rating:9.3 },
    { name:"Battlefield 3", genre:"شوتر", year:2011, rating:9.0 },
    { name:"Battlefield 4", genre:"شوتر", year:2013, rating:9.1 },
    { name:"Battlefield 1", genre:"شوتر", year:2016, rating:9.2 },
    { name:"Battlefield V", genre:"شوتر", year:2018, rating:8.5 },
    { name:"Battlefield 2042", genre:"شوتر", year:2021, rating:7.4 },
    { name:"Counter-Strike 2", genre:"شوتر", year:2023, rating:9.0 },

    { name:"Valorant", genre:"شوتر", year:2020, rating:8.8 },
    { name:"Apex Legends", genre:"شوتر", year:2019, rating:8.9 },
    { name:"Overwatch 2", genre:"شوتر", year:2022, rating:8.3 },
    { name:"Rainbow Six Siege", genre:"شوتر", year:2015, rating:9.0 },
    { name:"PUBG", genre:"شوتر", year:2017, rating:8.5 },
    { name:"Fortnite", genre:"شوتر", year:2017, rating:8.8 },
    { name:"Minecraft", genre:"ماجراجویی", year:2011, rating:9.5 },
    { name:"Terraria", genre:"ماجراجویی", year:2011, rating:9.2 },
    { name:"Valheim", genre:"RPG", year:2021, rating:8.8 },
    { name:"Rust", genre:"اکشن", year:2018, rating:8.4 },

    { name:"Subnautica", genre:"ماجراجویی", year:2018, rating:9.1 },
    { name:"Subnautica Below Zero", genre:"ماجراجویی", year:2021, rating:8.5 },
    { name:"No Man's Sky", genre:"ماجراجویی", year:2016, rating:8.7 },
    { name:"Starfield", genre:"RPG", year:2023, rating:8.2 },
    { name:"Fallout 4", genre:"RPG", year:2015, rating:9.0 },
    { name:"Fallout New Vegas", genre:"RPG", year:2010, rating:9.4 },
    { name:"Skyrim", genre:"RPG", year:2011, rating:9.6 },
    { name:"Baldur's Gate 3", genre:"RPG", year:2023, rating:9.8 },
    { name:"Dragon Age Inquisition", genre:"RPG", year:2014, rating:8.8 },
    { name:"Mass Effect", genre:"RPG", year:2007, rating:9.0 },

    { name:"Mass Effect 2", genre:"RPG", year:2010, rating:9.6 },
    { name:"Mass Effect 3", genre:"RPG", year:2012, rating:9.2 },
    { name:"Dark Souls", genre:"RPG", year:2011, rating:9.2 },
    { name:"Dark Souls II", genre:"RPG", year:2014, rating:8.7 },
    { name:"Dark Souls III", genre:"RPG", year:2016, rating:9.4 },
    { name:"Sekiro Shadows Die Twice", genre:"اکشن", year:2019, rating:9.6 },
    { name:"Lies of P", genre:"RPG", year:2023, rating:9.0 },
    { name:"Monster Hunter World", genre:"RPG", year:2018, rating:9.1 },
    { name:"Final Fantasy VII Remake", genre:"RPG", year:2020, rating:9.3 },
    { name:"Final Fantasy XVI", genre:"RPG", year:2023, rating:8.9 },

    { name:"Kingdom Hearts III", genre:"RPG", year:2019, rating:8.5 },
    { name:"Persona 5 Royal", genre:"RPG", year:2019, rating:9.6 },
    { name:"Yakuza 0", genre:"اکشن", year:2015, rating:9.3 },
    { name:"Like a Dragon", genre:"RPG", year:2020, rating:8.9 },
    { name:"Like a Dragon Infinite Wealth", genre:"RPG", year:2024, rating:9.0 },
    { name:"Dying Light", genre:"اکشن", year:2015, rating:9.0 },
    { name:"Dying Light 2", genre:"اکشن", year:2022, rating:8.3 },
    { name:"Dead Island 2", genre:"اکشن", year:2023, rating:8.6 },
    { name:"State of Decay 2", genre:"اکشن", year:2018, rating:8.1 },
    { name:"Left 4 Dead 2", genre:"شوتر", year:2009, rating:9.5 },

    { name:"Portal", genre:"ماجراجویی", year:2007, rating:9.5 },
    { name:"Portal 2", genre:"ماجراجویی", year:2011, rating:9.8 },
    { name:"Half-Life 2", genre:"شوتر", year:2004, rating:9.8 },
    { name:"Half-Life Alyx", genre:"شوتر", year:2020, rating:9.6 },
    { name:"Dota 2", genre:"استراتژی", year:2013, rating:8.8 },
    { name:"League of Legends", genre:"استراتژی", year:2009, rating:9.0 },
    { name:"StarCraft II", genre:"استراتژی", year:2010, rating:9.5 },
    { name:"Age of Empires II", genre:"استراتژی", year:1999, rating:9.7 },
    { name:"Age of Empires IV", genre:"استراتژی", year:2021, rating:8.8 },
    { name:"Civilization VI", genre:"استراتژی", year:2016, rating:9.1 },

    { name:"Total War Warhammer III", genre:"استراتژی", year:2022, rating:8.8 },
    { name:"XCOM 2", genre:"استراتژی", year:2016, rating:9.0 },
    { name:"Frostpunk", genre:"استراتژی", year:2018, rating:9.0 },
    { name:"Cities Skylines", genre:"استراتژی", year:2015, rating:9.2 },
    { name:"The Sims 4", genre:"استراتژی", year:2014, rating:8.4 },
    { name:"Euro Truck Simulator 2", genre:"مسابقه‌ای", year:2012, rating:9.3 },
    { name:"American Truck Simulator", genre:"مسابقه‌ای", year:2016, rating:9.0 },
    { name:"Forza Horizon 4", genre:"مسابقه‌ای", year:2018, rating:9.3 },
    { name:"Forza Horizon 5", genre:"مسابقه‌ای", year:2021, rating:9.5 },
    { name:"Forza Motorsport", genre:"مسابقه‌ای", year:2023, rating:8.5 },

    { name:"Need for Speed Most Wanted", genre:"مسابقه‌ای", year:2005, rating:9.5 },
    { name:"Need for Speed Carbon", genre:"مسابقه‌ای", year:2006, rating:9.0 },
    { name:"Need for Speed Hot Pursuit", genre:"مسابقه‌ای", year:2010, rating:8.8 },
    { name:"Need for Speed Rivals", genre:"مسابقه‌ای", year:2013, rating:8.4 },
    { name:"Need for Speed Heat", genre:"مسابقه‌ای", year:2019, rating:8.7 },
    { name:"Need for Speed Unbound", genre:"مسابقه‌ای", year:2022, rating:8.4 },
    { name:"Dirt Rally", genre:"مسابقه‌ای", year:2015, rating:8.8 },
    { name:"Dirt Rally 2.0", genre:"مسابقه‌ای", year:2019, rating:9.0 },
    { name:"Assetto Corsa", genre:"مسابقه‌ای", year:2014, rating:9.0 },
    { name:"F1 2023", genre:"مسابقه‌ای", year:2023, rating:8.5 },

    { name:"EA Sports FC 24", genre:"ورزشی", year:2023, rating:8.0 },
    { name:"EA Sports FC 25", genre:"ورزشی", year:2024, rating:8.1 },
    { name:"eFootball 2024", genre:"ورزشی", year:2023, rating:7.8 },
    { name:"PES 2021", genre:"ورزشی", year:2020, rating:9.0 },
    { name:"NBA 2K24", genre:"ورزشی", year:2023, rating:8.1 },
    { name:"WWE 2K24", genre:"ورزشی", year:2024, rating:8.3 },
    { name:"Tony Hawk's Pro Skater 1 + 2", genre:"ورزشی", year:2020, rating:9.1 },
    { name:"Rocket League", genre:"ورزشی", year:2015, rating:9.2 },
    { name:"Tekken 8", genre:"اکشن", year:2024, rating:9.0 },
    { name:"Street Fighter 6", genre:"اکشن", year:2023, rating:9.2 },

    { name:"Mortal Kombat 11", genre:"اکشن", year:2019, rating:9.0 },
    { name:"Mortal Kombat 1", genre:"اکشن", year:2023, rating:8.5 },
    { name:"Devil May Cry 5", genre:"اکشن", year:2019, rating:9.4 },
    { name:"Nioh", genre:"RPG", year:2017, rating:8.8 },
    { name:"Nioh 2", genre:"RPG", year:2020, rating:9.0 },
    { name:"Control", genre:"اکشن", year:2019, rating:9.0 },
    { name:"Alan Wake", genre:"ترسناک", year:2010, rating:8.8 },
    { name:"Alan Wake 2", genre:"ترسناک", year:2023, rating:9.5 },
    { name:"Quantum Break", genre:"اکشن", year:2016, rating:8.5 },
    { name:"Watch Dogs", genre:"اکشن", year:2014, rating:8.3 },

    { name:"Watch Dogs 2", genre:"اکشن", year:2016, rating:8.8 },
    { name:"Watch Dogs Legion", genre:"اکشن", year:2020, rating:8.0 },
    { name:"Sleeping Dogs", genre:"اکشن", year:2012, rating:9.0 },
    { name:"Just Cause 3", genre:"اکشن", year:2015, rating:8.4 },
    { name:"Just Cause 4", genre:"اکشن", year:2018, rating:8.0 },
    { name:"Mafia Definitive Edition", genre:"اکشن", year:2020, rating:8.9 },
    { name:"Mafia II", genre:"اکشن", year:2010, rating:9.1 },
    { name:"Mafia III", genre:"اکشن", year:2016, rating:8.1 },
    { name:"L.A. Noire", genre:"ماجراجویی", year:2011, rating:8.9 },
    { name:"Hitman", genre:"اکشن", year:2016, rating:9.0 },

    { name:"Hitman 2", genre:"اکشن", year:2018, rating:9.1 },
    { name:"Hitman 3", genre:"اکشن", year:2021, rating:9.2 },
    { name:"Deathloop", genre:"شوتر", year:2021, rating:8.8 },
    { name:"Dishonored", genre:"اکشن", year:2012, rating:9.2 },
    { name:"Dishonored 2", genre:"اکشن", year:2016, rating:9.0 },
    { name:"Prey", genre:"شوتر", year:2017, rating:8.9 },
    { name:"The Outer Worlds", genre:"RPG", year:2019, rating:8.6 },
    { name:"Atomic Heart", genre:"شوتر", year:2023, rating:8.3 },
    { name:"S.T.A.L.K.E.R. Shadow of Chernobyl", genre:"شوتر", year:2007, rating:9.0 },
    { name:"S.T.A.L.K.E.R. 2", genre:"شوتر", year:2024, rating:8.8 },

    { name:"Kingdom Come Deliverance", genre:"RPG", year:2018, rating:8.8 },
    { name:"Kingdom Come Deliverance II", genre:"RPG", year:2025, rating:9.2 },
    { name:"Mount & Blade Warband", genre:"RPG", year:2010, rating:9.0 },
    { name:"Mount & Blade II Bannerlord", genre:"RPG", year:2022, rating:9.0 },
    { name:"The Forest", genre:"ترسناک", year:2018, rating:8.9 },
    { name:"Sons of the Forest", genre:"ترسناک", year:2024, rating:8.7 },
    { name:"Amnesia The Dark Descent", genre:"ترسناک", year:2010, rating:8.8 },
    { name:"Outlast", genre:"ترسناک", year:2013, rating:8.9 },
    { name:"Outlast 2", genre:"ترسناک", year:2017, rating:8.4 },
    { name:"Little Nightmares", genre:"ترسناک", year:2017, rating:8.9 },

    { name:"Little Nightmares II", genre:"ترسناک", year:2021, rating:9.0 },
    { name:"Inside", genre:"ماجراجویی", year:2016, rating:9.0 },
    { name:"Limbo", genre:"ماجراجویی", year:2010, rating:8.8 },
    { name:"Ori and the Blind Forest", genre:"ماجراجویی", year:2015, rating:9.3 },
    { name:"Ori and the Will of the Wisps", genre:"ماجراجویی", year:2020, rating:9.4 },
    { name:"Hades", genre:"RPG", year:2020, rating:9.5 },
    { name:"Hollow Knight", genre:"ماجراجویی", year:2017, rating:9.5 },
    { name:"Cuphead", genre:"اکشن", year:2017, rating:9.0 },
    { name:"Celeste", genre:"ماجراجویی", year:2018, rating:9.3 },
    { name:"It Takes Two", genre:"ماجراجویی", year:2021, rating:9.5 },

    { name:"A Way Out", genre:"ماجراجویی", year:2018, rating:8.8 },
    { name:"Detroit Become Human", genre:"ماجراجویی", year:2018, rating:9.4 },
    { name:"Heavy Rain", genre:"ماجراجویی", year:2010, rating:8.7 },
    { name:"Beyond Two Souls", genre:"ماجراجویی", year:2013, rating:8.4 },
    { name:"Life is Strange", genre:"ماجراجویی", year:2015, rating:9.0 },
    { name:"Life is Strange 2", genre:"ماجراجویی", year:2018, rating:8.5 },
    { name:"Stray", genre:"ماجراجویی", year:2022, rating:8.8 },
    { name:"Kena Bridge of Spirits", genre:"ماجراجویی", year:2021, rating:8.7 },
    { name:"Tomb Raider", genre:"ماجراجویی", year:2013, rating:9.0 },
    { name:"Rise of the Tomb Raider", genre:"ماجراجویی", year:2015, rating:9.2 },

    { name:"Shadow of the Tomb Raider", genre:"ماجراجویی", year:2018, rating:9.0 },
    { name:"Just Dance 2024", genre:"ورزشی", year:2023, rating:7.8 },
    { name:"Golf With Your Friends", genre:"ورزشی", year:2020, rating:8.0 },
    { name:"Wreckfest", genre:"مسابقه‌ای", year:2018, rating:8.8 },
    { name:"GRID Legends", genre:"مسابقه‌ای", year:2022, rating:8.1 },
    { name:"Trackmania", genre:"مسابقه‌ای", year:2020, rating:8.7 },
    { name:"SnowRunner", genre:"مسابقه‌ای", year:2020, rating:8.8 },
    { name:"F1 2024", genre:"مسابقه‌ای", year:2024, rating:8.4 },
    { name:"TEKKEN 7", genre:"اکشن", year:2015, rating:9.0 },
    { name:"Dragon Ball FighterZ", genre:"اکشن", year:2018, rating:8.9 }

];


// ======================================================
// ELEMENTS
// ======================================================

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const gameCount = document.getElementById("gameCount");
const noResult = document.getElementById("noResult");
const sortSelect = document.getElementById("sortSelect");

const modal = document.getElementById("gameModal");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

let selectedCategory = "همه";


// ======================================================
// STEAM COVER CACHE
// ======================================================

const coverCache = new Map();
const coverLoading = new Map();


// ======================================================
// STEAM TITLE ALIASES
// ======================================================

const titleAliases = {

    "The Witcher 3": "The Witcher 3: Wild Hunt",

    "God of War Ragnarök": "God of War Ragnarök",

    "Metro 2033 Redux": "Metro 2033 Redux",

    "Metro Last Light Redux": "Metro: Last Light Redux",

    "Metro Exodus Enhanced Edition": "Metro Exodus Enhanced Edition",

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

    "Marvel's Spider-Man":
        "Marvel's Spider-Man Remastered",

    "Spider-Man Miles Morales":
        "Marvel's Spider-Man: Miles Morales",

    "Spider-Man 2":
        "Marvel's Spider-Man 2",

    "Batman Arkham Asylum":
        "Batman: Arkham Asylum GOTY Edition",

    "Batman Arkham City":
        "Batman: Arkham City - Game of the Year Edition",

    "Batman Arkham Knight":
        "Batman: Arkham Knight",

    "Assassin's Creed IV Black Flag":
        "Assassin's Creed IV Black Flag",

    "Dying Light 2":
        "Dying Light 2 Stay Human",

    "Mafia Definitive Edition":
        "Mafia: Definitive Edition",

    "PES 2021":
        "eFootball PES 2021 SEASON UPDATE",

    "eFootball 2024":
        "eFootball",

    "F1 2023":
        "EA SPORTS F1 23",

    "F1 2024":
        "EA SPORTS F1 24",

    "Need for Speed Most Wanted":
        "Need for Speed: Most Wanted",

    "Need for Speed Hot Pursuit":
        "Need for Speed: Hot Pursuit",

    "Uncharted 4":
        "UNCHARTED: Legacy of Thieves Collection",

    "Uncharted Legacy of Thieves":
        "UNCHARTED: Legacy of Thieves Collection",

    "Half-Life Alyx":
        "Half-Life: Alyx",

    "Age of Empires II":
        "Age of Empires II: Definitive Edition",

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

    "Devil May Cry 5":
        "Devil May Cry 5",

    "Watch Dogs Legion":
        "Watch Dogs: Legion",

    "L.A. Noire":
        "L.A. Noire",

    "Little Nightmares II":
        "Little Nightmares II",

    "Ori and the Blind Forest":
        "Ori and the Blind Forest: Definitive Edition",

    "Ori and the Will of the Wisps":
        "Ori and the Will of the Wisps",

    "It Takes Two":
        "It Takes Two",

    "A Way Out":
        "A Way Out",

    "Detroit Become Human":
        "Detroit: Become Human",

    "Life is Strange":
        "Life is Strange",

    "Life is Strange 2":
        "Life is Strange 2",

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
// POSSIBLE STEAM SEARCH TITLES
// ======================================================

function getPossibleTitles(gameName) {

    const titles = [];

    if (titleAliases[gameName]) {
        titles.push(titleAliases[gameName]);
    }

    titles.push(gameName);

    titles.push(
        gameName
            .replace(/:/g, "")
            .replace(/\./g, "")
            .replace(/'/g, "")
    );

    if (gameName.includes("Enhanced Edition")) {

        titles.push(
            gameName.replace(
                " Enhanced Edition",
                ""
            )
        );

    }

    return [...new Set(titles)];

}


// ======================================================
// NORMALIZE TITLE
// ======================================================

function normalizeTitle(title) {

    return title
        .toLowerCase()
        .replace(/[:.'’!+\-&]/g, "")
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
                    !Array.isArray(data.items) ||
                    data.items.length === 0
                ) {
                    continue;
                }

                const wanted =
                    normalizeTitle(title);

                let result =
                    data.items.find(item => {

                        if (!item.name) {
                            return false;
                        }

                        const found =
                            normalizeTitle(item.name);

                        return (
                            found === wanted ||
                            found.includes(wanted) ||
                            wanted.includes(found)
                        );

                    });

                if (!result) {
                    result = data.items[0];
                }

                if (!result || !result.id) {
                    continue;
                }

                const appId =
                    result.id;

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

            <div class="cover-loading">
                در حال دریافت کاور...
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

            const temporary =
                document.createElement("div");

            temporary.innerHTML =
                createCover(game).trim();

            const newCover =
                temporary.firstElementChild;

            if (newCover) {

                oldCover.replaceWith(
                    newCover
                );

            }

        });

    }

}


// ======================================================
// RENDER GAMES
// ======================================================

function renderGames(list) {

    gamesGrid.innerHTML = "";

    gameCount.textContent =
        list.length;

    if (list.length === 0) {

        noResult.style.display =
            "block";

        return;

    }

    noResult.style.display =
        "none";

    list.forEach(game => {

        const card =
            document.createElement("article");

        card.className =
            "game-card";

        card.dataset.game =
            game.name;

        card.innerHTML = `

            ${createPlaceholder(game)}

            <div class="game-info">

                <h3 title="${game.name}">
                    ${game.name}
                </h3>

                <div class="game-meta">

                    <span class="game-genre">
                        ${game.genre}
                    </span>

                    <span class="game-rating">
                        ⭐ ${game.rating}
                    </span>

                </div>

                <div class="game-year">
                    ${game.year}
                </div>

            </div>

        `;

        card.addEventListener(
            "click",
            () => openGame(game)
        );

        gamesGrid.appendChild(card);

    });

    loadCovers(list);

}


// ======================================================
// FILTER
// ======================================================

function filterGames() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();

    let result =
        games.filter(game => {

            const matchesSearch =
                game.name
                    .toLowerCase()
                    .includes(searchValue);

            const matchesCategory =
                selectedCategory === "همه" ||
                game.genre === selectedCategory;

            return (
                matchesSearch &&
                matchesCategory
            );

        });

    result =
        sortGames(result);

    renderGames(result);

}


// ======================================================
// SORT
// ======================================================

function sortGames(list) {

    const result =
        [...list];

    switch (sortSelect.value) {

        case "name":

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "en"
                    )
            );

            break;

        case "year":

            result.sort(
                (a, b) =>
                    b.year - a.year
            );

            break;

        case "rating":

            result.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;

    }

    return result;

}


// ======================================================
// CATEGORY BUTTONS
// ======================================================

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                selectedCategory =
                    button.dataset.category;

                filterGames();

            }
        );

    });


// ======================================================
// SEARCH
// ======================================================

searchInput.addEventListener(
    "input",
    filterGames
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        filterGames();

        searchInput.focus();

    }
);


// ======================================================
// SORT
// ======================================================

sortSelect.addEventListener(
    "change",
    filterGames
);


// ======================================================
// OPEN GAME
// ======================================================

async function openGame(game) {

    modalTitle.textContent =
        game.name;

    modalCategory.textContent =
        game.genre;

    modalYear.textContent =
        game.year;

    modalRating.textContent =
        game.rating;

    let cover =
        coverCache.get(game.name);

    if (cover) {

        modalImage.innerHTML = `

            <img
                src="${cover}"
                alt="کاور ${game.name}"
                style="
                    width:100%;
                    height:100%;
                    object-fit:cover;
                "
            >

        `;

    }
    else {

        modalImage.innerHTML = `

            <div class="modal-cover-loading">
                در حال دریافت کاور Steam...
            </div>

        `;

        cover =
            await getSteamCover(game.name);

        if (cover) {

            modalImage.innerHTML = `

                <img
                    src="${cover}"
                    alt="کاور ${game.name}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >

            `;

        }
        else {

            modalImage.innerHTML = `

                <div class="modal-cover-loading">
                    کاور Steam موجود نیست
                </div>

            `;

        }

    }

    modalDescription.textContent =
        `${game.name} یکی از بازی‌های سبک ${game.genre} است که در سال ${game.year} منتشر شده است و امتیاز ${game.rating} را در اطلاعات این سایت دارد.`;

    modal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


// ======================================================
// CLOSE MODAL
// ======================================================

function closeModal() {

    modal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


// ======================================================
// MOBILE MENU
// ======================================================

menuBtn.addEventListener(
    "click",
    () => {

        if (
            nav.style.display === "flex"
        ) {

            nav.style.display =
                "";

            return;

        }

        nav.style.display =
            "flex";

        nav.style.position =
            "absolute";

        nav.style.top =
            "80px";

        nav.style.right =
            "0";

        nav.style.left =
            "0";

        nav.style.padding =
            "25px";

        nav.style.background =
            "#0c0d11";

        nav.style.flexDirection =
            "column";

        nav.style.gap =
            "20px";

        nav.style.borderBottom =
            "1px solid #22252d";

    }
);


// ======================================================
// CHECK
// ======================================================

console.log(
    "GAMEZONE games:",
    games.length
);


// ======================================================
// START WEBSITE
// ======================================================

renderGames(games);
