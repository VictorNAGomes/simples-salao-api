import { CreateClientService } from "src/userManagement/domain/service/Client/CreateClient.service";
import { UpdateClientService } from "src/userManagement/domain/service/Client/UpdateClient.service";

export class ClientServiceFactory {
  static createCreateClientService() {
    return new CreateClientService();
  }
  static createUpdateClientService() {
    return new UpdateClientService();
  }
}
