import { DeleteServiceValidator } from "src/_application/validators/appointment/service/DeleteService.validator";
import { UpdateServiceValidator } from "src/_application/validators/appointment/service/UpdateService.validator";

export class ServiceValidatorFactory {
  static makeUpdateServiceValidator() {
    return new UpdateServiceValidator();
  }
  static makeDeleteServiceValidator() {
    return new DeleteServiceValidator();
  }
}
