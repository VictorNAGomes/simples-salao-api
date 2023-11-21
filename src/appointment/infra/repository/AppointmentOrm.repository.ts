import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";
import { AppointmentRepository } from "./Appointment.repository";
import { PrismaClient } from "@prisma/client";

export class AppointmentOrmRepository implements AppointmentRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async create(
    appointmentDomain: Omit<
      AppointmentDomain,
      "idAppointment"
    >
  ): Promise<AppointmentDomain | null> {
    const dbResult = await this.prisma.appointment.create({
      data: {
        approved: appointmentDomain.approved,
        createdByProfessional: appointmentDomain.createdByProfessional,
        date: appointmentDomain.date,
        idClient: appointmentDomain.idClient,
        idProfessional: appointmentDomain.idProfessional,
        idService: appointmentDomain.idService,
      },
    });

    if (!dbResult) {
      return null;
    }

    return dbResult;
  }
}
