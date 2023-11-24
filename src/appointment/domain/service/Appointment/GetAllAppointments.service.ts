import { Service } from "@interfaces";
import { AppointmentRepository } from "src/appointment/infra/repository/Appointment.repository";

export class GetAllAppointmentsService implements Service {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async execute() {
    const results = await this.appointmentRepository.getAll();
    
    return {
      message: "Lista de agendamentos",
      result: results,
    };
  }
}
