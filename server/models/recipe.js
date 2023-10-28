const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { LineSchema } = require("./line");

const RecipeSchema = new Schema({
    title: String,
    content: [{ LineSchema }],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
