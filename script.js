* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #050505;
    color: white;
    overflow-x: hidden;
}

/* Background */

.background {
    position: fixed;
    inset: 0;
    background: #050505;
    z-index: -1;
}

.glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.25;
}

.glow1 {
    width: 400px;
    height: 400px;
    background: #8b0000;
    top: -100px;
    left: -100px;
}

.glow2 {
    width: 400px;
    height: 400px;
    background: #330000;
    bottom: -100px;
    right: -100px;
}

/* Screens */

.screen {
    display: none;
    min-height: 100vh;
}

.screen.active {
    display: block;
}

/* HOME */

#home {
    min-height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#home.active {
    display: flex;
}

.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* ARTIN button */

.artin-button {
    border: none;
    background: transparent;
    color: white;
    font-size: 90px;
    font-weight: 900;
    letter-spacing: 12px;
    cursor: pointer;
    transition: 0.3s;
    text-shadow:
        0 0 10px rgba(255,255,255,0.3),
        0 0 30px rgba(150,0,0,0.5);
}

.artin-button:hover {
    transform: scale(1.05);
    text-shadow:
        0 0 15px white,
        0 0 40px red;
}

.subtitle {
    margin-top: 10px;
    font-size: 20px;
    letter-spacing: 8px;
    color: #aaa;
}

.click-text {
    margin-top: 40px;
    font-size: 13px;
    letter-spacing: 5px;
    color: #777;
}

/* GAMES PAGE */

#games {
    padding: 50px 7%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
}

.header h1 {
    font-size: 42px;
    letter-spacing: 4px;
}

.header p {
    margin-top: 8px;
    color: #888;
    letter-spacing: 3px;
}

.back-button {
    padding: 12px 20px;
    border: 1px solid #444;
    background: #111;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s;
}

.back-button:hover {
    background: #222;
    border-color: #888;
}

/* Games */

.games-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

/* Game card */

.game-card {
    background: rgba(15, 15, 15, 0.95);
    border: 1px solid #252525;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.3s;
}

.game-card:hover {
    transform: translateY(-8px);
    border-color: #555;
}

/* GAME IMAGE */

.game-image {
    width: 100%;
    height: 260px;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    background-color: #090909;
}

/* Call of Duty */

.game-image.cod {
    background-image: url("Call-of-Duty-Modern-Warfare-2-PC-Game.jpg");
}

/* Other games */

.game-image.re4 {
    background-image: url("resident-evil-4.jpg");
}

.game-image.hitman {
    background-image: url("hitman-3.jpg");
}

.game-image.metro {
    background-image: url("metro-exodus.jpg");
}

.game-image.gow {
    background-image: url("god-of-war.jpg");
}

/* Game information */

.game-info {
    padding: 22px;
}

.game-info h2 {
    font-size: 25px;
    margin-bottom: 8px;
}

.game-info h3 {
    font-size: 15px;
    color: #999;
    margin-bottom: 15px;
}

.game-info p {
    color: #aaa;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Game button */

.game-button {
    padding: 11px 18px;
    border: 1px solid #444;
    background: #111;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.game-button:hover {
    background: white;
    color: black;
}

/* Mobile */

@media (max-width: 600px) {

    .artin-button {
        font-size: 55px;
        letter-spacing: 7px;
    }

    .subtitle {
        font-size: 14px;
        letter-spacing: 4px;
    }

    #games {
        padding: 30px 5%;
    }

    .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .header h1 {
        font-size: 30px;
    }

    .game-image {
        height: 220px;
    }
}
