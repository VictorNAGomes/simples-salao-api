import { UpdateServiceValidator } from "src/_application/validators/appointment/service/UpdateService.validator";

export class ServiceValidatorFactory {
  static makeUpdateServiceValidator() {
    return new UpdateServiceValidator();
  }
}
