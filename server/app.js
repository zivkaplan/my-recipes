const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");
const Line = require("./models/line");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/my_recipes");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome my_recipes by K&G productions!");
});

app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

app.get("/recipes/new", (req, res) => {
    res.send("New recipe form");
});

app.post("/recipes", async (req, res) => {
    console.log(req.body.recipe);
    // const recipe = new Recipe(req.body.recipe);
    // recipe.content = req.body.recipe.content.map(async (l) => {
    //     const line = new Line({ l });
    //     await line.save();
    // });
    // await recipe.save();
    // const { content } = req.body.recipe;
    // content.forEach(async (line) => {
    // console.log(line);
    // const newLine = new Line({ line });
    // recipe.content.push(newLine);
    // await newLine.save();
    // });
    // await recipe.save();
    res.json(req.body.recipe);
});

app.get("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id).populate("content");
    res.json(recipe);
});

app.put("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    res.send(`Editing a recipe with ID: ${id}`);
});

app.delete("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    res.send(`Deleting a recipe: ${deletedRecipe.title}`);
});

app.listen(3300, () => {
    console.log("Listening on port 3300");
});
