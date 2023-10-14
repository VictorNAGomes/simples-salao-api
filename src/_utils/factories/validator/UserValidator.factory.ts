import { LoginValidator } from "@validators";

export class UserValidatorFactory {
  static createLoginValidator() {
    return new LoginValidator();
  }
}
