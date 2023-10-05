const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser'); // Require cookie-parser

// Use cookie-parser middleware
app.use(cookieParser());
dotenv.config({ path: './config.env' });

require('./db/conn');
// app.use(...): This is a method provided by the Express application to add middleware to the processing pipeline.
// it is built in middleware
app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));
app.use(require('./router/recipe'));

const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//     console.log("middleware");
//     next();
// }

// app.get('/', (req, res) => {
//     res.send(`This is home page`);
// });

// app.get('/about', middleware, (req, res) => {
//     res.send(`This is home page`);
// });

// app.get('/signin', (req, res) => {
//     res.send(`This is home page`);
// });

// app.get('/signup', (req, res) => {
//     res.send(`This is home page`);
// });

// app.get('/contact', (req, res) => {
//     res.cookie("Test", "vijaya")
//     res.send(`This is home page`);
// });

app.listen(5000, () => {
    console.log(`listening to port ${PORT}`);
});