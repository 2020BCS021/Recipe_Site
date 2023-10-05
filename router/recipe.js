const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser'); // Require cookie-parser

// // Use cookie-parser middleware
// app.use(cookieParser());
const authenticate = require("../middleware/authenticate");
const User1 = require("../model/createSchema");
//  const User = require('./models/User');
require('../db/conn');

router.post('/Create', authenticate, async(req, res) => {
    const recipe = new User1(req.body);

    try {

        const response = await recipe.save();
        res.status(201).json({ message: "Recipe created successfully", data: response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create recipe" });
    }
});

module.exports = router;