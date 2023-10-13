"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSingleton = void 0;
const client_1 = require("@prisma/client");
class PrismaSingleton {
    constructor() { }
    static getPrismaClient() {
        if (!PrismaSingleton.prisma) {
            PrismaSingleton.prisma = new client_1.PrismaClient();
        }
        return PrismaSingleton.prisma;
    }
}
exports.PrismaSingleton = PrismaSingleton;
