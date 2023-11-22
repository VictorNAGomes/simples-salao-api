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

  /**
   * @swagger
   * /appointment:
   *  get:
   *   tags:
   *   - Appointment
   *   summary: List appointments
   *   responses:
   *    200:
   *     description: Appointments listed
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/components/schemas/Appointment'
   *    404:
   *     description: No appointments found
   */
  router.get("/appointment", appointmentController.listAppointments);

  return router;
};
