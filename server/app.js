const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome my_recepie by K&G productions!");
});

app.get("/myrecipes", async (req, res) => {
    res.send("<h1>My Recipes</h1>");
});

app.get("/myrecipes/new", (req, res) => {
    res.send("New recipe form");
});

app.post("/myrecipes", async (req, res) => {
    res.send(`Submitted new recipe: ${req.body}`);
});

app.get("/myrecipes/:id", async (req, res) => {
    const { id } = req.params;
    res.send(`Show one recipe with this ID: ${id}`);
});

app.put("/myrecipes/:id", async (req, res) => {
    const { id } = req.params;
    res.send(`Editing a recipe with ID: ${id}`);
});

app.delete("/myrecipes/:id", async (req, res) => {
    const { id } = req.params;
    res.send(`Deleting a recipe with ID: ${id}`);
});

app.listen(3300, () => {
    console.log("Listening on port 3300");
});
