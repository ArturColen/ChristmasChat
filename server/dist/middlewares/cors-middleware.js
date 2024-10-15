'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.configureCORS = void 0;
const configureCORS = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });
};
exports.configureCORS = configureCORS;
