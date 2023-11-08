import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
    public async createUser(req: Request, res: Response) {
        try {
            const user = await userService.createUser(req.body);
            return res.status(201).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.findAllUsers();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async getUser(req: Request, res: Response){
        try {
            const user = await userService.findUserById(req.params.id as string);
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
            const user = await userService.updateUser(req.params.id as string, req.body);
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async deleteUser(req: Request, res: Response){
        try {
            const user = await userService.deleteUser(req.params.id as string);
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
