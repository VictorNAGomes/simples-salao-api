import { Request, Response } from "express";
import { CreateClientValidator } from "src/_application/validators/userManagement/Client/CreateClient.validator";
import { GetAllClientsValidator } from "src/_application/validators/userManagement/Client/GetAllClients.validator";
import { GetOneClientValidator } from "src/_application/validators/userManagement/Client/GetOneClient.validator";
import { UpdateClientValidator } from "src/_application/validators/userManagement/Client/UpdateClient.validator";
import { ClientServiceFactory } from "src/_utils/factories/service/ClientService.factory";
import { GetAllClientsService } from "src/userManagement/domain/service/Client/GetAllClients.service";
import { GetOneClientService } from "src/userManagement/domain/service/Client/GetOneClient.service";

export class ClientController {
  async create(req: Request, res: Response) {
    try {
      const validator = new CreateClientValidator();
      const { error } = validator.validate(req.body);
      if (error) {
        throw new Error(error.message);
      }

      const createClientService =
        ClientServiceFactory.createCreateClientService();

      const result = await createClientService.execute(req.body);

      res.status(201).json({
        message: "Conta pessoal e conta de empresa criadas com sucesso",
        result,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getAllClientsService = new GetAllClientsService();
      const validator = new GetAllClientsValidator();

      validator.validate({ name: `${req.query.name}` });

      const result = await getAllClientsService.execute(req.query);

      res
        .status(200)
        .json({ result, message: "Profissionais encontrados com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const getOneClientService = new GetOneClientService();
      const validator = new GetOneClientValidator();
      validator.validate(req.params.idClient);

      const result = await getOneClientService.execute(
        req.params.idClient
      );

      res
        .status(200)
        .json({ result, message: "Cliente encontrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const updateClientService =
        ClientServiceFactory.createUpdateClientService();

      const validator = new UpdateClientValidator();
      validator.validate(req.params.idClient, req.body);

      console.log(req.params)
      const result = await updateClientService.execute(
        req.params.idClient,
        req.body
      );

      res
        .status(200)
        .json({ result, message: "Cliente atualizado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }
}
