import Joi from "joi";

export class GetAllClientsValidator {
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
