import { CreateProfessionalService } from "src/userManagement/domain/service/Professional/CreateProfessional.service";



export class ProfessionalServiceFactory {
  static createCreateProfessionalService() {
    return new CreateProfessionalService();
  }
}
