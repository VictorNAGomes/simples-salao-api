import { PrismaSingleton } from "@singletons";
import { Request, Response } from "express";
import { CreateAppointmentDto } from "src/_application/dtos/appointments/appointment/CreateAppointment.dto";
import { CreateAppointmentValidator } from "src/_application/validators/appointment/appointment/CreateAppointment.validator";
import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";
import { CreateAppointmentService } from "src/appointment/domain/service/Appointment/CreateAppointment.service";
import { AppointmentOrmRepository } from "src/appointment/infra/repository/AppointmentOrm.repository";
import { ServiceOrmRepository } from "src/appointment/infra/repository/ServiceOrm.repository";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";

export class AppointmentController {
  async createAppointment(req: Request, res: Response) {
    try {
      const appointmentDto: CreateAppointmentDto = req.body;
      CreateAppointmentValidator.validate(appointmentDto);
      const prisma = PrismaSingleton.getPrismaClient();
      const appointmentOrmRepository = new AppointmentOrmRepository(prisma);
      // const clientOrmRepository = new ClientRepository(prisma);
      // const professionalOrmRepository = new ProfessionalRepository(prisma);
      // const serviceOrmRepository = new ServiceOrmRepository(prisma);

      const createAppointmentService = new CreateAppointmentService(
        appointmentOrmRepository
        // clientOrmRepository,
        // professionalOrmRepository,
        // serviceOrmRepository
      );

      const result = await createAppointmentService.execute(appointmentDto);

      return res.status(201).json(result);
    } catch (error: any) {
      if (error.isValidationError) {
        return res.status(400).json({ message: error.message });
      }

      if (error.isNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      res.status(500).json({ message: error.message });
    }
  }
  async listAppointments(req: Request, res: Response) {
    res.json({
      result: [
        AppointmentDomain.create({
          idAppointment: "1",
          idService: "1",
          idClient: "1",
          idProfessional: "1",
          date: new Date(),
          approved: true,
          createdByProfessional: true,
        }),
      ],
    });
  }
}
