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

  return router;
};
