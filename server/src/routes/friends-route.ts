import express from 'express';
import { findAllFriendsController, findFriendByCodeController, createFriendController, updateFriendController, deleteFriendController } from '../controllers/friend-controller.js';
import { verifyTokenInBack } from '../middlewares/token-middleware.js';

const friendRouter = express.Router();

friendRouter.get('/', verifyTokenInBack, findAllFriendsController);

friendRouter.get('/search', verifyTokenInBack, findFriendByCodeController);

friendRouter.post('/', verifyTokenInBack, createFriendController);

friendRouter.put('/:id', verifyTokenInBack, updateFriendController);

friendRouter.delete('/:id', verifyTokenInBack, deleteFriendController);

export default friendRouter;