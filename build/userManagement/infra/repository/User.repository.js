"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByEmail(email) {
        return this.prisma;
        throw new Error("Method not implemented.");
    }
    save(user) {
        throw new Error("Method not implemented.");
    }
}
exports.UserRepository = UserRepository;
