import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const verifyTokenInBack = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = req.headers.authorization;
        const authArray = auth?.split(' ');
        const secretKey: string = process.env.SECRET_KEY ?? '';

        if (typeof auth !== 'string' || auth.trim() === '') {
            return res.status(401).json({
                message: 'Token não informado!',
            });
        }

        if (authArray?.length !== 2 || authArray[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Token inválido!',
            });
        }

        const token = authArray[1];

        if (token !== secretKey) {
            return res.status(401).json({
                message: 'Token inválido!',
            });
        }

        next();
    } catch (error) {
        res.status(401).json({
            message: 'Acesso não autorizado!',
        });
    }
};
