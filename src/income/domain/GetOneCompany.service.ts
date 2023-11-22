import { Service } from "@interfaces";
import { AppointmentRepository } from "src/appointment/infra/repository/Appointment.repository";

export class GetOneCompanyService implements Service {
  constructor(private readonly serviceRepository: AppointmentRepository) {}
  async execute(date: Date) {
    try {
      const result = await this.serviceRepository.getIncome(date);

      if (!result) {
        return {
          message: "Empresa não encontrado",
          result,
        };
      }

      return {
        message: "Empresa encontrado com sucesso",
        result,
      };
    } catch (error) {
      return {
        message: "Algum erro inesperado ocorreu",
      };
    }
  }
}
