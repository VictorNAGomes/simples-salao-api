import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";
import { IncomeDomain } from "src/income/domain/Income.domain";

export class AppointmentRepository {
  create(
    appointmentDomain: Omit<AppointmentDomain, "idAppointment">
  ): Promise<AppointmentDomain | null>;

  getIncome(date: Date): Promise<number>
}
