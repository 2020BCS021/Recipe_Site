const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require("../model/userSchema");


router.get('/', (req, res) => {
    res.send(`This is home page router page`);
});

// using Promises
// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all fields properly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exists" });
//             }

//             const user = new User({ name, email, phone, work, password, cpassword });
//             user.save()
//                 .then(() => {
//                     res.status(201).json({ message: "User registered successfully" });
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     res.status(500).json({ error: "Failed to register" });
//                 });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Server error" });
//         });
// });

router.post("/register", async(req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all fields properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not maching" });
        } else {
            const user = new User({ name, email, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        }
    } catch (err) {
        console.log(err);
        // res.status(500).json({ error: "Server error" });
    }

});

router.post("/signin", async(req, res) => {
    try {
        let token;
        // console.log(req.body);
        const { email, password } = req.body;
        if (!email || !password) {

            return res.status(400).json({ error: "Please fill all fields properly" });
        }

        const userLogin = await User.findOne({ email: email });


        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials pass" });
            } else {
                res.json({ message: "User Signin Successfully" });
            }

        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }

    } catch (err) {
        console.log(err);
    }
});

//about us ka page

// router.get('/Logout', (req, res) => {
//     console.log(`hello my about`);
//     res.clearCookie('jwtoken', { path: '/signin' });
//     res.status(200).send(`User Logout`);
// });

router.get('/logout', (req, res) => {
    try {
        // Clear the "jwtoken" cookie
        res.clearCookie('jwtoken', { path: '/Create' });
        // localStorage.removeItem("token");
        // You can also clear any other cookies you may have set

        res.status(200).json({ message: 'User logged out' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;