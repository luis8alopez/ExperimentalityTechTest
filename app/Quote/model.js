const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    "quote":{
        type: String,
        required: true
    },
    "image":{
        type: String,
        required: true
    }
});

const quote = mongoose.model('quote',quoteSchema);
module.exports = quote;