import { Router as ExpressRouter } from "express";
import { CompanyController } from "../../controllers/company/Company.controller";

export const CompanyRoutes = (router: ExpressRouter) => {
  const companyController = new CompanyController();
  
  /**
   * @swagger
   * /company/{idCompany}:
   *  get:
   *   tags:
   *    - Company
   *   summary: Get one Company
   *   parameters:
   *    - in: path
   *      name: idCompany
   *      required: true
   *      description: ID of the Company
   *      example: UUID
   *   responses:
   *    200:
   *     description: Company
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/components/schemas/Company'
   */
  router.get("/company/:idCompany", companyController.getOne);

  /**
   * @swagger
   * /company/{idCompany}:
   *  patch:
   *   tags:
   *    - Company
   *   summary: Get one Company
   *   parameters:
   *    - in: path
   *      name: idCompany
   *      required: true
   *      description: ID of the Company
   *      example: UUID
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/CompanyUpdate'
   *   responses:
   *    200:
   *     description: Company updated
   */
  router.patch("/company/:idCompany", companyController.update);

  return router;
};
