import { CreateProfessionalService } from "src/userManagement/domain/service/Professional/CreateProfessional.service";
import { GetProfessionalService } from "src/userManagement/domain/service/Professional/GetProfessional.service";


export class ProfessionalServiceFactory {
  static createCreateProfessionalService() {
    return new CreateProfessionalService();
  }
  static createGetProfessionalService() {
    return new GetProfessionalService();
  }
}
