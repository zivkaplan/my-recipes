const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineSchema = new Schema({
    body: String,
});

module.exports = mongoose.model("Line", LineSchema);
