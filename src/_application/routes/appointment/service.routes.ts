import { Router as ExpressRouter } from "express";
import { ServiceController } from "src/_application/controllers/userManagement/Service.controller";

export const serviceRoutes = (router: ExpressRouter) => {
  const serviceController = new ServiceController();

  /**
   * @swagger
   * /service:
   *  post:
   *   tags:
   *    - Service
   *   summary: Create a new service
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       type: object
   *       example:
   *        name: Corte de cabelo
   *        description!: string;
   *        price!: number;
   *        duration!: number;
   */
  router.post("/service", serviceController.createService);

  return router;
};
