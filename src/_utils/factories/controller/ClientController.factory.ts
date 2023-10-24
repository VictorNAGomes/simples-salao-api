import { ClientController } from "src/_application/controllers/userManagement/Client.controller";

export class ClientControllerFactory {
  static createClientController() {
    return new ClientController
  }
}