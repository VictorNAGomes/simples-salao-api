import { UserServiceFactory } from "@factories";
import { Request, Response } from "express";

export class UserController {
  async login(req: Request, res: Response) {
    // const loginService = UserServiceFactory.createUserService();

    // res.json(await loginService.execute(req.body.email, req.body.password));

    res.json({erro: "merda"})
  }
}
