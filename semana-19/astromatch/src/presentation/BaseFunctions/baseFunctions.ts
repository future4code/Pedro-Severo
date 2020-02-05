import { JwtAuthService } from "../../services/auth/jwtAuthService";
import { Request } from "express";

export const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

export const authenticate = (req: Request) => {
    const authService = new JwtAuthService()
    return authService.getUserIdFromToken(getTokenFromHeaders(req.headers))
};