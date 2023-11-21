import Joi from "joi";
import { ProfessionalDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/company/domain/Company.domain";
import { cnpjValidator } from "@utils/validators";

export class CreateProfessionalValidator {
  private schema = Joi.object({
    company: Joi.object<CompanyDomain>({
      cnpj: Joi.string()
        .required()
        .custom((value, helpers) => {
          const cnpjIsValid = cnpjValidator(value);
          if (!cnpjIsValid) {
            return helpers.error("any.invalid");
          }
          return value;
        }),
      creationDate: Joi.date().required(),
      name: Joi.string().required(),
    }),
    professional: Joi.object<ProfessionalDomain>({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
    }),
  });
  validate(objToCompare: { email: string; password: string; name: string }) {
    return this.schema.validate(objToCompare, {
      abortEarly: false,
    });
  }
}
