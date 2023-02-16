const router = require("express").Router();
const authController = require("../Controllers/auth.controller");

router.route('/sign-up').post(authController.signup);

module.exports = router;