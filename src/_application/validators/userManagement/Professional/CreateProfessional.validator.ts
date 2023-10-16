import Joi from "joi";

export class CreateProfessionalValidator {
  private schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  });
  validate(objToCompare: { email: string; password: string; name: string }) {
    return this.schema.validate(objToCompare, {
      abortEarly: false,
    });
  }
}
