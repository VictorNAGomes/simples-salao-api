import { Router as ExpressRouter } from "express";
import { userRoutes } from "./user.routes";

export const setupRoutes = (router: ExpressRouter) => {
  userRoutes(router);

  return router;
};
