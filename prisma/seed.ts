import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jon_doe = await prisma.user.create({
    data: {
      email: "john@email.com",
      name: "John Doe",
      password: "12345678",
    },
  });
}

main().then()