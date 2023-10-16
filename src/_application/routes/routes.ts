import { Router as ExpressRouter } from "express";
import { UserManagementRoutes } from "./userManagement";

export const setupRoutes = (router: ExpressRouter) => {
  UserManagementRoutes.professional(router)
  UserManagementRoutes.client(router)
  UserManagementRoutes.user(router)

  return router;
};
