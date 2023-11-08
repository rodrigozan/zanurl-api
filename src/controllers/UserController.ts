import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

const service = UserService;

class UserController {
    public async createUser(req: Request, res: Response) {
        try {
            const user = await service.createUser(req.body);
            return res.status(201).send(user);
        } catch (error) {
            console.log('Error in controller: ',error.message);
            return res.status(500).send(error.message);
        }
    }

    public async getAllUsers(_req: Request, res: Response) {
        try {
            const users = await service.findAllUsers();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    public async getUser(req: Request, res: Response){
        try {
            const user = await service.findUserById(req.params.id as string);
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
            const user = await service.updateUser(req.params.id as string, req.body);
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
            const user = await service.deleteUser(req.params.id as string);
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

export default new UserController();
