import Joi from "joi";
import { CreateAppointmentDto } from "src/_application/dtos/appointments/appointment/CreateAppointment.dto";

export class CreateAppointmentValidator {
  static readonly schema = Joi.object<CreateAppointmentDto>({
    idService: Joi.string().uuid().required(),
    idClient: Joi.string().uuid().required(),
    idProfessional: Joi.string().uuid().required(),
    createdByProfessional: Joi.boolean().required(),
    approved: Joi.boolean().required(),
    date: Joi.date().required(),
  });

  static validate(objToCompare: CreateAppointmentDto) {
    const { error } = CreateAppointmentValidator.schema.validate(objToCompare, {
      abortEarly: false,
    });
    console.log(error)
    if (error) {
      throw {
        message: error.message,
        isValidationError: true,
      }
    }
  }
}
