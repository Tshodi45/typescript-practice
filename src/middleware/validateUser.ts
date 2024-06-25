//user routes, contollers and services

//implement validation middleware for fro request// middleware and error handling

import { Request, Response,NextFunction } from "express";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields'});
    }
    next();
}