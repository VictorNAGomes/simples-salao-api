import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";
import { ProfessionalDomain } from "src/userManagement/domain";

export class UpdateProfessionalValidator {
  private schema = Joi.object({
    idProfessional: Joi.string().required().uuid(),
    name: Joi.string(),
  });
  validate(
    idProfessional: string,
    professionalData: Omit<
      Partial<ProfessionalDomain>,
      "idProfessional" | "idUser" | "password" | "email"
    >
  ) {
    if (Object.keys(professionalData).length === 0) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Os dados do profissional não foram informados", 400)
      );
    }

    const result = this.schema.validate(
      { idProfessional, ...professionalData },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
