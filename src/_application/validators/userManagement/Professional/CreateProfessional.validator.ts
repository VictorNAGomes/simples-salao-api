import Joi from "joi";
import { CompanyDomain } from "src/userManagement/domain/Company.domain";

export class CreateProfessionalValidator {
  private schema = Joi.object({
    company: Joi.object<CompanyDomain>({
      cnpj: Joi.string().required(),
      creationDate: Joi.date().required(),
      name: Joi.string().required(),
    }),
    professional: Joi.object({
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
