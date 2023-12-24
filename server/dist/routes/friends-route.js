"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const friend_controller_js_1 = require("../controllers/friend-controller.js");
const friendRouter = express_1.default.Router();
friendRouter.get('/', friend_controller_js_1.findAllFriendsController);
friendRouter.get('/search', friend_controller_js_1.findFriendByCodeController);
friendRouter.post('/', friend_controller_js_1.createFriendController);
friendRouter.put('/:id', friend_controller_js_1.updateFriendController);
friendRouter.delete('/:id', friend_controller_js_1.deleteFriendController);
exports.default = friendRouter;
