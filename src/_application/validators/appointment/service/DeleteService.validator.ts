import Joi from "joi";

export class DeleteServiceValidator {
  private idService = Joi.string().uuid().required();
  validate(idService: string) {
    const { error } = this.idService.validate(idService, {
      abortEarly: false,
    });
    if (error) {
      throw new Error(error.message);
    }
  }
}
