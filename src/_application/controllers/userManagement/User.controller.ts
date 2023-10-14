import { UserServiceFactory } from "@factories";
import { Request, Response } from "express";

export class UserController {
  async login(req: Request, res: Response) {
    try {
      const loginService = UserServiceFactory.createUserService();

      res.json(await loginService.execute(req.body.email, req.body.password));
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
