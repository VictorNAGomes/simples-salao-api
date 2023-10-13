"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
const Router = () => {
    const router = (0, express_1.Router)();
    router.get("/", (request, response) => {
        response.json({ message: "Olá mundo" });
    });
    router.use(user_routes_1.userRoutes);
    return router;
};
exports.Router = Router;
