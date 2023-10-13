import { Router as ExpressRouter } from "express";
import { UserController } from "../controllers/userManagement/User.controller";

export const userRoutes = (router: ExpressRouter) => {
  const userController = new UserController();

  router.post("/login", userController.login);

  return router;
};
