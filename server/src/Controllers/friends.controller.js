const Friends = require("../Models/friend.model");

const friendController = {
    add: async(req, res, next)=> {
        try {
            const { user1_id, user2_id } = req.body;
            const checkFriends = await Friends.find({
                $or: [
                    { user1_id: user1_id, user2_id: user2_id },
                    { user1_id: user2_id, user2_id: user1_id },
                ]
            });
            if(checkFriends?.length > 0) {
                return res.status(200).send({error: true, message: "You both are already friends."});
            }
            Friends.create(req.body).then(()=> {
                res.status(200).send({success: true, message: "Friend request has been send."});
            }).catch((err)=> {
                res.status(400).send({error: true, message: err});
            })
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    },
    get: async(req, res, next)=> {
        try {
            const id = req.params.id;
            const friends = await Friends.find({user1_id: id});
            res.status(200).send({success: true, data: friends});
        } catch (error) {
            res.status(400).send({error: true, message: error});
        }
    }
}

module.exports = friendController;