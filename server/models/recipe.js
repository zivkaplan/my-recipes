const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    content: [
        {
            body: String,
            comments: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Comment",
                },
            ],
        },
    ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
