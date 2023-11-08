import bcrypt from 'bcryptjs';

import { Connection } from '../database/Connection';
import { UserModel } from '../models/UserModel';

export class UserService {

    static async initialize() {
        await Connection.connect();
    }

    static async createUser(userData: any) {
        try {
            await this.initialize();

            const hashedPassword = await bcrypt.hash(userData.password, 8);
            const user = new UserModel({
                ...userData,
                password: hashedPassword,
            });
            return await user.save();
        }
        catch (error){
            console.log('Error in service: ',error.message);
            return
        } finally {
            await this.terminate();
        } 
   
    }

    static async findAllUsers() {
        try {
            await this.initialize();

            return await UserModel.find();
        } catch (error){
            console.log('Error in service: ',error.message);
            return
        } finally {
            await this.terminate();
        } 
        
    }

    static async findUserById(id: string) {
        try {
            await this.initialize();
            return await UserModel.findById(id);
        } catch (error){
            console.log('Error in service: ',error.message);
            return
        } finally {
            await this.terminate();
        } 
        
    }

    static async updateUser(id: string, userData: any) {
        try {
            await this.initialize();
            return await UserModel.findByIdAndUpdate(id, userData, { new: true });
        } catch (error){
            console.log('Error in service: ',error.message);
            return
        } finally {
            await this.terminate();
        } 
        
    }

    static async deleteUser(id: string) {
        try {
            await this.initialize();
            return await UserModel.findByIdAndDelete(id);
        } catch (error){
            console.log('Error in service: ',error.message);
            return
        } finally {
            await this.terminate();
        } 
    }

    // Método para desconectar do banco de dados
    static async terminate() {
        await Connection.disconnect();
    }
}

