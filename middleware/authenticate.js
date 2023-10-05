const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
// const User1 = require("../model/createSchema");

const Authenticate = async(req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        // const rootUser1 = await User1.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found')

        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

        console.log(token);

    } catch (err) {
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);

    }
}

module.exports = Authenticate;