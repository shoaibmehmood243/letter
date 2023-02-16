const router = require("express").Router();
const authController = require("../Controllers/auth.controller");

router.route('/sign-up').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;