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
                res.status(200).send({success: true, message: "User Signup successfully", data: user});
            }).catch((err)=> {
                res.status(200).send({error: true, message: err.errors});
            })
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    }
}

module.exports = authController;