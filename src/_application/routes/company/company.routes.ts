import { Router as ExpressRouter } from "express";
import { CompanyController } from "../../controllers/company/Company.controller";

export const CompanyRoutes = (router: ExpressRouter) => {
  const companyController = new CompanyController();
  /**
   * @swagger
   * /company:
   *  get:
   *   tags:
   *    - Service
   *   summary: List all Companys
   *   responses:
   *    200:
   *     description: List of Companys
   *     content:
   *      application/json:
   *       schema:
   *        type: array
   *        items:
   *          $ref: '#/components/schemas/Service'
   */
  router.get("/company", companyController.getAll);

  /**
   * @swagger
   * /company/{idService}:
   *  get:
   *   tags:
   *    - Service
   *   summary: Get one Company
   *   parameters:
   *    - in: path
   *      name: idService
   *      required: true
   *      description: ID of the Company
   *      example: UUID
   *   responses:
   *    200:
   *     description: Service
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/components/schemas/Service'
   */
  router.get("/company/:idService", companyController.getOne);

  /**
   * @swagger
   * /company/{idService}:
   *  patch:
   *   tags:
   *    - Service
   *   summary: Get one Company
   *   parameters:
   *    - in: path
   *      name: idService
   *      required: true
   *      description: ID of the Company
   *      example: UUID
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/ServiceUpdate'
   *   responses:
   *    200:
   *     description: Service updated
   */
  router.patch("/company/:idService", companyController.update);

  return router;
};
