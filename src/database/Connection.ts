import mongoose from "mongoose";

// Import the dotenv package
import dotenv from "dotenv";

// Load the environment variables from the .env file
dotenv.config()


export class Connection {
    static async connect() {
        try {
            await mongoose.connect(process.env.DB_URI ?? 'mongodb+srv://rodzan:88go4eY8aEwDymZ0@cluster0.lgovzsr.mongodb.net/');
            console.log("Database connected");
        } catch (error) {
            console.error("Database connection error", error);
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Database disconnected");
        } catch (error) {
            console.error("Database disconnection error", error);
        }
    }
}
