import Joi from "joi";

export class LoginValidator {
  schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  });
  validate(objToCompare: { email: string; password: string }) {
    return this.schema.validate(objToCompare, {
      abortEarly: false,
    });
  }
}
