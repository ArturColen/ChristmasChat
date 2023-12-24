import express from 'express';
import { findAllFriendsController, findFriendByCodeController, createFriendController, updateFriendController, deleteFriendController } from '../controllers/friend-controller.js';

const friendRouter = express.Router();

friendRouter.get('/', findAllFriendsController);

friendRouter.get('/search', findFriendByCodeController);

friendRouter.post('/', createFriendController);

friendRouter.put('/:id', updateFriendController);

friendRouter.delete('/:id', deleteFriendController);

export default friendRouter;