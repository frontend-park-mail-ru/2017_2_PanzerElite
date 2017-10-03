const fs = require("fs");
const pug = require("pug");
const path = require("path");
const DATA = path.resolve("./");


const scorePWD = DATA + "/public/blocks/scoreboard/";
let scoreFunc = pug.compileFileClient(scorePWD + "scoreboard.pug", { name: "scoreboardTEMPLATE" });
fs.writeFileSync(scorePWD + "ScoreboardTEMPLATE.js", scoreFunc);