import { Router as ExpressRouter } from "express";
import { UserController } from "../../controllers/userManagement/User.controller";

export const userRoutes = (router: ExpressRouter) => {
  const userController = new UserController();

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Login de usuário
   *     description: Login utilizado para autenticar o usuário e gerar o token de acesso
   *     tags:
   *       - User Management
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *                 example: 'john@email.com'
   *               password:
   *                 type: string
   *                 format: password
   *                 example: '12345678'
   *     responses:
   *       200:
   *         description: Login successful
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *                   description: JWT access token
   *                 message:
   *                   type: string
   *                   description: Mensagem de resposta
   *       401:
   *         description: Invalid email or password
   */
  router.post("/login", userController.login);

  return router;
};
