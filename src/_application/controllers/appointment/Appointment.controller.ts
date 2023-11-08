import { Request, Response } from "express";
import { CreateAppointmentDto } from "src/_application/dtos/appointments/appointment/CreateAppointment.dto";

export class AppointmentController {
  async createAppointment(req: Request, res: Response) {
    const appointmentDto: CreateAppointmentDto = req.body;
    return res.json(appointmentDto);
  }
}
