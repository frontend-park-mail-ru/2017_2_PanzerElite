const express = require("express");
const body = require("body-parser");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const uuid = require("uuid/v4");
const app = express();
const cors = require("cors");


app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/node_modules", express.static(__dirname + "/../node_modules"));
app.use(body.json());
app.use(cookie());
app.use(express.static("public"));

app.use("/login", express.static("public"));
app.use("/register", express.static("public"));
app.use("/menu", express.static("public"));
app.use("/changepass", express.static("public"));
app.use("/play", express.static("public"));
app.use("/game", express.static("public"));
app.use("/scoreboard", express.static("public"));
app.use("/about", express.static("public"));






app.use("/sw.js", express.static("sw.js"));

app.use(cors({
    origin: true,
    credentials: true,
}));

app.get("../public/*", (req, res) => {
    res.send("404");
});

app.listen(process.env.PORT || "8000", () => {
    console.log("Port: 8000");
});