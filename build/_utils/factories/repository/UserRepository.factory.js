"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryFactory = void 0;
const User_repository_1 = require("../../../userManagement/infra/repository/User.repository");
const Prisma_singleton_1 = require("../../singletons/Prisma.singleton");
class UserRepositoryFactory {
    static createUserRepository() {
        return new User_repository_1.UserRepository(Prisma_singleton_1.PrismaSingleton.getPrismaClient());
    }
}
exports.UserRepositoryFactory = UserRepositoryFactory;
