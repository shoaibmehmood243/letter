const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
    user1_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    user2_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    is_friend: { type: Boolean, default: false }
}, { timestamps: true });

const Friends = mongoose.model("friends", friendSchema);

module.exports = Friends;