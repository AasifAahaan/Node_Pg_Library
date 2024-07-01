import { Request, Response } from "express";
import { Client } from 'pg';
import { clientConfig } from "../config/clientConfig";

export class UserController {
    static async handleAddUserController(req: Request, res: Response) {
        const client = new Client(clientConfig);
        try {
            await client.connect();
            const { username, email, password } = req.body;
            const result = await client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
            console.log('Query executed successfully:', result.rows[0]);

            res.status(201).json(result.rows[0]);
        } catch (err: any) {
            console.error('Error creating user:', err);
            console.error(err.stack);
            res.status(500).json({ error: 'Error creating user' });
        } finally {
            await client.end();
        }
    }
}