"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtAuthService_1 = require("../../services/auth/jwtAuthService");
exports.getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
exports.authenticate = (req) => {
    const authService = new jwtAuthService_1.JwtAuthService();
    return authService.getUserIdFromToken(exports.getTokenFromHeaders(req.headers));
};
