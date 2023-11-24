import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "john1@email.com",
      name: "John Doe",
      password: "12345678",
    },
  });

  await prisma.company.create({
    data: {
      closingTime: 7,
      cnpj: "123456789",
      creationDate: new Date(),
      name: "Company 1",
      openingTime: 20,
      timeUnit: 30,
    },
  });
}

main().then();
