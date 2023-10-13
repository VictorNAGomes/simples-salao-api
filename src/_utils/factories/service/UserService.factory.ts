import { LoginService } from "../../../userManagement/domain/service/User/Login.service";
import { UserRepositoryFactory } from "../repository/UserRepository.factory";

export class UserServiceFactory {
  static createUserService() {
    const userRepository = UserRepositoryFactory.createUserRepository();
    return new LoginService(userRepository);
  }
}
