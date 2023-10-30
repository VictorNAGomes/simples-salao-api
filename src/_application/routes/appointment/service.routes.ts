import { Router as ExpressRouter } from "express";
import { ServiceController } from "src/_application/controllers/appointment/Service.controller";

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
   *        name: 'Corte de cabelo'
   *        description: 'desc'
   *        price: 23
   *        duration: 2
   *   responses:
   *    201:
   *     description: Service created
   */
  router.post("/service", serviceController.createService);

  /**
   * @swagger
   * /service:
   *  get:
   *   tags:
   *    - Service
   *   summary: List all services
   *   responses:
   *    200:
   *     description: List of services
   *     content:
   *      application/json:
   *       schema:
   *        type: array
   *        items:
   *          $ref: '#/components/schemas/Service'
   */
  router.get("/service", serviceController.listServices);

  return router;
};
