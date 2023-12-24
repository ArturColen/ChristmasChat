import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
});

const Friend = mongoose.model('Friend', FriendSchema);

export default Friend;