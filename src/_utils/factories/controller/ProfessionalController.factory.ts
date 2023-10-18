import { ProfessionalController } from "src/_application/controllers/userManagement/Professional.controller";

export class ProfessionalControllerFactory {
  static createProfessionalController() {
    return new ProfessionalController
  }
}