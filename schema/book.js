const mongoose = require("mongoose");

//Create a book schema specifying the type and the name
const BookSchema = mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        //not cumppolasary required
    },
    authors: [Number],
    language: String,
    pubDate: String,
    numOfPage: Number,
    category: [String],
    publication: Number,
});

const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;