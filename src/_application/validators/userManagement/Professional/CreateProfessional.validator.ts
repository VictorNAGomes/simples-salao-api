import Joi from "joi";
import { ProfessionalDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/company/domain/Company.domain";
import { cnpjValidator } from "@utils/validators";

export class CreateProfessionalValidator {
  private schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  });
  validate(objToCompare: { email: string; password: string; name: string }) {
    return this.schema.validate(objToCompare, {
      abortEarly: false,
    });
  }
}
