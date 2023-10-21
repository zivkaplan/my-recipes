const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Line = require("./line");
const Comment = require("./comment");

const RecipeSchema = new Schema({
    title: String,
    content: [
        {
            type: Schema.Types.ObjectId,
            ref: "Line",
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

RecipeSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Line.deleteMany({
            _id: {
                $in: doc.content,
            },
        });
        await Comment.deleteMany({
            _id: {
                $in: doc.comments,
            },
        });
    }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
