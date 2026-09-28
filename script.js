/* =========================================================
   ARTIN GAMES
   200 GAMES - CLEAN VERSION
   20 GAMES PER LOAD
========================================================= */

const games = [

    // =========================
    // ACTION
    // =========================

    { name: "Grand Theft Auto V", id: 271590, category: "action", type: "اکشن", year: 2013 },
    { name: "Red Dead Redemption 2", id: 1174180, category: "action", type: "اکشن", year: 2018 },
    { name: "God of War", id: 1593500, category: "action", type: "اکشن", year: 2018 },
    { name: "God of War Ragnarök", id: 2322010, category: "action", type: "اکشن", year: 2022 },
    { name: "Marvel's Spider-Man Remastered", id: 1817070, category: "action", type: "اکشن", year: 2022 },
    { name: "Marvel's Spider-Man: Miles Morales", id: 1817190, category: "action", type: "اکشن", year: 2022 },
    { name: "Marvel's Spider-Man 2", id: 2651280, category: "action", type: "اکشن", year: 2025 },
    { name: "Days Gone", id: 1259420, category: "action", type: "اکشن", year: 2019 },
    { name: "Dying Light", id: 239140, category: "action", type: "اکشن", year: 2015 },
    { name: "Dying Light 2 Stay Human", id: 534380, category: "action", type: "اکشن", year: 2022 },
    { name: "Watch Dogs", id: 243470, category: "action", type: "اکشن", year: 2014 },
    { name: "Watch Dogs 2", id: 447040, category: "action", type: "اکشن", year: 2016 },
    { name: "Assassin's Creed II", id: 33230, category: "action", type: "اکشن", year: 2009 },
    { name: "Assassin's Creed IV Black Flag", id: 242050, category: "action", type: "اکشن", year: 2013 },
    { name: "Hitman", id: 236870, category: "action", type: "اکشن", year: 2016 },
    { name: "Hitman 2", id: 863550, category: "action", type: "اکشن", year: 2018 },
    { name: "Hitman 3", id: 1659040, category: "action", type: "اکشن", year: 2021 },
    { name: "Control Ultimate Edition", id: 870780, category: "action", type: "اکشن", year: 2019 },
    { name: "Sekiro: Shadows Die Twice", id: 814380, category: "action", type: "اکشن", year: 2019 },
    { name: "TEKKEN 8", id: 1778820, category: "action", type: "اکشن", year: 2024 },

    { name: "Street Fighter 6", id: 1364780, category: "action", type: "اکشن", year: 2023 },
    { name: "Mortal Kombat 11", id: 976310, category: "action", type: "اکشن", year: 2019 },
    { name: "Mortal Kombat 1", id: 1971870, category: "action", type: "اکشن", year: 2023 },
    { name: "Batman: Arkham Knight", id: 208650, category: "action", type: "اکشن", year: 2015 },
    { name: "Batman: Arkham City", id: 200260, category: "action", type: "اکشن", year: 2011 },
    { name: "Middle-earth: Shadow of Mordor", id: 241930, category: "action", type: "اکشن", year: 2014 },
    { name: "Middle-earth: Shadow of War", id: 356190, category: "action", type: "اکشن", year: 2017 },
    { name: "Nioh: Complete Edition", id: 485510, category: "action", type: "اکشن", year: 2017 },
    { name: "Nioh 2 – The Complete Edition", id: 1325200, category: "action", type: "اکشن", year: 2020 },
    { name: "Lords of the Fallen", id: 1501750, category: "action", type: "اکشن", year: 2023 },
    { name: "Remnant: From the Ashes", id: 617290, category: "action", type: "اکشن", year: 2019 },
    { name: "Remnant II", id: 1282100, category: "action", type: "اکشن", year: 2023 },
    { name: "Mafia: Definitive Edition", id: 1030840, category: "action", type: "اکشن", year: 2020 },
    { name: "Mafia II: Definitive Edition", id: 1030830, category: "action", type: "اکشن", year: 2020 },
    { name: "Mafia III: Definitive Edition", id: 360430, category: "action", type: "اکشن", year: 2016 },
    { name: "Sleeping Dogs: Definitive Edition", id: 307690, category: "action", type: "اکشن", year: 2014 },
    { name: "Just Cause 3", id: 225540, category: "action", type: "اکشن", year: 2015 },
    { name: "Just Cause 4", id: 517630, category: "action", type: "اکشن", year: 2018 },
    { name: "Mad Max", id: 234140, category: "action", type: "اکشن", year: 2015 },
    { name: "Bully: Scholarship Edition", id: 12200, category: "action", type: "اکشن", year: 2008 },

    // =========================
    // RPG
    // =========================

    { name: "The Witcher 3: Wild Hunt", id: 292030, category: "rpg", type: "RPG", year: 2015 },
    { name: "Cyberpunk 2077", id: 1091500, category: "rpg", type: "RPG", year: 2020 },
    { name: "Elden Ring", id: 1245620, category: "rpg", type: "RPG", year: 2022 },
    { name: "Cyberpunk 2077: Phantom Liberty", id: 2138330, category: "rpg", type: "RPG", year: 2023 },
    { name: "Hogwarts Legacy", id: 990080, category: "rpg", type: "RPG", year: 2023 },
    { name: "Assassin's Creed Origins", id: 582160, category: "rpg", type: "RPG", year: 2017 },
    { name: "Assassin's Creed Odyssey", id: 812140, category: "rpg", type: "RPG", year: 2018 },
    { name: "Assassin's Creed Valhalla", id: 2208920, category: "rpg", type: "RPG", year: 2020 },
    { name: "Dark Souls Remastered", id: 570940, category: "rpg", type: "RPG", year: 2018 },
    { name: "Dark Souls II", id: 236430, category: "rpg", type: "RPG", year: 2014 },
    { name: "Dark Souls II: Scholar of the First Sin", id: 335300, category: "rpg", type: "RPG", year: 2015 },
    { name: "Dark Souls III", id: 374320, category: "rpg", type: "RPG", year: 2016 },
    { name: "Baldur's Gate 3", id: 1086940, category: "rpg", type: "RPG", year: 2023 },
    { name: "Skyrim Special Edition", id: 489830, category: "rpg", type: "RPG", year: 2016 },
    { name: "Fallout 4", id: 377160, category: "rpg", type: "RPG", year: 2015 },
    { name: "Fallout: New Vegas", id: 22380, category: "rpg", type: "RPG", year: 2010 },
    { name: "Mass Effect Legendary Edition", id: 1328670, category: "rpg", type: "RPG", year: 2021 },
    { name: "Dragon Age: Inquisition", id: 1222690, category: "rpg", type: "RPG", year: 2014 },
    { name: "Kingdom Come: Deliverance", id: 379430, category: "rpg", type: "RPG", year: 2018 },
    { name: "Kingdom Come: Deliverance II", id: 1771300, category: "rpg", type: "RPG", year: 2025 },
    { name: "Palworld", id: 1623730, category: "rpg", type: "RPG", year: 2024 },
    { name: "Lies of P", id: 1627720, category: "rpg", type: "RPG", year: 2023 },
    { name: "Monster Hunter: World", id: 582010, category: "rpg", type: "RPG", year: 2018 },
    { name: "Monster Hunter Wilds", id: 2246340, category: "rpg", type: "RPG", year: 2025 },
    { name: "Starfield", id: 1716740, category: "rpg", type: "RPG", year: 2023 },

    { name: "Fallout 76", id: 1151340, category: "rpg", type: "RPG", year: 2018 },
    { name: "The Outer Worlds", id: 578650, category: "rpg", type: "RPG", year: 2019 },
    { name: "Mount & Blade II: Bannerlord", id: 261550, category: "rpg", type: "RPG", year: 2022 },
    { name: "Disco Elysium - The Final Cut", id: 632470, category: "rpg", type: "RPG", year: 2019 },
    { name: "Persona 5 Royal", id: 1687950, category: "rpg", type: "RPG", year: 2019 },

    // =========================
    // SHOOTER
    // =========================

    { name: "Metro 2033 Redux", id: 286690, category: "shooter", type: "شوتر", year: 2014 },
    { name: "Metro: Last Light Redux", id: 287390, category: "shooter", type: "شوتر", year: 2014 },
    { name: "Metro Exodus", id: 412020, category: "shooter", type: "شوتر", year: 2019 },
    { name: "DOOM", id: 379720, category: "shooter", type: "شوتر", year: 2016 },
    { name: "DOOM Eternal", id: 782330, category: "shooter", type: "شوتر", year: 2020 },
    { name: "Titanfall 2", id: 1237970, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Battlefield 1", id: 1238840, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Battlefield V", id: 1238810, category: "shooter", type: "شوتر", year: 2018 },
    { name: "Battlefield 2042", id: 1517290, category: "shooter", type: "شوتر", year: 2021 },
    { name: "Counter-Strike 2", id: 730, category: "shooter", type: "شوتر", year: 2023 },
    { name: "PAYDAY 2", id: 218620, category: "shooter", type: "شوتر", year: 2013 },
    { name: "Left 4 Dead 2", id: 550, category: "shooter", type: "شوتر", year: 2009 },
    { name: "Half-Life", id: 70, category: "shooter", type: "شوتر", year: 1998 },
    { name: "Half-Life 2", id: 220, category: "shooter", type: "شوتر", year: 2004 },
    { name: "Half-Life: Alyx", id: 546560, category: "shooter", type: "شوتر", year: 2020 },
    { name: "Far Cry 3", id: 220240, category: "shooter", type: "شوتر", year: 2012 },
    { name: "Far Cry 4", id: 298110, category: "shooter", type: "شوتر", year: 2014 },
    { name: "Far Cry 5", id: 939960, category: "shooter", type: "شوتر", year: 2018 },
    { name: "Far Cry 6", id: 2369390, category: "shooter", type: "شوتر", year: 2021 },
    { name: "Tom Clancy's The Division", id: 365590, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Tom Clancy's Ghost Recon Wildlands", id: 460930, category: "shooter", type: "شوتر", year: 2017 },
    { name: "Sniper Elite 4", id: 312660, category: "shooter", type: "شوتر", year: 2017 },
    { name: "Sniper Elite 5", id: 1029690, category: "shooter", type: "شوتر", year: 2022 },
    { name: "Wolfenstein: The New Order", id: 201810, category: "shooter", type: "شوتر", year: 2014 },
    { name: "Wolfenstein II: The New Colossus", id: 612880, category: "shooter", type: "شوتر", year: 2017 },
    { name: "RAGE 2", id: 548570, category: "shooter", type: "شوتر", year: 2019 },
    { name: "Prey", id: 480490, category: "shooter", type: "شوتر", year: 2017 },
    { name: "Borderlands 2", id: 49520, category: "shooter", type: "شوتر", year: 2012 },
    { name: "Borderlands 3", id: 397540, category: "shooter", type: "شوتر", year: 2019 },
    { name: "BioShock Infinite", id: 8870, category: "shooter", type: "شوتر", year: 2013 },

    { name: "Call of Duty: Black Ops III", id: 311210, category: "shooter", type: "شوتر", year: 2015 },
    { name: "Call of Duty: Infinite Warfare", id: 292730, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Call of Duty: WWII", id: 476600, category: "shooter", type: "شوتر", year: 2017 },
    { name: "Call of Duty: Black Ops Cold War", id: 1985810, category: "shooter", type: "شوتر", year: 2020 },
    { name: "Call of Duty: Modern Warfare II", id: 1938090, category: "shooter", type: "شوتر", year: 2022 },
    { name: "DOOM 3", id: 208200, category: "shooter", type: "شوتر", year: 2004 },
    { name: "Quake", id: 2310, category: "shooter", type: "شوتر", year: 1996 },
    { name: "Quake II", id: 2320, category: "shooter", type: "شوتر", year: 1997 },
    { name: "Killing Floor 2", id: 232090, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Deep Rock Galactic", id: 548430, category: "shooter", type: "شوتر", year: 2020 },
    { name: "Warframe", id: 230410, category: "shooter", type: "شوتر", year: 2013 },
    { name: "Destiny 2", id: 1085660, category: "shooter", type: "شوتر", year: 2017 },
    { name: "BioShock Remastered", id: 409710, category: "shooter", type: "شوتر", year: 2016 },
    { name: "Crysis Remastered", id: 1715130, category: "shooter", type: "شوتر", year: 2020 },
    { name: "Spec Ops: The Line", id: 50300, category: "shooter", type: "شوتر", year: 2012 },

    // =========================
    // HORROR
    // =========================

    { name: "Resident Evil 2", id: 883710, category: "horror", type: "ترسناک", year: 2019 },
    { name: "Resident Evil 3", id: 952060, category: "horror", type: "ترسناک", year: 2020 },
    { name: "Resident Evil 4", id: 2050650, category: "horror", type: "ترسناک", year: 2023 },
    { name: "Resident Evil 5", id: 21690, category: "horror", type: "ترسناک", year: 2009 },
    { name: "Resident Evil 6", id: 221040, category: "horror", type: "ترسناک", year: 2012 },
    { name: "Resident Evil 7 Biohazard", id: 418370, category: "horror", type: "ترسناک", year: 2017 },
    { name: "Resident Evil Village", id: 1196590, category: "horror", type: "ترسناک", year: 2021 },
    { name: "Silent Hill 2", id: 2124490, category: "horror", type: "ترسناک", year: 2024 },
    { name: "Dead Space", id: 1693980, category: "horror", type: "ترسناک", year: 2023 },
    { name: "Dead Space 2", id: 47780, category: "horror", type: "ترسناک", year: 2011 },
    { name: "Dead Space 3", id: 1238060, category: "horror", type: "ترسناک", year: 2013 },
    { name: "Alien: Isolation", id: 214490, category: "horror", type: "ترسناک", year: 2014 },
    { name: "Outlast", id: 238320, category: "horror", type: "ترسناک", year: 2013 },
    { name: "Outlast 2", id: 414700, category: "horror", type: "ترسناک", year: 2017 },
    { name: "The Evil Within", id: 268050, category: "horror", type: "ترسناک", year: 2014 },
    { name: "The Evil Within 2", id: 601430, category: "horror", type: "ترسناک", year: 2017 },
    { name: "Alan Wake", id: 108710, category: "horror", type: "ترسناک", year: 2010 },
    { name: "Alan Wake 2", id: 3159330, category: "horror", type: "ترسناک", year: 2023 },
    { name: "The Forest", id: 242760, category: "horror", type: "ترسناک", year: 2018 },
    { name: "Sons Of The Forest", id: 1326470, category: "horror", type: "ترسناک", year: 2024 },
    { name: "Phasmophobia", id: 739630, category: "horror", type: "ترسناک", year: 2020 },
    { name: "Amnesia: The Dark Descent", id: 57300, category: "horror", type: "ترسناک", year: 2010 },
    { name: "Amnesia: Rebirth", id: 999220, category: "horror", type: "ترسناک", year: 2020 },
    { name: "Little Nightmares", id: 424840, category: "horror", type: "ترسناک", year: 2017 },
    { name: "Little Nightmares II", id: 860510, category: "horror", type: "ترسناک", year: 2021 },
    { name: "The Outlast Trials", id: 1304930, category: "horror", type: "ترسناک", year: 2024 },
    { name: "Dead by Daylight", id: 381210, category: "horror", type: "ترسناک", year: 2016 },
    { name: "Darkwood", id: 274520, category: "horror", type: "ترسناک", year: 2017 },
    { name: "Layers of Fear", id: 194670, category: "horror", type: "ترسناک", year: 2016 },
    { name: "Visage", id: 594330, category: "horror", type: "ترسناک", year: 2020 },

    // =========================
    // ADVENTURE
    // =========================

    { name: "Horizon Zero Dawn", id: 1151640, category: "adventure", type: "ماجراجویی", year: 2017 },
    { name: "Horizon Forbidden West", id: 2420110, category: "adventure", type: "ماجراجویی", year: 2024 },
    { name: "Death Stranding", id: 1190460, category: "adventure", type: "ماجراجویی", year: 2019 },
    { name: "Portal", id: 400, category: "adventure", type: "ماجراجویی", year: 2007 },
    { name: "Portal 2", id: 620, category: "adventure", type: "ماجراجویی", year: 2011 },
    { name: "Tomb Raider", id: 203160, category: "adventure", type: "ماجراجویی", year: 2013 },
    { name: "Rise of the Tomb Raider", id: 391220, category: "adventure", type: "ماجراجویی", year: 2015 },
    { name: "Shadow of the Tomb Raider", id: 750920, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "The Last of Us Part I", id: 1888930, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "The Last of Us Part II Remastered", id: 2531310, category: "adventure", type: "ماجراجویی", year: 2024 },
    { name: "Uncharted: Legacy of Thieves Collection", id: 1659420, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "A Plague Tale: Innocence", id: 752590, category: "adventure", type: "ماجراجویی", year: 2019 },
    { name: "A Plague Tale: Requiem", id: 1182900, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "Star Wars Jedi: Fallen Order", id: 1172380, category: "adventure", type: "ماجراجویی", year: 2019 },
    { name: "Star Wars Jedi: Survivor", id: 1774580, category: "adventure", type: "ماجراجویی", year: 2023 },
    { name: "It Takes Two", id: 1426210, category: "adventure", type: "ماجراجویی", year: 2021 },
    { name: "A Way Out", id: 1222700, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "Stray", id: 1332010, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "Subnautica", id: 264710, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "No Man's Sky", id: 275850, category: "adventure", type: "ماجراجویی", year: 2016 },
    { name: "Terraria", id: 105600, category: "adventure", type: "ماجراجویی", year: 2011 },
    { name: "Valheim", id: 892970, category: "adventure", type: "ماجراجویی", year: 2021 },
    { name: "Detroit: Become Human", id: 1222140, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "Heavy Rain", id: 960910, category: "adventure", type: "ماجراجویی", year: 2010 },
    { name: "Beyond: Two Souls", id: 960990, category: "adventure", type: "ماجراجویی", year: 2013 },
    { name: "Life is Strange", id: 319630, category: "adventure", type: "ماجراجویی", year: 2015 },
    { name: "Life is Strange 2", id: 532210, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "Life is Strange: True Colors", id: 936790, category: "adventure", type: "ماجراجویی", year: 2021 },
    { name: "Outer Wilds", id: 753640, category: "adventure", type: "ماجراجویی", year: 2019 },
    { name: "The Long Dark", id: 305620, category: "adventure", type: "ماجراجویی", year: 2017 },

    // =========================
    // RACING
    // =========================

    { name: "Forza Horizon 4", id: 1293830, category: "racing", type: "مسابقه‌ای", year: 2018 },
    { name: "Forza Horizon 5", id: 1551360, category: "racing", type: "مسابقه‌ای", year: 2021 },
    { name: "Need for Speed Heat", id: 1222680, category: "racing", type: "مسابقه‌ای", year: 2019 },
    { name: "Need for Speed Unbound", id: 1846380, category: "racing", type: "مسابقه‌ای", year: 2022 },
    { name: "Assetto Corsa", id: 244210, category: "racing", type: "مسابقه‌ای", year: 2014 },
    { name: "Euro Truck Simulator 2", id: 227300, category: "racing", type: "مسابقه‌ای", year: 2012 },
    { name: "American Truck Simulator", id: 270880, category: "racing", type: "مسابقه‌ای", year: 2016 },
    { name: "BeamNG.drive", id: 284160, category: "racing", type: "مسابقه‌ای", year: 2015 },
    { name: "Dirt Rally 2.0", id: 690790, category: "racing", type: "مسابقه‌ای", year: 2019 },
    { name: "CarX Drift Racing Online", id: 635260, category: "racing", type: "مسابقه‌ای", year: 2017 },

    // =========================
    // SPORTS
    // =========================

    { name: "EA SPORTS FC 24", id: 2195250, category: "sports", type: "ورزشی", year: 2023 },
    { name: "EA SPORTS FC 25", id: 2669320, category: "sports", type: "ورزشی", year: 2024 },
    { name: "NBA 2K25", id: 2878980, category: "sports", type: "ورزشی", year: 2024 },
    { name: "WWE 2K24", id: 2315690, category: "sports", type: "ورزشی", year: 2024 },
    { name: "TEKKEN 7", id: 389730, category: "sports", type: "ورزشی", year: 2017 },
    { name: "Tony Hawk's Pro Skater 1 + 2", id: 2395210, category: "sports", type: "ورزشی", year: 2020 },
    { name: "Golf With Your Friends", id: 431240, category: "sports", type: "ورزشی", year: 2020 },
    { name: "Riders Republic", id: 2290180, category: "sports", type: "ورزشی", year: 2021 },
    { name: "AO Tennis 2", id: 1115640, category: "sports", type: "ورزشی", year: 2020 },
    { name: "Football Manager 2024", id: 2252570, category: "sports", type: "ورزشی", year: 2023 },

    // =========================
    // EXTRA
    // =========================

    { name: "Grounded", id: 962130, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "Sea of Thieves", id: 1172620, category: "adventure", type: "ماجراجویی", year: 2018 },
    { name: "Raft", id: 648800, category: "adventure", type: "ماجراجویی", year: 2022 },
    { name: "Green Hell", id: 815370, category: "adventure", type: "ماجراجویی", year: 2019 },
    { name: "Sons of Valhalla", id: 1402120, category: "adventure", type: "ماجراجویی", year: 2024 }

];


/* =========================================================
   SETTINGS
========================================================= */

const GAMES_PER_LOAD = 20;

let currentFilter = "all";
let currentSearch = "";

let filteredGames = [];
let visibleGames = 0;
let loadMoreButton = null;


/* =========================================================
   ELEMENTS
========================================================= */

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");
const gameCount = document.getElementById("gameCount");
const loadingBox = document.getElementById("loadingBox");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter-button");


/* =========================================================
   STEAM IMAGE
========================================================= */

function getGameImage(id) {

    return `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`;

}


/* =========================================================
   FILTER
========================================================= */

function updateFilteredGames() {

    const searchText =
        currentSearch.trim().toLowerCase();

    filteredGames = games.filter(game => {

        const categoryMatch =
            currentFilter === "all" ||
            game.category === currentFilter;

        const searchMatch =
            searchText === "" ||
            game.name.toLowerCase().includes(searchText);

        return categoryMatch && searchMatch;

    });

}


/* =========================================================
   GAME INFO MODAL
========================================================= */

function showGameInfo(game) {

    const oldModal =
        document.getElementById("gameInfoModal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "gameInfoModal";

    modal.innerHTML = `

        <div class="game-info-backdrop"></div>

        <div class="game-info-box">

            <button
                class="game-info-close"
                type="button"
            >
                ×
            </button>

            <h2>
                ${game.name}
            </h2>

            <div class="game-info-details">

                <div>
                    <span>دسته‌بندی</span>
                    <strong>
                        ${game.type}
                    </strong>
                </div>

                <div>
                    <span>سال انتشار</span>
                    <strong>
                        ${game.year}
                    </strong>
                </div>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    const closeButton =
        modal.querySelector(".game-info-close");

    const backdrop =
        modal.querySelector(".game-info-backdrop");

    closeButton.addEventListener(
        "click",
        function () {
            modal.remove();
        }
    );

    backdrop.addEventListener(
        "click",
        function () {
            modal.remove();
        }
    );

}


/* =========================================================
   CARD
========================================================= */

function createGameCard(game, index) {

    const card =
        document.createElement("article");

    card.className =
        "library-card";

    card.style.animationDelay =
        `${Math.min(index * 0.02, 0.3)}s`;

    card.innerHTML = `

        <div class="card-image">

            <img
                src="${getGameImage(game.id)}"
                alt="${game.name}"
                loading="lazy"
                decoding="async"
                onerror="this.style.display='none';"
            >

            <div class="card-overlay">

                <button
                    class="card-button"
                    type="button"
                >
                    مشاهده بازی
                </button>

            </div>

        </div>

        <div class="card-info">

            <h3 title="${game.name}">
                ${game.name}
            </h3>

            <p>
                ${game.type}
            </p>

        </div>

    `;

    const button =
        card.querySelector(".card-button");

    button.addEventListener(
        "click",
        function () {

            showGameInfo(game);

        }
    );

    return card;

}


/* =========================================================
   LOAD NEXT 20
========================================================= */

function loadNextGames() {

    if (!gamesGrid) {
        return;
    }

    const start =
        visibleGames;

    const end =
        Math.min(
            visibleGames + GAMES_PER_LOAD,
            filteredGames.length
        );

    if (start >= end) {
        return;
    }

    const fragment =
        document.createDocumentFragment();

    for (let i = start; i < end; i++) {

        fragment.appendChild(
            createGameCard(
                filteredGames[i],
                i
            )
        );

    }

    gamesGrid.appendChild(fragment);

    visibleGames =
        end;

    updateLoadMoreButton();

}


/* =========================================================
   LOAD MORE BUTTON
========================================================= */

function createLoadMoreButton() {

    if (loadMoreButton) {
        return;
    }

    loadMoreButton =
        document.createElement("button");

    loadMoreButton.type =
        "button";

    loadMoreButton.className =
        "load-more-button";

    loadMoreButton.textContent =
        "نمایش ۲۰ بازی دیگر";

    loadMoreButton.addEventListener(
        "click",
        loadNextGames
    );

    gamesGrid.parentElement.appendChild(
        loadMoreButton
    );

}


/* =========================================================
   UPDATE LOAD MORE
========================================================= */

function updateLoadMoreButton() {

    if (!loadMoreButton) {
        return;
    }

    if (
        visibleGames >=
        filteredGames.length
    ) {

        loadMoreButton.style.display =
            "none";

        return;

    }

    loadMoreButton.style.display =
        "block";

    const remaining =
        filteredGames.length -
        visibleGames;

    const amount =
        Math.min(
            GAMES_PER_LOAD,
            remaining
        );

    loadMoreButton.textContent =
        `نمایش ${amount} بازی دیگر`;

}


/* =========================================================
   RENDER
========================================================= */

function renderGames() {

    updateFilteredGames();

    visibleGames =
        0;

    gamesGrid.innerHTML =
        "";

    if (
        filteredGames.length ===
        0
    ) {

        noResults.hidden =
            false;

        if (loadMoreButton) {

            loadMoreButton.style.display =
                "none";

        }

        return;

    }

    noResults.hidden =
        true;

    loadNextGames();

}


/* =========================================================
   SEARCH
========================================================= */

if (gameSearch) {

    gameSearch.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value;

            renderGames();

        }
    );

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            this.classList.add(
                "active"
            );

            currentFilter =
                this.dataset.filter;

            renderGames();

        }
    );

});


/* =========================================================
   START
========================================================= */

function startGamesPage() {

    if (!gamesGrid) {
        return;
    }

    if (gameCount) {

        gameCount.textContent =
            games.length.toLocaleString(
                "fa-IR"
            );

    }

    if (loadingBox) {

        loadingBox.style.display =
            "none";

    }

    createLoadMoreButton();

    renderGames();

}


/* =========================================================
   START APP
========================================================= */

startGamesPage();
