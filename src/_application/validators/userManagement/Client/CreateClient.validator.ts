import Joi from "joi";
import { ClientDomain } from "src/userManagement/domain";

export class CreateClientValidator {
  private schema = Joi.object({
    client: Joi.object<ClientDomain>({
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
