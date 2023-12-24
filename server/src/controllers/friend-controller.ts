import { Request, Response } from 'express';
import { FriendInterface } from '../interfaces/friend-interface.js';
import * as friendService from '../services/friend-service.js';
import { validateFriendData } from '../services/validations-service.js';

export const findAllFriendsController = async (req: Request, res: Response) => {
    try {
        const friends = await friendService.findAllFriendsService();

        res.status(200).json({
            Friends: friends
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message
        });
    }
}

export const findFriendByCodeController = async (req: Request, res: Response) => {
    try {
        const code = req.query.code as string | undefined;

        if (!code) {
            throw new Error("O parâmetro 'code' não foi fornecido na consulta.");
        }

        const foundFriend = await friendService.findFriendByCodeService(code);

        if (!foundFriend) {
            res.status(404).json({
                message: 'Amigo não encontrado!'
            });

            return;
        }

        res.status(200).json({
            Friend: foundFriend
        });
    } 
    catch (error) {
        res.status(500).json({
            message: (error as Error).message
        });
    }
};

export const createFriendController = async (req: Request, res: Response) => {
    try {
        const friendData = req.body as FriendInterface;

        validateFriendData(friendData);

        const createdFriend = await friendService.createFriendService(friendData);

        res.status(201).json({
            message: 'Amigo salvo com sucesso!',
            Friend: createdFriend
        });
    }
    catch (error) {
        res.status(500).json({
            message: (error as Error).message
        });
    }
}

export const updateFriendController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string | undefined;
        const friendData = req.body as FriendInterface;

        if (!id) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }

        validateFriendData(friendData);

        const updatedFriend = await await friendService.updateFriendService(id, friendData);

        res.status(200).json({
            message: 'Dados atualizados com sucesso!',
            Friend: updatedFriend
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message
        });
    }
}

export const deleteFriendController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string | undefined;

        if (!id) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }

        await friendService.deleteFriendService(id);

        res.status(200).json({
            message: 'Exclusão realizada com sucesso!'
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message
        });
    }
}