import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jon_doe = await prisma.user.create({
    data: {
      email: "john1@email.com",
      name: "John Doe",
      password: "12345678",
    },
  });

  const company = await prisma.company.create({
    data: {
      cnpj: "64.087.097/0001-89",
      name: "Amazon LTDA",
      timeUnit: 30,
      openingTime: 8,
      closingTime: 18,
      creationDate: "2011-10-05T14:48:00.000Z"
    },
  });
}

main().then();
