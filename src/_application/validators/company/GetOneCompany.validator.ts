import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";

export class GetOneCompanyValidator {
  private schema = Joi.object({
    idCompany: Joi.string().required().uuid(),
  });
  validate(idCompany?: string) {
    const result = this.schema.validate(
      { idCompany },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
