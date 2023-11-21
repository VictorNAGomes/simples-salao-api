import { ErrorHandler } from "@utils/ErrorHandler";
import Joi from "joi";
import { CustomError } from "src/_application/CustomError";
import { CompanyDomain } from "src/company/domain/Company.domain";

export class UpdateCompanyValidator {

  private schema = Joi.object<CompanyDomain>({
    cnpj: Joi.string(),
    name: Joi.string(),
    timeUnit: Joi.number(),
    openingTime: Joi.number(),
    closingTime: Joi.number(),
    creationDate: Joi.date()
  });
  validate(

    idCompany: string,
    clientData: Omit<
      Partial<CompanyDomain>,
      "idCompany"
    >
  ) {
    if (Object.keys(clientData).length === 0) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Os dados do empresa não foram informados", 400)
      );
    }

    const result = this.schema.validate(
      { idCompany, ...clientData },
      {
        abortEarly: false,
      }
    );

    if (result.error) {
      ErrorHandler.throwWithoutLog(new CustomError(result.error.message, 400));
    }
  }
}
