import { Router as ExpressRouter } from "express";
import { UserManagementRoutes } from "./userManagement";
import * as AppointmentRoutes from "./appointment";
import * as CompanyRoutes from "./company"

export const setupRoutes = (router: ExpressRouter) => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Service:
   *       type: object
   *       properties:
   *         idService:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the service.
   *         idCompany:
   *           type: string
   *           format: uuid
   *           description: The company the service belongs to
   *         name:
   *           type: string
   *           description: The name of the service.
   *         description:
   *           type: string
   *           description: The description of the service.
   *         price:
   *           type: number
   *           format: float
   *           description: The price of the service.
   *         duration:
   *           type: number
   *           format: integer
   *           description: The duration of the service in minutes.
   *     ServiceUpdate:
   *       type: object
   *       properties:
   *         name:
   *           type: string
   *           description: The name of the service.
   *         description:
   *           type: string
   *           description: The description of the service.
   *         price:
   *           type: number
   *           format: float
   *           description: The price of the service.
   *         duration:
   *           type: number
   *           format: integer
   *           description: The duration of the service in minutes.
   *     Professional:
   *       type: object
   *       properties:
   *         idUser:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the user
   *         idProfessional:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the professional
   *         name:
   *           type: string
   *           description: The name of the professional
   *         email:
   *           type: string
   *           format: email
   *           description: The email address of the professional
   *         password:
   *           type: string
   *           description: The password of the professional
   *           minLength: 8
   *     Company:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the company
   *         name:
   *           type: string
   *           description: The name of the company
   *         cnpj:
   *           type: string
   *           description: The CNPJ of the company
   *         creationDate:
   *           type: string
   *           format: date-time
   *           description: The creation date of the company
   *     Appointment:
   *       type: object
   *       properties:
   *         idClient:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the client.
   *         idProfessional:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the professional.
   *         idService:
   *           type: string
   *           format: uuid
   *           description: The unique identifier of the service.
   *         date:
   *           type: string
   *           format: date-time
   *           description: The date and time of the appointment.
   *         approved:
   *           type: boolean
   *           description: Whether the appointment has been approved.
   *         createdByProfessional:
   *           type: boolean
   *           description: Whether the appointment was created by the professional.
   */
  UserManagementRoutes.professional(router);
  UserManagementRoutes.client(router);
  UserManagementRoutes.user(router);
  AppointmentRoutes.serviceRoutes(router);
  CompanyRoutes.CompanyRoutes(router)
  AppointmentRoutes.appointmentRoutes(router);

  return router;
};
