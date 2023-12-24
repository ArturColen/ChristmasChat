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
exports.deleteFriendController = exports.updateFriendController = exports.createFriendController = exports.findFriendByCodeController = exports.findAllFriendsController = void 0;
const friendService = __importStar(require("../services/friend-service.js"));
const validations_service_js_1 = require("../services/validations-service.js");
const findAllFriendsController = async (req, res) => {
    try {
        const friends = await friendService.findAllFriendsService();
        res.status(200).json({
            Friends: friends
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};
exports.findAllFriendsController = findAllFriendsController;
const findFriendByCodeController = async (req, res) => {
    try {
        const code = req.query.code;
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
            message: error.message
        });
    }
};
exports.findFriendByCodeController = findFriendByCodeController;
const createFriendController = async (req, res) => {
    try {
        const friendData = req.body;
        (0, validations_service_js_1.validateFriendData)(friendData);
        const createdFriend = await friendService.createFriendService(friendData);
        res.status(201).json({
            message: 'Amigo salvo com sucesso!',
            Friend: createdFriend
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
exports.createFriendController = createFriendController;
const updateFriendController = async (req, res) => {
    try {
        const id = req.params.id;
        const friendData = req.body;
        if (!id) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        (0, validations_service_js_1.validateFriendData)(friendData);
        const updatedFriend = await await friendService.updateFriendService(id, friendData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso!',
            Friend: updatedFriend
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};
exports.updateFriendController = updateFriendController;
const deleteFriendController = async (req, res) => {
    try {
        const id = req.params.id;
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
            message: error.message
        });
    }
};
exports.deleteFriendController = deleteFriendController;
