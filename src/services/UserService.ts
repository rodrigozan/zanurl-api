import { UserModel } from '../models/UserModel';

export class UserService {
    async createUser(userData: any) {
        const user = new UserModel(userData);
        return await user.save();
    }

    async findAllUsers() {
        return await UserModel.find();
    }

    async findUserById(userId: string) {
        return await UserModel.findById(userId);
    }

    async updateUser(userId: string, userData: any) {
        return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId: string) {
        return await UserModel.findByIdAndDelete(userId);
    }
}
