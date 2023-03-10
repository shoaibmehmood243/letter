const router = require("express").Router();
const friendsController = require("../Controllers/friends.controller");

router.route('/').post(friendsController.add);
router.route('/accept').post(friendsController.accept);
router.route('/unfollow').post(friendsController.unfollow);
router.route('/:id').get(friendsController.get);
router.route('/request/:id').get(friendsController.getRequests);

module.exports = router;