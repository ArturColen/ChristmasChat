"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFriendService = exports.updateFriendService = exports.createFriendService = exports.findFriendByCodeService = exports.findAllFriendsService = void 0;
const friendRepository = __importStar(require("../repositories/friend-repository.js"));
const validations_service_js_1 = require("./validations-service.js");
const findAllFriendsService = async () => {
    try {
        const friends = await friendRepository.findAllFriendsRepository();
        return friends;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findAllFriendsService = findAllFriendsService;
const findFriendByCodeService = async (codeFriend) => {
    try {
        const foundFriend = await friendRepository.findFriendByCodeRepository(codeFriend);
        return foundFriend;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findFriendByCodeService = findFriendByCodeService;
const createFriendService = async (friendData) => {
    try {
        (0, validations_service_js_1.validateFriendData)(friendData);
        const createdFriend = await friendRepository.createFriendRepository(friendData);
        return createdFriend;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.createFriendService = createFriendService;
const updateFriendService = async (id, friendData) => {
    try {
        (0, validations_service_js_1.validateFriendData)(friendData);
        const updatedFriend = await friendRepository.updateFriendRepository(id, friendData);
        if (!updatedFriend) {
            throw new Error('Amigo não encontrado!');
        }
        const updatedFriendDocument = await friendRepository.findFriendByIdRepository(id);
        if (!updatedFriendDocument) {
            throw new Error('Amigo não encontrado!');
        }
        return updatedFriendDocument;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.updateFriendService = updateFriendService;
const deleteFriendService = async (id) => {
    try {
        const deletedFriend = await friendRepository.deleteFriendRepository(id);
        if (!deletedFriend) {
            throw new Error('Amigo não encontrado!');
        }
        return deletedFriend;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.deleteFriendService = deleteFriendService;
