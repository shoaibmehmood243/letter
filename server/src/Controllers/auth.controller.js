const User = require("../Models/user.model");
const bcrypt = require('bcrypt');

const authController = {
    signup: async (req, res, next) => {
        try {
            const { username, email, number, password } = req.body;
            const checkUsername = await User.find({username});
            if(checkUsername?.length > 0) {
                return res.status(200).send({error: true, message: 'User with this username already exists.'});
            }
            const checkNumber = await User.find({number});
            if(checkNumber?.length > 0) {
                return res.status(200).send({error: true, message: 'User with this number already exists.'});
            }
            const checkEmail = await User.find({email});
            if(checkEmail?.length > 0) {
                return res.status(200).send({error: true, message: 'User with this email already exists.'});
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = {username, email, number, password: hashedPassword}
            User.create(user).then(()=> {
                delete user.password
                res.status(200).send({success: true, message: "User Signup successfully"});
            }).catch((err)=> {
                res.status(200).send({error: true, message: err.errors});
            })
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    },
    login: async (req, res, next)=> {
        try {
            const { username, password } = req.body;
            const user = await User.find({username});
            if(user.length === 0) {
                return res.status(200).send({error: true, message: "User not registered. Please signup to continue."});
            }
            const comparePassword = await bcrypt.compare(password, user[0].password);
            if(comparePassword === false) {
                return res.status(200).send({error: true, message: "Incorrect Password. Please try again."});
            } else {
                let {password, ...data} = user[0];
                delete data._doc.password
                res.status(200).send({success: true, message: "Logged in successfully!", data: data._doc});
            }
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    }
}

module.exports = authController;