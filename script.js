// ======================================================
// GAMEZONE
// REAL GAME COVERS
// ======================================================

// ------------------------------------------------------
// IMPORTANT
// ------------------------------------------------------
// این آرایه همان 200 بازی نسخه قبلی است.
// اگر در script.js قبلی خودت آرایه games را داری،
// فقط این بخش را نگه دار و کدهای پایین را جایگزین کن.
//
// ------------------------------------------------------

const games = [

    { name:"Grand Theft Auto V", genre:"اکشن", year:2013, rating:9.7, icon:"🚗" },
    { name:"Red Dead Redemption 2", genre:"ماجراجویی", year:2018, rating:9.8, icon:"🤠" },
    { name:"Cyberpunk 2077", genre:"RPG", year:2020, rating:9.0, icon:"🌃" },
    { name:"The Witcher 3", genre:"RPG", year:2015, rating:9.8, icon:"⚔️" },
    { name:"Elden Ring", genre:"RPG", year:2022, rating:9.6, icon:"💍" },
    { name:"God of War", genre:"اکشن", year:2018, rating:9.5, icon:"⚔️" },
    { name:"God of War Ragnarök", genre:"اکشن", year:2022, rating:9.5, icon:"🪓" },
    { name:"Hogwarts Legacy", genre:"ماجراجویی", year:2023, rating:8.8, icon:"🪄" },
    { name:"Resident Evil 4", genre:"ترسناک", year:2023, rating:9.4, icon:"🧟" },
    { name:"Resident Evil Village", genre:"ترسناک", year:2021, rating:9.1, icon:"🏚️" },

    { name:"Resident Evil 2", genre:"ترسناک", year:2019, rating:9.3, icon:"🧟" },
    { name:"Resident Evil 3", genre:"ترسناک", year:2020, rating:8.6, icon:"🧟" },
    { name:"Resident Evil 7", genre:"ترسناک", year:2017, rating:9.0, icon:"🏚️" },
    { name:"Resident Evil 5", genre:"اکشن", year:2009, rating:8.5, icon:"🔫" },
    { name:"Resident Evil 6", genre:"اکشن", year:2012, rating:7.9, icon:"🧟" },
    { name:"Silent Hill 2", genre:"ترسناک", year:2024, rating:9.2, icon:"🌫️" },
    { name:"Dead Space", genre:"ترسناک", year:2023, rating:9.1, icon:"👽" },
    { name:"The Last of Us Part I", genre:"ماجراجویی", year:2022, rating:9.6, icon:"🍄" },
    { name:"The Last of Us Part II", genre:"اکشن", year:2020, rating:9.4, icon:"🍄" },
    { name:"Days Gone", genre:"اکشن", year:2019, rating:8.7, icon:"🏍️" },

    { name:"Horizon Zero Dawn", genre:"RPG", year:2017, rating:9.0, icon:"🏹" },
    { name:"Horizon Forbidden West", genre:"RPG", year:2022, rating:9.1, icon:"🏹" },
    { name:"Ghost of Tsushima", genre:"اکشن", year:2020, rating:9.5, icon:"⚔️" },
    { name:"Death Stranding", genre:"ماجراجویی", year:2019, rating:8.8, icon:"📦" },
    { name:"Death Stranding 2", genre:"ماجراجویی", year:2025, rating:9.0, icon:"📦" },
    { name:"Uncharted 4", genre:"ماجراجویی", year:2016, rating:9.4, icon:"🗺️" },
    { name:"Uncharted Legacy of Thieves", genre:"ماجراجویی", year:2022, rating:9.1, icon:"🗺️" },
    { name:"Marvel's Spider-Man", genre:"اکشن", year:2018, rating:9.2, icon:"🕷️" },
    { name:"Spider-Man Miles Morales", genre:"اکشن", year:2020, rating:9.0, icon:"🕷️" },
    { name:"Spider-Man 2", genre:"اکشن", year:2023, rating:9.4, icon:"🕸️" },

    { name:"Batman Arkham Asylum", genre:"اکشن", year:2009, rating:9.2, icon:"🦇" },
    { name:"Batman Arkham City", genre:"اکشن", year:2011, rating:9.5, icon:"🦇" },
    { name:"Batman Arkham Knight", genre:"اکشن", year:2015, rating:9.3, icon:"🦇" },
    { name:"Assassin's Creed II", genre:"اکشن", year:2009, rating:9.2, icon:"🗡️" },
    { name:"Assassin's Creed Brotherhood", genre:"اکشن", year:2010, rating:9.1, icon:"🗡️" },
    { name:"Assassin's Creed Revelations", genre:"اکشن", year:2011, rating:8.9, icon:"🗡️" },
    { name:"Assassin's Creed III", genre:"اکشن", year:2012, rating:8.8, icon:"🗡️" },
    { name:"Assassin's Creed IV Black Flag", genre:"ماجراجویی", year:2013, rating:9.3, icon:"🏴‍☠️" },
    { name:"Assassin's Creed Origins", genre:"RPG", year:2017, rating:9.0, icon:"🏺" },
    { name:"Assassin's Creed Odyssey", genre:"RPG", year:2018, rating:9.1, icon:"🏛️" },

    { name:"Assassin's Creed Valhalla", genre:"RPG", year:2020, rating:8.8, icon:"🪓" },
    { name:"Far Cry 3", genre:"شوتر", year:2012, rating:9.2, icon:"🔫" },
    { name:"Far Cry 4", genre:"شوتر", year:2014, rating:8.8, icon:"🔫" },
    { name:"Far Cry 5", genre:"شوتر", year:2018, rating:8.7, icon:"🔫" },
    { name:"Far Cry 6", genre:"شوتر", year:2021, rating:8.4, icon:"🔫" },
    { name:"Far Cry New Dawn", genre:"شوتر", year:2019, rating:7.9, icon:"🔫" },
    { name:"Crysis", genre:"شوتر", year:2007, rating:8.8, icon:"🔫" },
    { name:"Crysis 2", genre:"شوتر", year:2011, rating:8.7, icon:"🔫" },
    { name:"Crysis 3", genre:"شوتر", year:2013, rating:8.5, icon:"🔫" },
    { name:"Metro 2033 Redux", genre:"شوتر", year:2014, rating:8.9, icon:"☢️" },

    { name:"Metro Last Light Redux", genre:"شوتر", year:2014, rating:9.0, icon:"☢️" },
    { name:"Metro Exodus", genre:"شوتر", year:2019, rating:9.3, icon:"☢️" },
    { name:"Metro Exodus Enhanced Edition", genre:"شوتر", year:2021, rating:9.4, icon:"☢️" },
    { name:"Call of Duty 4 Modern Warfare", genre:"شوتر", year:2007, rating:9.4, icon:"🎖️" },
    { name:"Call of Duty Modern Warfare 2", genre:"شوتر", year:2009, rating:9.5, icon:"🎖️" },
    { name:"Call of Duty Black Ops", genre:"شوتر", year:2010, rating:9.3, icon:"🎖️" },
    { name:"Call of Duty Modern Warfare 3", genre:"شوتر", year:2011, rating:9.0, icon:"🎖️" },
    { name:"Call of Duty Black Ops II", genre:"شوتر", year:2012, rating:9.2, icon:"🎖️" },
    { name:"Call of Duty Ghosts", genre:"شوتر", year:2013, rating:8.0, icon:"🎖️" },
    { name:"Call of Duty Advanced Warfare", genre:"شوتر", year:2014, rating:8.2, icon:"🎖️" },

    { name:"Call of Duty Black Ops III", genre:"شوتر", year:2015, rating:8.5, icon:"🎖️" },
    { name:"Call of Duty Infinite Warfare", genre:"شوتر", year:2016, rating:8.1, icon:"🎖️" },
    { name:"Call of Duty WWII", genre:"شوتر", year:2017, rating:8.4, icon:"🎖️" },
    { name:"Call of Duty Black Ops 4", genre:"شوتر", year:2018, rating:8.2, icon:"🎖️" },
    { name:"Call of Duty Modern Warfare", genre:"شوتر", year:2019, rating:8.9, icon:"🎖️" },
    { name:"Call of Duty Black Ops Cold War", genre:"شوتر", year:2020, rating:8.6, icon:"🎖️" },
    { name:"Call of Duty Vanguard", genre:"شوتر", year:2021, rating:7.9, icon:"🎖️" },
    { name:"Call of Duty Modern Warfare II", genre:"شوتر", year:2022, rating:8.5, icon:"🎖️" },
    { name:"Call of Duty Modern Warfare III", genre:"شوتر", year:2023, rating:8.0, icon:"🎖️" },
    { name:"DOOM", genre:"شوتر", year:2016, rating:9.0, icon:"👹" },

    { name:"DOOM Eternal", genre:"شوتر", year:2020, rating:9.4, icon:"👹" },
    { name:"Wolfenstein The New Order", genre:"شوتر", year:2014, rating:8.9, icon:"🔫" },
    { name:"Wolfenstein II The New Colossus", genre:"شوتر", year:2017, rating:8.7, icon:"🔫" },
    { name:"Titanfall 2", genre:"شوتر", year:2016, rating:9.3, icon:"🤖" },
    { name:"Battlefield 3", genre:"شوتر", year:2011, rating:9.0, icon:"💥" },
    { name:"Battlefield 4", genre:"شوتر", year:2013, rating:9.1, icon:"💥" },
    { name:"Battlefield 1", genre:"شوتر", year:2016, rating:9.2, icon:"💥" },
    { name:"Battlefield V", genre:"شوتر", year:2018, rating:8.5, icon:"💥" },
    { name:"Battlefield 2042", genre:"شوتر", year:2021, rating:7.4, icon:"💥" },
    { name:"Counter-Strike 2", genre:"شوتر", year:2023, rating:9.0, icon:"🎯" },

    { name:"Valorant", genre:"شوتر", year:2020, rating:8.8, icon:"🎯" },
    { name:"Apex Legends", genre:"شوتر", year:2019, rating:8.9, icon:"🎯" },
    { name:"Overwatch 2", genre:"شوتر", year:2022, rating:8.3, icon:"🎯" },
    { name:"Rainbow Six Siege", genre:"شوتر", year:2015, rating:9.0, icon:"🎯" },
    { name:"PUBG", genre:"شوتر", year:2017, rating:8.5, icon:"🪖" },
    { name:"Fortnite", genre:"شوتر", year:2017, rating:8.8, icon:"🏗️" },
    { name:"Minecraft", genre:"ماجراجویی", year:2011, rating:9.5, icon:"⛏️" },
    { name:"Terraria", genre:"ماجراجویی", year:2011, rating:9.2, icon:"⛏️" },
    { name:"Valheim", genre:"RPG", year:2021, rating:8.8, icon:"🛡️" },
    { name:"Rust", genre:"اکشن", year:2018, rating:8.4, icon:"🏕️" },

    { name:"Subnautica", genre:"ماجراجویی", year:2018, rating:9.1, icon:"🌊" },
    { name:"Subnautica Below Zero", genre:"ماجراجویی", year:2021, rating:8.5, icon:"❄️" },
    { name:"No Man's Sky", genre:"ماجراجویی", year:2016, rating:8.7, icon:"🚀" },
    { name:"Starfield", genre:"RPG", year:2023, rating:8.2, icon:"🚀" },
    { name:"Fallout 4", genre:"RPG", year:2015, rating:9.0, icon:"☢️" },
    { name:"Fallout New Vegas", genre:"RPG", year:2010, rating:9.4, icon:"☢️" },
    { name:"Skyrim", genre:"RPG", year:2011, rating:9.6, icon:"🐉" },
    { name:"Baldur's Gate 3", genre:"RPG", year:2023, rating:9.8, icon:"🐉" },
    { name:"Dragon Age Inquisition", genre:"RPG", year:2014, rating:8.8, icon:"🐲" },
    { name:"Mass Effect", genre:"RPG", year:2007, rating:9.0, icon:"🚀" },

    { name:"Mass Effect 2", genre:"RPG", year:2010, rating:9.6, icon:"🚀" },
    { name:"Mass Effect 3", genre:"RPG", year:2012, rating:9.2, icon:"🚀" },
    { name:"Dark Souls", genre:"RPG", year:2011, rating:9.2, icon:"💀" },
    { name:"Dark Souls II", genre:"RPG", year:2014, rating:8.7, icon:"💀" },
    { name:"Dark Souls III", genre:"RPG", year:2016, rating:9.4, icon:"💀" },
    { name:"Sekiro Shadows Die Twice", genre:"اکشن", year:2019, rating:9.6, icon:"🥷" },
    { name:"Lies of P", genre:"RPG", year:2023, rating:9.0, icon:"🤖" },
    { name:"Monster Hunter World", genre:"RPG", year:2018, rating:9.1, icon:"🐉" },
    { name:"Final Fantasy VII Remake", genre:"RPG", year:2020, rating:9.3, icon:"⚔️" },
    { name:"Final Fantasy XVI", genre:"RPG", year:2023, rating:8.9, icon:"🔥" },

    { name:"Kingdom Hearts III", genre:"RPG", year:2019, rating:8.5, icon:"🗝️" },
    { name:"Persona 5 Royal", genre:"RPG", year:2019, rating:9.6, icon:"🎭" },
    { name:"Yakuza 0", genre:"اکشن", year:2015, rating:9.3, icon:"🐉" },
    { name:"Like a Dragon", genre:"RPG", year:2020, rating:8.9, icon:"🐉" },
    { name:"Like a Dragon Infinite Wealth", genre:"RPG", year:2024, rating:9.0, icon:"🐉" },
    { name:"Dying Light", genre:"اکشن", year:2015, rating:9.0, icon:"🧟" },
    { name:"Dying Light 2", genre:"اکشن", year:2022, rating:8.3, icon:"🧟" },
    { name:"Dead Island 2", genre:"اکشن", year:2023, rating:8.6, icon:"🧟" },
    { name:"State of Decay 2", genre:"اکشن", year:2018, rating:8.1, icon:"🧟" },
    { name:"Left 4 Dead 2", genre:"شوتر", year:2009, rating:9.5, icon:"🧟" },

    { name:"Portal", genre:"ماجراجویی", year:2007, rating:9.5, icon:"🌀" },
    { name:"Portal 2", genre:"ماجراجویی", year:2011, rating:9.8, icon:"🌀" },
    { name:"Half-Life 2", genre:"شوتر", year:2004, rating:9.8, icon:"🔧" },
    { name:"Half-Life Alyx", genre:"شوتر", year:2020, rating:9.6, icon:"🥽" },
    { name:"Dota 2", genre:"استراتژی", year:2013, rating:8.8, icon:"🔮" },
    { name:"League of Legends", genre:"استراتژی", year:2009, rating:9.0, icon:"⚔️" },
    { name:"StarCraft II", genre:"استراتژی", year:2010, rating:9.5, icon:"🚀" },
    { name:"Age of Empires II", genre:"استراتژی", year:1999, rating:9.7, icon:"🏰" },
    { name:"Age of Empires IV", genre:"استراتژی", year:2021, rating:8.8, icon:"🏰" },
    { name:"Civilization VI", genre:"استراتژی", year:2016, rating:9.1, icon:"🌍" },

    { name:"Total War Warhammer III", genre:"استراتژی", year:2022, rating:8.8, icon:"⚔️" },
    { name:"XCOM 2", genre:"استراتژی", year:2016, rating:9.0, icon:"👽" },
    { name:"Frostpunk", genre:"استراتژی", year:2018, rating:9.0, icon:"❄️" },
    { name:"Cities Skylines", genre:"استراتژی", year:2015, rating:9.2, icon:"🏙️" },
    { name:"The Sims 4", genre:"استراتژی", year:2014, rating:8.4, icon:"🏠" },
    { name:"Euro Truck Simulator 2", genre:"مسابقه‌ای", year:2012, rating:9.3, icon:"🚛" },
    { name:"American Truck Simulator", genre:"مسابقه‌ای", year:2016, rating:9.0, icon:"🚛" },
    { name:"Forza Horizon 4", genre:"مسابقه‌ای", year:2018, rating:9.3, icon:"🏎️" },
    { name:"Forza Horizon 5", genre:"مسابقه‌ای", year:2021, rating:9.5, icon:"🏎️" },
    { name:"Forza Motorsport", genre:"مسابقه‌ای", year:2023, rating:8.5, icon:"🏎️" },

    { name:"Need for Speed Most Wanted", genre:"مسابقه‌ای", year:2005, rating:9.5, icon:"🚓" },
    { name:"Need for Speed Carbon", genre:"مسابقه‌ای", year:2006, rating:9.0, icon:"🚗" },
    { name:"Need for Speed Hot Pursuit", genre:"مسابقه‌ای", year:2010, rating:8.8, icon:"🚓" },
    { name:"Need for Speed Rivals", genre:"مسابقه‌ای", year:2013, rating:8.4, icon:"🚓" },
    { name:"Need for Speed Heat", genre:"مسابقه‌ای", year:2019, rating:8.7, icon:"🌃" },
    { name:"Need for Speed Unbound", genre:"مسابقه‌ای", year:2022, rating:8.4, icon:"🎨" },
    { name:"Dirt Rally", genre:"مسابقه‌ای", year:2015, rating:8.8, icon:"🏁" },
    { name:"Dirt Rally 2.0", genre:"مسابقه‌ای", year:2019, rating:9.0, icon:"🏁" },
    { name:"Assetto Corsa", genre:"مسابقه‌ای", year:2014, rating:9.0, icon:"🏎️" },
    { name:"F1 2023", genre:"مسابقه‌ای", year:2023, rating:8.5, icon:"🏎️" },

    { name:"EA Sports FC 24", genre:"ورزشی", year:2023, rating:8.0, icon:"⚽" },
    { name:"EA Sports FC 25", genre:"ورزشی", year:2024, rating:8.1, icon:"⚽" },
    { name:"eFootball 2024", genre:"ورزشی", year:2023, rating:7.8, icon:"⚽" },
    { name:"PES 2021", genre:"ورزشی", year:2020, rating:9.0, icon:"⚽" },
    { name:"NBA 2K24", genre:"ورزشی", year:2023, rating:8.1, icon:"🏀" },
    { name:"WWE 2K24", genre:"ورزشی", year:2024, rating:8.3, icon:"🤼" },
    { name:"Tony Hawk's Pro Skater 1 + 2", genre:"ورزشی", year:2020, rating:9.1, icon:"🛹" },
    { name:"Rocket League", genre:"ورزشی", year:2015, rating:9.2, icon:"🚗" },
    { name:"Tekken 8", genre:"اکشن", year:2024, rating:9.0, icon:"🥊" },
    { name:"Street Fighter 6", genre:"اکشن", year:2023, rating:9.2, icon:"🥊" },

    { name:"Mortal Kombat 11", genre:"اکشن", year:2019, rating:9.0, icon:"🥋" },
    { name:"Mortal Kombat 1", genre:"اکشن", year:2023, rating:8.5, icon:"🥋" },
    { name:"Devil May Cry 5", genre:"اکشن", year:2019, rating:9.4, icon:"😈" },
    { name:"Nioh", genre:"RPG", year:2017, rating:8.8, icon:"🥷" },
    { name:"Nioh 2", genre:"RPG", year:2020, rating:9.0, icon:"🥷" },
    { name:"Control", genre:"اکشن", year:2019, rating:9.0, icon:"🔴" },
    { name:"Alan Wake", genre:"ترسناک", year:2010, rating:8.8, icon:"🔦" },
    { name:"Alan Wake 2", genre:"ترسناک", year:2023, rating:9.5, icon:"🔦" },
    { name:"Quantum Break", genre:"اکشن", year:2016, rating:8.5, icon:"⏱️" },
    { name:"Watch Dogs", genre:"اکشن", year:2014, rating:8.3, icon:"💻" },

    { name:"Watch Dogs 2", genre:"اکشن", year:2016, rating:8.8, icon:"💻" },
    { name:"Watch Dogs Legion", genre:"اکشن", year:2020, rating:8.0, icon:"💻" },
    { name:"Sleeping Dogs", genre:"اکشن", year:2012, rating:9.0, icon:"🥋" },
    { name:"Just Cause 3", genre:"اکشن", year:2015, rating:8.4, icon:"💥" },
    { name:"Just Cause 4", genre:"اکشن", year:2018, rating:8.0, icon:"💥" },
    { name:"Mafia Definitive Edition", genre:"اکشن", year:2020, rating:8.9, icon:"🚬" },
    { name:"Mafia II", genre:"اکشن", year:2010, rating:9.1, icon:"🚬" },
    { name:"Mafia III", genre:"اکشن", year:2016, rating:8.1, icon:"🚬" },
    { name:"L.A. Noire", genre:"ماجراجویی", year:2011, rating:8.9, icon:"🕵️" },
    { name:"Hitman", genre:"اکشن", year:2016, rating:9.0, icon:"🎯" },

    { name:"Hitman 2", genre:"اکشن", year:2018, rating:9.1, icon:"🎯" },
    { name:"Hitman 3", genre:"اکشن", year:2021, rating:9.2, icon:"🎯" },
    { name:"Deathloop", genre:"شوتر", year:2021, rating:8.8, icon:"🔫" },
    { name:"Dishonored", genre:"اکشن", year:2012, rating:9.2, icon:"🎭" },
    { name:"Dishonored 2", genre:"اکشن", year:2016, rating:9.0, icon:"🎭" },
    { name:"Prey", genre:"شوتر", year:2017, rating:8.9, icon:"👽" },
    { name:"The Outer Worlds", genre:"RPG", year:2019, rating:8.6, icon:"🚀" },
    { name:"Atomic Heart", genre:"شوتر", year:2023, rating:8.3, icon:"🤖" },
    { name:"S.T.A.L.K.E.R. Shadow of Chernobyl", genre:"شوتر", year:2007, rating:9.0, icon:"☢️" },
    { name:"S.T.A.L.K.E.R. 2", genre:"شوتر", year:2024, rating:8.8, icon:"☢️" },

    { name:"Kingdom Come Deliverance", genre:"RPG", year:2018, rating:8.8, icon:"🏰" },
    { name:"Kingdom Come Deliverance II", genre:"RPG", year:2025, rating:9.2, icon:"🏰" },
    { name:"Mount & Blade Warband", genre:"RPG", year:2010, rating:9.0, icon:"⚔️" },
    { name:"Mount & Blade II Bannerlord", genre:"RPG", year:2022, rating:9.0, icon:"⚔️" },
    { name:"The Forest", genre:"ترسناک", year:2018, rating:8.9, icon:"🌲" },
    { name:"Sons of the Forest", genre:"ترسناک", year:2024, rating:8.7, icon:"🌲" },
    { name:"Amnesia The Dark Descent", genre:"ترسناک", year:2010, rating:8.8, icon:"👻" },
    { name:"Outlast", genre:"ترسناک", year:2013, rating:8.9, icon:"📹" },
    { name:"Outlast 2", genre:"ترسناک", year:2017, rating:8.4, icon:"📹" },
    { name:"Little Nightmares", genre:"ترسناک", year:2017, rating:8.9, icon:"🕯️" },

    { name:"Little Nightmares II", genre:"ترسناک", year:2021, rating:9.0, icon:"🕯️" },
    { name:"Inside", genre:"ماجراجویی", year:2016, rating:9.0, icon:"👤" },
    { name:"Limbo", genre:"ماجراجویی", year:2010, rating:8.8, icon:"🌑" },
    { name:"Ori and the Blind Forest", genre:"ماجراجویی", year:2015, rating:9.3, icon:"🌳" },
    { name:"Ori and the Will of the Wisps", genre:"ماجراجویی", year:2020, rating:9.4, icon:"🌳" },
    { name:"Hades", genre:"RPG", year:2020, rating:9.5, icon:"🔥" },
    { name:"Hollow Knight", genre:"ماجراجویی", year:2017, rating:9.5, icon:"🐞" },
    { name:"Cuphead", genre:"اکشن", year:2017, rating:9.0, icon:"☕" },
    { name:"Celeste", genre:"ماجراجویی", year:2018, rating:9.3, icon:"🏔️" },
    { name:"It Takes Two", genre:"ماجراجویی", year:2021, rating:9.5, icon:"👫" },

    { name:"A Way Out", genre:"ماجراجویی", year:2018, rating:8.8, icon:"👥" },
    { name:"Detroit Become Human", genre:"ماجراجویی", year:2018, rating:9.4, icon:"🤖" },
    { name:"Heavy Rain", genre:"ماجراجویی", year:2010, rating:8.7, icon:"🌧️" },
    { name:"Beyond Two Souls", genre:"ماجراجویی", year:2013, rating:8.4, icon:"👻" },
    { name:"Life is Strange", genre:"ماجراجویی", year:2015, rating:9.0, icon:"📷" },
    { name:"Life is Strange 2", genre:"ماجراجویی", year:2018, rating:8.5, icon:"🛣️" },
    { name:"Stray", genre:"ماجراجویی", year:2022, rating:8.8, icon:"🐈" },
    { name:"Kena Bridge of Spirits", genre:"ماجراجویی", year:2021, rating:8.7, icon:"🌲" },
    { name:"Tomb Raider", genre:"ماجراجویی", year:2013, rating:9.0, icon:"🏹" },
    { name:"Rise of the Tomb Raider", genre:"ماجراجویی", year:2015, rating:9.2, icon:"🏹" },

    { name:"Shadow of the Tomb Raider", genre:"ماجراجویی", year:2018, rating:9.0, icon:"🏹" },
    { name:"Just Dance 2024", genre:"ورزشی", year:2023, rating:7.8, icon:"💃" },
    { name:"Golf With Your Friends", genre:"ورزشی", year:2020, rating:8.0, icon:"⛳" },
    { name:"Wreckfest", genre:"مسابقه‌ای", year:2018, rating:8.8, icon:"🚙" },
    { name:"GRID Legends", genre:"مسابقه‌ای", year:2022, rating:8.1, icon:"🏁" },
    { name:"Trackmania", genre:"مسابقه‌ای", year:2020, rating:8.7, icon:"🏎️" },
    { name:"SnowRunner", genre:"مسابقه‌ای", year:2020, rating:8.8, icon:"🚚" },
    { name:"F1 2024", genre:"مسابقه‌ای", year:2024, rating:8.4, icon:"🏎️" },
    { name:"TEKKEN 7", genre:"اکشن", year:2015, rating:9.0, icon:"🥊" },
    { name:"Dragon Ball FighterZ", genre:"اکشن", year:2018, rating:8.9, icon:"🐉" }

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

let selectedCategory = "همه";


// ======================================================
// COVER CACHE
// ======================================================

const coverCache = new Map();


// ======================================================
// TITLE ALIASES
// ======================================================

const titleAliases = {

    "Grand Theft Auto V":
        "Grand Theft Auto V",

    "God of War Ragnarök":
        "God of War Ragnarök",

    "The Witcher 3":
        "The Witcher 3: Wild Hunt",

    "Metro 2033 Redux":
        "Metro 2033",

    "Metro Last Light Redux":
        "Metro: Last Light",

    "Metro Exodus Enhanced Edition":
        "Metro Exodus",

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

    "Resident Evil Village":
        "Resident Evil Village",

    "Resident Evil 4":
        "Resident Evil 4",

    "Resident Evil 2":
        "Resident Evil 2",

    "Resident Evil 3":
        "Resident Evil 3",

    "Resident Evil 7":
        "Resident Evil 7: Biohazard",

    "Marvel's Spider-Man":
        "Marvel's Spider-Man",

    "Spider-Man Miles Morales":
        "Spider-Man: Miles Morales",

    "Spider-Man 2":
        "Marvel's Spider-Man 2",

    "S.T.A.L.K.E.R. Shadow of Chernobyl":
        "S.T.A.L.K.E.R.: Shadow of Chernobyl",

    "S.T.A.L.K.E.R. 2":
        "S.T.A.L.K.E.R. 2: Heart of Chornobyl",

    "Assassin's Creed IV Black Flag":
        "Assassin's Creed IV: Black Flag",

    "Assassin's Creed II":
        "Assassin's Creed II",

    "Assassin's Creed III":
        "Assassin's Creed III",

    "Assassin's Creed Origins":
        "Assassin's Creed Origins",

    "Assassin's Creed Odyssey":
        "Assassin's Creed Odyssey",

    "Assassin's Creed Valhalla":
        "Assassin's Creed Valhalla",

    "Dying Light 2":
        "Dying Light 2 Stay Human",

    "Mafia Definitive Edition":
        "Mafia: Definitive Edition",

    "Mortal Kombat 1":
        "Mortal Kombat 1",

    "EA Sports FC 24":
        "EA Sports FC 24",

    "EA Sports FC 25":
        "EA Sports FC 25",

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

    "Need for Speed Unbound":
        "Need for Speed Unbound",

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

    "Age of Empires II":
        "Age of Empires II",

    "Age of Empires IV":
        "Age of Empires IV",

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

    "Alan Wake 2":
        "Alan Wake 2",

    "Watch Dogs Legion":
        "Watch Dogs: Legion",

    "L.A. Noire":
        "L.A. Noire",

    "Little Nightmares II":
        "Little Nightmares II",

    "Ori and the Blind Forest":
        "Ori and the Blind Forest",

    "Ori and the Will of the Wisps":
        "Ori and the Will of the Wisps",

    "It Takes Two":
        "It Takes Two",

    "A Way Out":
        "A Way Out",

    "Detroit Become Human":
        "Detroit: Become Human",

    "Life is Strange":
        "Life Is Strange",

    "Life is Strange 2":
        "Life Is Strange 2",

    "Kena Bridge of Spirits":
        "Kena: Bridge of Spirits",

    "Rise of the Tomb Raider":
        "Rise of the Tomb Raider",

    "Shadow of the Tomb Raider":
        "Shadow of the Tomb Raider",

    "Tony Hawk's Pro Skater 1 + 2":
        "Tony Hawk's Pro Skater 1 + 2",

    "Dragon Ball FighterZ":
        "Dragon Ball FighterZ"

};


// ======================================================
// GET POSSIBLE TITLES
// ======================================================

function getPossibleTitles(gameName) {

    const titles = [];

    if (titleAliases[gameName]) {
        titles.push(titleAliases[gameName]);
    }

    titles.push(gameName);

    // حذف بعضی نشانه‌ها برای جستجوی جایگزین
    titles.push(
        gameName
            .replace(/:/g, "")
            .replace(/\./g, "")
            .replace(/'/g, "")
    );

    // حذف شماره/نسخه در بعضی موارد
    if (gameName.includes("Enhanced Edition")) {

        titles.push(
            gameName.replace(
                " Enhanced Edition",
                ""
            )
        );

    }

    return [
        ...new Set(titles)
    ];

}


// ======================================================
// FETCH WIKIPEDIA COVER
// ======================================================

async function getGameCover(gameName) {

    if (coverCache.has(gameName)) {
        return coverCache.get(gameName);
    }

    const titles =
        getPossibleTitles(gameName);


    for (const title of titles) {

        try {

            const apiUrl =
                "https://en.wikipedia.org/w/api.php" +
                "?action=query" +
                "&format=json" +
                "&origin=*" +
                "&prop=pageimages" +
                "&piprop=thumbnail|original" +
                "&pithumbsize=600" +
                "&titles=" +
                encodeURIComponent(title);


            const response =
                await fetch(apiUrl);


            if (!response.ok) {
                continue;
            }


            const data =
                await response.json();


            const pages =
                data?.query?.pages;


            if (!pages) {
                continue;
            }


            const page =
                Object.values(pages)[0];


            if (
                page &&
                !page.missing
            ) {

                const image =
                    page.original?.source ||
                    page.thumbnail?.source;


                if (image) {

                    coverCache.set(
                        gameName,
                        image
                    );

                    return image;

                }

            }

        }

        catch (error) {

            console.warn(
                "Cover error:",
                gameName,
                error
            );

        }

    }


    coverCache.set(
        gameName,
        null
    );

    return null;

}


// ======================================================
// COVER PLACEHOLDER
// ======================================================

function createPlaceholder(game) {

    return `

        <div class="game-cover">

            <div class="game-cover-icon">
                ${game.icon}
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
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >

            <div
                class="cover-fallback"
                style="display:none;"
            >
                ${game.icon}
            </div>

            <div class="game-number">
                ${games.indexOf(game) + 1}
            </div>

        </div>

    `;

}


// ======================================================
// RENDER GAMES
// ======================================================

function renderGames(list) {

    gamesGrid.innerHTML = "";

    gameCount.textContent = list.length;


    if (list.length === 0) {

        noResult.style.display = "block";

        return;

    }


    noResult.style.display = "none";


    list.forEach(game => {

        const card =
            document.createElement("article");


        card.className =
            "game-card";


        card.dataset.game =
            game.name;


        card.innerHTML = `

            ${createCover(game)}

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


    // شروع پیدا کردن کاورها
    loadCovers(list);

}


// ======================================================
// LOAD COVERS
// ======================================================

async function loadCovers(list) {

    // هر بار حداکثر 5 درخواست همزمان
    // تا مرورگر و Wikipedia تحت فشار قرار نگیرند.

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
                    getGameCover(game.name)
            )

        );


        batch.forEach(game => {

            const card =
                document.querySelector(
                    `[data-game="${CSS.escape(game.name)}"]`
                );


            if (!card) {
                return;
            }


            const coverElement =
                card.querySelector(".game-cover");


            if (!coverElement) {
                return;
            }


            const newCover =
                createCover(game);


            const temporary =
                document.createElement("div");


            temporary.innerHTML =
                newCover.trim();


            coverElement.replaceWith(
                temporary.firstElementChild
            );

        });

    }

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

function openGame(game) {

    modalTitle.textContent =
        game.name;

    modalCategory.textContent =
        game.genre;

    modalYear.textContent =
        game.year;

    modalRating.textContent =
        game.rating;


    const cover =
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

    } else {

        modalImage.textContent =
            game.icon;

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

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const nav =
    document.querySelector(
        ".nav"
    );


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
// START
// ======================================================

renderGames(games);
