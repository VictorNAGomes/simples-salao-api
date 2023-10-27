import { CreateClientService } from "src/userManagement/domain/service/Client/CreateClient.service";
import { DeleteClientService } from "src/userManagement/domain/service/Client/DeleteClient.service";
import { UpdateClientService } from "src/userManagement/domain/service/Client/UpdateClient.service";

export class ClientServiceFactory {
  static createCreateClientService() {
    return new CreateClientService();
  }
  static createUpdateClientService() {
    return new UpdateClientService();
  }
  static createDeleteClientService() {
    return new DeleteClientService();
  }
}
