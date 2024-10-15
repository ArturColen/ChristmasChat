import { FriendInterface } from '../interfaces/friend-interface.js';
import * as friendRepository from '../repositories/friend-repository.js';
import { validateFriendData } from './validations-service.js';

export const findAllFriendsService = async () => {
    try {
        const friends = await friendRepository.findAllFriendsRepository();

        return friends;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const findFriendByCodeService = async (
    codeFriend: string
): Promise<FriendInterface | null> => {
    try {
        const foundFriend = await friendRepository.findFriendByCodeRepository(codeFriend);

        return foundFriend;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const createFriendService = async (friendData: FriendInterface) => {
    try {
        validateFriendData(friendData);

        const createdFriend = await friendRepository.createFriendRepository(friendData);

        return createdFriend;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const updateFriendService = async (id: string, friendData: FriendInterface) => {
    try {
        validateFriendData(friendData);

        const updatedFriend = await friendRepository.updateFriendRepository(id, friendData);

        if (!updatedFriend) {
            throw new Error('Amigo não encontrado!');
        }

        const updatedFriendDocument = await friendRepository.findFriendByIdRepository(id);

        if (!updatedFriendDocument) {
            throw new Error('Amigo não encontrado!');
        }

        return updatedFriendDocument;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const deleteFriendService = async (id: string) => {
    try {
        const deletedFriend = await friendRepository.deleteFriendRepository(id);

        if (!deletedFriend) {
            throw new Error('Amigo não encontrado!');
        }

        return deletedFriend;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
