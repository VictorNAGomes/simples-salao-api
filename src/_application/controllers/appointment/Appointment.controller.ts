import { Request, Response } from "express";
import { CreateAppointmentDto } from "src/_application/dtos/appointments/appointment/CreateAppointment.dto";
import { CreateAppointmentValidator } from "src/_application/validators/appointment/appointment/CreateAppointment.validator";

export class AppointmentController {
  async createAppointment(req: Request, res: Response) {
    try {
      const appointmentDto: CreateAppointmentDto = req.body;
      CreateAppointmentValidator.validate(appointmentDto);
      return res.json(appointmentDto);
    } catch (error: any) {
      if (error.isValidationError) {
        return res.status(400).json({ message: error.message });
      }

      res.status(500).json({ message: error.message });
    }
  }
}
