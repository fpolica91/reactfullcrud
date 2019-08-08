const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// SCHEMA

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    toys: [{ type: String, minlength: 2 }],
    country: {
        type: String,
        match: /^[A-Z] [A-Z]$/
    },
    photoUrl: {
        type: String,
        match: /^https?:\/\//,
        default: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwifqLmpge3jAhXnqlkKHYqcCp4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fgrey-and-white-short-fur-cat-104827%2F&psig=AOvVaw11ni_dwamJ_L6HatKh26G1&ust=1565138475625509"
    }
})

// END OF SCHEMA    


// CLASS
const Cat = mongoose.model("Cat", catSchema)

// EXPORTS
module.exports = Cat;

