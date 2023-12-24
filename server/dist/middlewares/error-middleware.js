"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({
            error: 'Erro de análise JSON. Verifique o formato do seu JSON.'
        });
    }
    else {
        next();
    }
};
exports.errorMiddleware = errorMiddleware;
