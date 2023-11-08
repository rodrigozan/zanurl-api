import express from "express";

import router from "./router";

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleaware()
        this.routes()
    }

    private middleaware() {
        this.server.use(express.json())
    }

    private routes() {
        this.server.use(router)
    }
}