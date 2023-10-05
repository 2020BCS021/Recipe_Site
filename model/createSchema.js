const mongoose = require('mongoose');
// const User = require('./models/User');

const RecipeSchema = new mongoose.Schema({
    Recipe_Name: {
        type: String,
        required: true // Corrected 'required' spelling
    },
    Ingredients: [{
        type: String,
        required: true
    }],
    Select_Category: {
        type: String,
        required: true
    },
    Recipe_Image: {
        type: String,
        required: true
    },
    How_to_make: {
        type: String,
        required: true
    },
    userOwner: {
        type: String,
        ref: "User",
        required: true,
    },

});

const Create = mongoose.model('Create', RecipeSchema);

module.exports = Create;