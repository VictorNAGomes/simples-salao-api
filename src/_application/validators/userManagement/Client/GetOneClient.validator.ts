import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";

export class GetOneClientValidator {
  private schema = Joi.object({
    idClient: Joi.string().required().uuid(),
  });
  validate(idClient?: string) {
    const result = this.schema.validate(
      { idClient },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
