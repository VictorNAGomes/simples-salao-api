import { clientRoutes } from "./client.routes";
import { professionalRoutes } from "./professional.routes";
import { userRoutes } from "./user.routes";

export class UserManagementRoutes {
  static client = clientRoutes;
  static professional = professionalRoutes;
  static user = userRoutes;
}
