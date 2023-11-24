import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";
import { AppointmentRepository } from "./Appointment.repository";
import { PrismaClient } from "@prisma/client";
import { ServiceDomain } from "src/appointment/domain/Service.domain";

export class AppointmentOrmRepository implements AppointmentRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async create(
    appointmentDomain: Omit<AppointmentDomain, "idAppointment">
  ): Promise<Omit<AppointmentDomain, "service"> | null> {
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

  async getAll(): Promise<AppointmentDomain[] | null> {
    const dbResult = await this.prisma.appointment.findMany({
      include: {
        service: true,
      },
    });

    return dbResult.map<AppointmentDomain>((appointment) => ({
      approved: appointment.approved,
      createdByProfessional: appointment.createdByProfessional,
      date: appointment.date,
      idAppointment: appointment.idAppointment,
      idClient: appointment.idClient,
      idProfessional: appointment.idProfessional,
      idService: appointment.idService,
      service: new ServiceDomain({
        idService: appointment.service.idService,
        description: appointment.service.description,
        duration: appointment.service.duration,
        price: appointment.service.price,
        idCompany: appointment.service.idCompany,
        name: appointment.service.name,
      }),
    }));
  }
}
