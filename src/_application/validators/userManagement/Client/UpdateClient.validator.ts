import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";
import { ClientDomain } from "src/userManagement/domain";

export class UpdateClientValidator {
  private schema = Joi.object({
    idClient: Joi.string().required().uuid(),
    name: Joi.string(),
  });
  validate(
    idClient: string,
    clientData: Omit<
      Partial<ClientDomain>,
      "idClient" | "idUser" | "password" | "email"
    >
  ) {
    if (Object.keys(clientData).length === 0) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Os dados do cliente não foram informados", 400)
      );
    }

    const result = this.schema.validate(
      { idClient, ...clientData },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
