const User = require("../Models/user.model");

const userController = {
    getAllUsers: async(req, res, next) => {
        try {
            const users = await User.find();
            res.status(200).send({success: true, data: users})
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    },
    getUserById: async(req, res, next) => {
        try {
            const id = req.params.id;
            const users = await User.findById(id);
            res.status(200).send({success: true, data: users})
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    }
}

module.exports = userController;