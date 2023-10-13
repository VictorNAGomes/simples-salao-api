import { PrismaClient } from "@prisma/client";

export class PrismaSingleton {
  private static prisma: PrismaClient;
  private constructor() {}

  public static getPrismaClient() {
    if (!PrismaSingleton.prisma) {
      PrismaSingleton.prisma = new PrismaClient();
    }

    return PrismaSingleton.prisma;
  }
}
