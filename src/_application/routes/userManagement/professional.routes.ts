import { ProfessionalControllerFactory } from "@factories";
import { Router as ExpressRouter } from "express";

export const professionalRoutes = (router: ExpressRouter) => {
  const professionalController =
    ProfessionalControllerFactory.createProfessionalController();

  router.post("/professional", professionalController.create);

  return router;
};
