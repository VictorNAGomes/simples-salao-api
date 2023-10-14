import { UserServiceFactory } from "@factories";
import { Request, Response } from "express";
import { UserValidatorFactory } from "src/_utils/factories/validator/UserValidator.factory";

export class UserController {
  async login(req: Request, res: Response) {
    try {
      const loginService = UserServiceFactory.createUserService();
      const loginValidator = UserValidatorFactory.createLoginValidator();
      const { error } = loginValidator.validate(req.body);
      if (error) {
        throw new Error(error.message);
      }
      const jwt = await loginService.execute(req.body.email, req.body.password);
      res.json({ jwt });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
