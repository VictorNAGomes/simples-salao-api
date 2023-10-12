import { Router as ExpressRouter } from "express";

export const clientRoutes = (router: ExpressRouter) => {

  router.get("/client", async (request, response) => {
    response.json({ teste: 'test' });
  });

  return router;
};
