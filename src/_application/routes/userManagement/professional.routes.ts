import { ProfessionalControllerFactory } from "@factories";
import { Router as ExpressRouter } from "express";

export const professionalRoutes = (router: ExpressRouter) => {
  const professionalController =
    ProfessionalControllerFactory.createProfessionalController();

  /**
   * @swagger
   * /professional:
   *   post:
   *     summary: Criar um novo profissional
   *     description: Cria um novo profissional com o nome, email e senha especificados
   *     tags:
   *       - Profissional
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             example:
   *               professional:
   *                 name: John Doe
   *                 email: 'john@gmail.com'
   *                 password: '12345678'
   *               company:
   *                 name: Tray Corp
   *                 cnpj: Company
   *                 creationDate: '2011-10-05T14:48:00.000Z'
   *     responses:
   *       201:
   *         description: Profissional criado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               example:
   *                 message: Conta pessoal e conta de empresa criadas com sucesso
   *       400:
   *         description: Corpo da solicitação inválido
   *       500:
   *         description: Erro interno do servidor
   */
  router.post("/professional", professionalController.create);

  /**
   * @swagger
   * /professional:
   *   get:
   *     summary: Get all professionals
   *     description: Returns a list of all professionals.
   *     tags:
   *       - Profissional
   *     parameters:
   *       - in: query
   *         name: name
   *     responses:
   *       200:
   *         description: A list of professionals.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Professional'
   *       500:
   *         description: Internal server error.
   */
  router.get("/professional", professionalController.getAll);

  /**
   * @swagger
   * /professional/{idProfessional}:
   *   get:
   *     summary: Get a professional by ID
   *     description: Returns a single professional by ID.
   *     tags:
   *       - Profissional
   *     parameters:
   *       - in: path
   *         name: idProfessional
   *         schema:
   *           type: string
   *         required: true
   *         description: The ID of the professional to retrieve.
   *     responses:
   *       200:
   *         description: A single professional.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Professional'
   *       404:
   *         description: Professional not found.
   *       500:
   *         description: Internal server error.
   */
  router.get("/professional/:idProfessional", professionalController.getOne);

  /**
   * @swagger
   * /professional/{idProfessional}:
   *   patch:
   *     summary: Update a professional by ID
   *     description: Updates a single professional by ID.
   *     tags:
   *       - Profissional
   *     parameters:
   *       - in: path
   *         name: idProfessional
   *         schema:
   *           type: string
   *         required: true
   *         description: The ID of the professional to update.
   *     requestBody:
   *       required: true
   *       description: Fields for the Professional resource
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *     responses:
   *       200:
   *         description: The updated professional.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 result:
   *                   idProfessional:
   *                     type: string
   *       404:
   *         description: Professional not found.
   *       500:
   *         description: Internal server error.
   */
  router.patch("/professional/:idProfessional", professionalController.update);

  return router;
};
