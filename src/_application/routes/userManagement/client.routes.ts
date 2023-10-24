import { ClientControllerFactory } from "@factories";
import { Router as ExpressRouter } from "express";

export const clientRoutes = (router: ExpressRouter) => {
  const clientController =
    ClientControllerFactory.createClientController();

  /**
   * @swagger
   * /client:
   *   post:
   *     summary: Criar um novo cliente
   *     description: Cria um novo cliente com o nome, email e senha especificados
   *     tags:
   *       - Cliente
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             example:
   *               client:
   *                 name: John Doe
   *                 email: 'john@gmail.com'
   *                 password: '12345678'
   *               
   *     responses:
   *       201:
   *         description: Cliente criado com sucesso
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
  router.post("/client", clientController.create);

  /**
   * @swagger
   * /client:
   *   get:
   *     summary: Get all clients
   *     description: Returns a list of all clients.
   *     tags:
   *       - Cliente
   *     parameters:
   *       - in: query
   *         name: name
   *     responses:
   *       200:
   *         description: A list of clients.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Client'
   *       500:
   *         description: Internal server error.
   */
  router.get("/client", clientController.getAll);

  /**
   * @swagger
   * /client/{idClient}:
   *   get:
   *     summary: Get a client by ID
   *     description: Returns a single client by ID.
   *     tags:
   *       - Cliente
   *     parameters:
   *       - in: path
   *         name: idClient
   *         schema:
   *           type: string
   *         required: true
   *         description: The ID of the client to retrieve.
   *     responses:
   *       200:
   *         description: A single client.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Client'
   *       404:
   *         description: Client not found.
   *       500:
   *         description: Internal server error.
   */
  router.get("/client/:idClient", clientController.getOne);

  /**
   * @swagger
   * /client/{idClient}:
   *   patch:
   *     summary: Update a client by ID
   *     description: Updates a single client by ID.
   *     tags:
   *       - Cliente
   *     parameters:
   *       - in: path
   *         name: idClient
   *         schema:
   *           type: string
   *         required: true
   *         description: The ID of the client to update.
   *     requestBody:
   *       required: true
   *       description: Fields for the Client resource
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *     responses:
   *       200:
   *         description: The updated client.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 result:
   *                   idClient:
   *                     type: string
   *       404:
   *         description: Client not found.
   *       500:
   *         description: Internal server error.
   */
  router.patch("/client/:idClient", clientController.update);

  return router;
};
