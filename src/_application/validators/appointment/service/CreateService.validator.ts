import Joi from "joi";
import { CreateServiceDto } from "src/_application/dtos/appointments/service/CreateService.dto";
import { ServiceDomain } from "src/appointment/domain/Service.domain";

export class CreateServiceValidator {
  private schema = Joi.object<ServiceDomain>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.number().required(),
    price: Joi.number().required(),
    idCompany: Joi.string().uuid().required(),
  });
  validate(objToCompare: CreateServiceDto) {
    const { error } = this.schema.validate(objToCompare, {
      abortEarly: false,
    });
    if (error) {
      throw new Error(error.message);
    }
  }
}
