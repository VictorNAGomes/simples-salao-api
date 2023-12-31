export class Environment {
  public static port: string = process.env.PORT ?? "3000";
  public static node_env: string = process.env.NODE_ENV ?? "development";
  public static jwt_secret: string = process.env.JWT_SECRET ?? "";

  public static getJwtSecret() {
    if (Environment.jwt_secret) return Environment.jwt_secret;
    Environment.jwt_secret = process.env.JWT_SECRET ?? "";
    return Environment.jwt_secret;
  }
}
