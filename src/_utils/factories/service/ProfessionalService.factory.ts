import { CreateProfessionalService } from "src/userManagement/domain/service/Professional/CreateProfessional.service";
import { UpdateProfessionalService } from "src/userManagement/domain/service/Professional/UpdateProfessional.service";

export class ProfessionalServiceFactory {
  static createCreateProfessionalService() {
    return new CreateProfessionalService();
  }
  static createUpdateProfessionalService() {
    return new UpdateProfessionalService();
  }
}
