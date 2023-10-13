"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./_application/server"));
const routes_1 = require("./_application/routes/routes");
const server = new server_1.default((0, routes_1.Router)());
server.start();
