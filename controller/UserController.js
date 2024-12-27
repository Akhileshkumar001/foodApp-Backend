const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const RegisterUser = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ errorMessage: "Bad Request" });
        }

        const Email = email.toLowerCase();
        const isExistingUser = await User.findOne({ email: Email });
        if (isExistingUser) {
            return res.status(409).json({ message: "This email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const UserData = new User({ username, email: Email, password: hashedPassword });
        await UserData.save();
        console.log("Received data:", req.body);
        res.status(200).json({ message: "User registered successfully" });

    } catch (error) {
        next(error);
    }
};

const LoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!email || !password) {
            return res.status(400).json({
                message: "Bad Request ",
            })
        }

        const Email = email.toLowerCase();
        const DetailOfuser = await User.findOne({ email: Email });
        if (!DetailOfuser) {
            return res.status(404).json({
                message: "this email doesn't exist"
            })
        }
        const IsPassworedMatched = await bcrypt.compare(password, DetailOfuser.password);
        if (!IsPassworedMatched) {
            return res.status(401).json({
                message: "Invailed credential"
            })
        }
        const token = jwt.sign(
            { userId: DetailOfuser._id },
            process.env.JWT_SECRET,
            
        );


        res.status(200).json({
            message: "loggedIn Successfully",
            token: token,
            name: DetailOfuser.username,
            userId: DetailOfuser._id,
        });

    } catch (error) {
        next(error)
    }
}

module.exports = {
    RegisterUser,
    LoginUser,
}
