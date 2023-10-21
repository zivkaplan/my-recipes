const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome my_recepie by K&G productions!");
});

app.listen(3300, () => {
    console.log("Listening on port 3300");
});
