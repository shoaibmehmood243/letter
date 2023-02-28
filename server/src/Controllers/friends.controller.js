const Friends = require("../Models/friend.model");
const User = require("../Models/user.model");

const friendController = {
    add: async (req, res, next) => {
        try {
            const { user1_id, user2_id } = req.body;
            const checkFriends = await Friends.find({
                $or: [
                    { user1_id: user1_id, user2_id: user2_id },
                    { user1_id: user2_id, user2_id: user1_id },
                ]
            });
            if (checkFriends?.length > 0) {
                return res.status(200).send({ error: true, message: "You both are already friends." });
            }
            Friends.create(req.body).then(() => {
                res.status(200).send({ success: true, message: "Friend request has been send." });
            }).catch((err) => {
                res.status(400).send({ error: true, message: err });
            })
        } catch (error) {
            res.status(400).send({ error: true, message: error });
        }
    },
    accept: async (req, res, next) => {
        try {
            const { user1_id, user2_id } = req.body;
            const checkFriends = await Friends.find({
                $or: [
                    { user1_id: user1_id, user2_id: user2_id },
                    { user1_id: user2_id, user2_id: user1_id },
                ],
                is_friend: { $ne: true }
            });
            if (checkFriends?.length > 0) {

                Friends.updateOne({ user1_id: user1_id, user2_id: user2_id }, { is_friend: true }).then(() => {
                    res.status(200).send({ success: true, message: "You both are now friends." });
                }).catch((err) => {
                    res.status(400).send({ error: true, message: err });
                })
            } else {
                return res.status(200).send({ error: true, message: "You both are already friends." });
            }
        } catch (error) {
            res.status(400).send({ error: true, message: error });
        }
    },
    get: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id); // get user by ID
            const friends = await Friends.find({
                $or: [{ user1_id: user._id }, { user2_id: user._id }],
                is_friend: true, // only return friends who are actually friends (is_friend = true)
            })
            .populate("user2_id", "username email number"); // populate user2_id field with username and email

            res.status(200).send({ success: true, data: friends });

        } catch (error) {
            res.status(400).send({ error: true, message: error });
        }
    },
    getRequests: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id); // get user by ID
            const friends = await Friends.find({
                $or: [{ user1_id: user._id }, { user2_id: user._id }],
                is_friend: false, // only return friends who are not friends yet but have sent the request(is_friend = false)
            })
            .populate("user2_id", "username email number"); // populate user2_id field with username and email

            res.status(200).send({ success: true, data: friends });

        } catch (error) {
            res.status(400).send({ error: true, message: error });
        }
    },
    unfollow: async (req, res, next) => {
        try {
            const { user1_id, user2_id } = req.body;
            Friends.updateOne({ user1_id: user1_id, user2_id: user2_id }, { is_friend: false }).then(() => {
                res.status(200).send({ success: true, message: "You have unfollowed." });
            }).catch((err) => {
                res.status(400).send({ error: true, message: err });
            })
        } catch (error) {
            res.status(400).send({ error: true, message: error });
        }
    }
}

module.exports = friendController;