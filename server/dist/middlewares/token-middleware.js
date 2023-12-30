"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenInBack = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyTokenInBack = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const authArray = auth?.split(' ');
        const secretKey = process.env.SECRET_KEY ?? '';
        if (typeof auth !== 'string' || auth.trim() === '') {
            return res.status(401).json({
                message: 'Token não informado!'
            });
        }
        if (authArray?.length !== 2 || authArray[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Token inválido!'
            });
        }
        const token = authArray[1];
        if (token !== secretKey) {
            return res.status(401).json({
                message: 'Token inválido!'
            });
        }
        next();
    }
    catch (error) {
        res.status(401).json({
            message: 'Acesso não autorizado!'
        });
    }
};
exports.verifyTokenInBack = verifyTokenInBack;
