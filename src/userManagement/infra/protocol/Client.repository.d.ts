import { ClientDomain } from "src/userManagement/domain";

export interface ClientRepositoryProtocol {
  create(data: {
    clientData: Omit<ClientDomain, "idUser" | "idClient">
  }): Promise<{ client: ClientDomain }>;
  getAll(filters: { name?: string }): Promise<ClientDomain[]>;
  getOne(idClient: string): Promise<ClientDomain | null>;
  update(
    idClient: string,
    clientData: Omit<
      Partial<ClientDomain>,
      "idClient" | "idUser" | "password" | "email"
    >
  ): Promise<{ idClient: string } | null>;
  delete(idClient: string): Promise<true | null>;
}
