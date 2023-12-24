import { FriendInterface } from '../interfaces/friend-interface';

export const validateFriendData = (friendData: FriendInterface) => {
    if (!friendData.code) {
        throw new Error('Favor preencher corretamente o código do amigo!');
    }
    else if (typeof friendData.code !== 'string') {
        throw new Error('O código do amigo deve ser uma string válida!');
    }
    else if (friendData.code.trim() === '') {
        throw new Error('O código do amigo não pode ser um campo vazio!');
    }

    if (!friendData.name) {
        throw new Error('Favor preencher corretamente o nome do amigo!');
    }
    else if (typeof friendData.name !== 'string') {
        throw new Error('O nome do amigo deve ser uma string válida!');
    }
    else if (friendData.name.trim() === '') {
        throw new Error('O nome do amigo não pode ser um campo vazio!');
    }

    if (!friendData.websiteLink) {
        throw new Error('Favor preencher corretamente o link do site do amigo!');
    }
    else if (typeof friendData.websiteLink !== 'string') {
        throw new Error('O link do site do amigo deve ser uma string válida!');
    }
    else if (friendData.websiteLink.trim() === '') {
        throw new Error('O link do site do amigo não pode ser um campo vazio!');
    }
}