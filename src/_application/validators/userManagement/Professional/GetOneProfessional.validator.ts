import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";
export class GetOneProfessionalValidator {
  private schema = Joi.object({
    idProfessional: Joi.string().required().uuid(),
  });
  validate(idProfessional?: string) {
    const result = this.schema.validate(
      { idProfessional },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
