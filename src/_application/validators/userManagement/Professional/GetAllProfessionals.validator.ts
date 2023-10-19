import Joi from "joi";
import { ProfessionalDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/userManagement/domain/Company.domain";
import { cnpjValidator } from "@utils/validators";

export class GetAllProfessionalsValidator {
  private schema = Joi.object({
    name: Joi.string().optional(),
  });
  validate(objToCompare: { name?: string }) {
    const result = this.schema.validate(objToCompare, {
      abortEarly: false,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  }
}
