import { AppointmentRepository } from "src/appointment/infra/repository/Appointment.repository";
import { AppointmentDomain } from "../../Appointment.domain";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import {
  ClientRepositoryProtocol,
  ProfessionalRepositoryProtocol,
} from "src/userManagement/infra/protocol";

export class CreateAppointmentService {
  constructor(
    private readonly appointmentRepository: AppointmentRepository // private readonly clientRepository: ClientRepositoryProtocol, // private readonly professionalRepository: ProfessionalRepositoryProtocol, // private readonly serviceRepository: ServiceRepository
  ) {}
  async execute(
    appointmentData: Omit<AppointmentDomain, "idAppointment" | "service">
  ) {
    console.log(appointmentData)
    try {
      const appointment = await this.appointmentRepository.create(
        appointmentData
      );
      if (appointment) {
        return {
          message: "Agendamento criado com sucesso!",
          appointment,
        };
      }
    } catch (err: any) {
      if (err.code === "P2003") {
        if (err.meta.field_name === "Appointment_idClient_fkey (index)") {
          throw {
            message: "Cliente não encontrado!",
            isNotFoundError: true,
          };
        }
        if (err.meta.field_name === "Appointment_idProfessional_fkey (index)") {
          throw {
            message: "Profissional não encontrado!",
            isNotFoundError: true,
          };
        }
        if (err.meta.field_name === "Appointment_idService_fkey (index)") {
          throw {
            message: "Serviço não encontrado!",
            isNotFoundError: true,
          };
        }
      }
    }
  }
}
