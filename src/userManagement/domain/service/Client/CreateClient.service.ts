import { Service } from "@interfaces";
import { ClientDomain } from "../../Client.domain";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";
import { PrismaSingleton } from "@singletons";

export class CreateClientService implements Service {
  async execute({
    client,
  }: {
    client: Omit<ClientDomain, "idUser" | "idClient">;
  }) {
    const clientRepository = new ClientRepository(
      PrismaSingleton.getPrismaClient()
    );

    const clientAlreadyExists = await clientRepository.get({
      email: client.email,
    });

    if (clientAlreadyExists.length > 0) {
      throw new Error("Já existe um cliente cadastrado com esse email");
    }

    return clientRepository.create({
      clientData: client,
    });
  }
}
