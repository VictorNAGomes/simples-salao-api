"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceFactory = void 0;
const Login_service_1 = require("../../../userManagement/domain/service/User/Login.service");
const UserRepository_factory_1 = require("../repository/UserRepository.factory");
class UserServiceFactory {
    static createUserService() {
        const userRepository = UserRepository_factory_1.UserRepositoryFactory.createUserRepository();
        return new Login_service_1.LoginService(userRepository);
    }
}
exports.UserServiceFactory = UserServiceFactory;
