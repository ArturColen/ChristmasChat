'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteFriendRepository =
    exports.updateFriendRepository =
    exports.createFriendRepository =
    exports.findFriendByCodeRepository =
    exports.findFriendByIdRepository =
    exports.findAllFriendsRepository =
        void 0;
const friend_js_1 = __importDefault(require('../models/friend.js'));
const findAllFriendsRepository = () => friend_js_1.default.find();
exports.findAllFriendsRepository = findAllFriendsRepository;
const findFriendByIdRepository = (idFriend) => friend_js_1.default.findById(idFriend);
exports.findFriendByIdRepository = findFriendByIdRepository;
const findFriendByCodeRepository = (codeFriend) => {
    return friend_js_1.default.findOne({ code: codeFriend }).exec();
};
exports.findFriendByCodeRepository = findFriendByCodeRepository;
const createFriendRepository = ({ code, name, websiteLink }) =>
    friend_js_1.default.create({
        code,
        name,
        websiteLink,
    });
exports.createFriendRepository = createFriendRepository;
const updateFriendRepository = async (id, friendData) => {
    const updateFriend = await friend_js_1.default.findOneAndUpdate(
        { _id: id },
        { ...friendData },
        { rawResult: true }
    );
    return updateFriend;
};
exports.updateFriendRepository = updateFriendRepository;
const deleteFriendRepository = (id) =>
    friend_js_1.default.findOneAndDelete({ _id: id }, { rawResult: true });
exports.deleteFriendRepository = deleteFriendRepository;
