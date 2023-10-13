import { LoginService } from "../../../userManagement/domain/service/User/Login.service";
import { UserRepositoryFactory } from "../repository/UserRepository.factory";

export class UserServiceFactory {
  createUserService() {
    const userRepository = UserRepositoryFactory.createUserRepository();
    return new LoginService(userRepository);
  }
}
