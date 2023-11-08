// Importing express library
import express from "express";

// Importing router module
import router from "./router";

// App class to create and configure the express application
export class App {
    // Express application instance
    public server: express.Application;

    // Constructor to initialize the server
    constructor() {
        // Create an express application
        this.server = express();
        // Apply middleware
        this.middleware();
        // Apply routes
        this.routes();
    }

    /**
     * Apply middleware to the server.
     * In this case, we are using express.json() middleware to parse incoming request bodies.
     */
    private middleware() {
        this.server.use(express.json());
    }

    /**
     * This function sets up the routes for the server.
     * It uses the router middleware.
     */
    private routes() {
        // Use the router middleware
        this.server.use(router);
    }
}