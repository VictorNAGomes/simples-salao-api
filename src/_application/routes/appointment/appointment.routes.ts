import { Router as ExpressRouter } from "express";
import { AppointmentController } from "src/_application/controllers/appointment/Appointment.controller";

export const appointmentRoutes = (router: ExpressRouter) => {
  const appointmentController = new AppointmentController();

  /**
   * @swagger
   * /appointment:
   *  post:
   *   tags:
   *    - Appointment
   *   summary: Create a new appointment
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/Appointment'
   *   responses:
   *    201:
   *     description: Appointment created
   */
  router.post("/appointment", appointmentController.createAppointment);

  return router;
};
