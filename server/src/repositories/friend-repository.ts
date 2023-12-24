import mongoose from 'mongoose';
import { FriendInterface } from '../interfaces/friend-interface.js';
import Friend from '../models/friend.js';

export const findAllFriendsRepository = () => Friend.find();

export const findFriendByIdRepository = (idFriend: string) => Friend.findById(idFriend);

export const findFriendByCodeRepository = (codeFriend: string) => {
    return Friend.findOne({ code: codeFriend }).exec();
};

export const createFriendRepository = ({
    code,
    name,
    websiteLink
}: FriendInterface) => 
    Friend.create({
        code,
        name,
        websiteLink,
    });

export const updateFriendRepository = async (id: string, friendData: Partial<FriendInterface>): Promise<mongoose.Document | null> => {
    const updateFriend = await Friend.findOneAndUpdate (
        { _id: id },
        { ...friendData },
        { rawResult: true }
    );

    return updateFriend;
}

export const deleteFriendRepository = (id: string) => Friend.findOneAndDelete({ _id: id }, { rawResult: true });