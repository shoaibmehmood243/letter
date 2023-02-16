const router = require("express").Router();
const userController = require("../Controllers/user.controller");

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUserById);

module.exports = router;