'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const friend_controller_js_1 = require('../controllers/friend-controller.js');
const token_middleware_js_1 = require('../middlewares/token-middleware.js');
const friendRouter = express_1.default.Router();
friendRouter.get(
    '/',
    token_middleware_js_1.verifyTokenInBack,
    friend_controller_js_1.findAllFriendsController
);
friendRouter.get(
    '/search',
    token_middleware_js_1.verifyTokenInBack,
    friend_controller_js_1.findFriendByCodeController
);
friendRouter.post(
    '/',
    token_middleware_js_1.verifyTokenInBack,
    friend_controller_js_1.createFriendController
);
friendRouter.put(
    '/:id',
    token_middleware_js_1.verifyTokenInBack,
    friend_controller_js_1.updateFriendController
);
friendRouter.delete(
    '/:id',
    token_middleware_js_1.verifyTokenInBack,
    friend_controller_js_1.deleteFriendController
);
exports.default = friendRouter;
