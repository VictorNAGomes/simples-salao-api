import { Prisma, PrismaClient } from "@prisma/client";
import { ClientDomain } from "../../domain/Client.domain";
import { ClientRepositoryProtocol } from "../protocol";
import { profile } from "console";

export class ClientRepository implements ClientRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async create(data: {
    clientData: Omit<ClientDomain, "idUser" | "idClient">;
  }) {
    const insertData: Prisma.ClientCreateInput = {
      user: {
        create: {
          email: data.clientData.email,
          password: data.clientData.password,
          name: data.clientData.name
        }
      }
    };

    const dbResult = await this.prisma.client.create({
      data: insertData,
      include: {
        user: true,
      },
    });

    if (!dbResult) throw new Error("Erro ao criar profissional");

    const client = new ClientDomain({
      email: dbResult.user.email,
      idClient: dbResult.idClient,
      name: dbResult.user.name,
      password: dbResult.user.password,
      idUser: dbResult.user.idUser,
    });

    return {
      client,
    };
  }

  public async get(data: Partial<ClientDomain>) {
    const dbResult = await this.prisma.client.findMany({
      where: {
        user: {
          email: data.email,
        },
      },
      include: {
        user: true,
      },
    });

    const clients = dbResult.map((client) => {
      return new ClientDomain({
        email: client.user.email,
        idClient: client.idClient,
        name: client.user.name,
        password: client.user.password,
        idUser: client.user.idUser,
      });
    });

    return clients;
  }

  public async getAll(filters: { name?: string }) {
    const dbResult = await this.prisma.client.findMany({
      where: {
        user: {
          name: {
            contains: filters.name,
            // mode: "insensitive",
          },
        },
      },
      include: {
        user: true,
      },
    });

    const clients = dbResult.map((client) => {
      return new ClientDomain({
        email: client.user.email,
        idClient: client.idClient,
        name: client.user.name,
        password: client.user.password,
        idUser: client.user.idUser,
      });
    });

    return clients;
  }

  public async getOne(
    idClient: string
  ): Promise<ClientDomain | null> {
    const dbResult = await this.prisma.client.findUnique({
      where: {
        idClient,
      },
      include: {
        user: true,
      },
    });

    if (!dbResult) {
      return null;
    }

    return new ClientDomain({
      email: dbResult.user.email,
      idClient: dbResult.idClient,
      name: dbResult.user.name,
      password: dbResult.user.password,
      idUser: dbResult.user.idUser,
    });
  }

  public async update(
    idClient: string,
    clientData: Omit<
      Partial<ClientDomain>,
      "idClient" | "password" | "email"
    >
  ) {
    const client: Prisma.ClientUpdateInput = {
      user: {
        update: {
          name: clientData.name,
        },
      },
    };
    const dbResult = await this.prisma.client.update({
      where: {
        idClient,
      },
      data: client,
    });

    if (!dbResult) {
      return null;
    }

    const updatedClient = {
      idClient: dbResult.idClient,
    };

    return updatedClient;
  }

  async delete(idClient: string): Promise<true | null> {
    const client: ClientDomain | null = await this.getOne(idClient)

    await this.prisma.$transaction([
      this.prisma.client.delete({
        where: { 
          idClient,
        },
      }),
      this.prisma.user.delete({
        where:{
          idUser: client?.idUser
        }
      })
    ])

    return true;
  }
}
