import { Router as ExpressRouter } from "express";
import { UserManagementRoutes } from "./userManagement";
import * as AppointmentRoutes from "./appointment";

export const setupRoutes = (router: ExpressRouter) => {
  /**
   * @swagger
   * components:
   *   schemas:
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
   */
  UserManagementRoutes.professional(router);
  UserManagementRoutes.client(router);
  UserManagementRoutes.user(router);
  AppointmentRoutes.serviceRoutes(router);

  return router;
};
