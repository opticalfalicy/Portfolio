const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50
    },
    link: {
        type: String,
    },
    description: {
        type: String,
        maxlength: 300
    },
    image: {
        type: String,
        maxlength: 300
    }
})

module.exports = mongoose.model("Class", projectSchema, "classes");