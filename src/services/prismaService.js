import { PrismaClient } from "../generated/prisma/index.js";
export const prisma = new PrismaClient();

// Opsional: handle shutdown server supaya Prisma disconnect aman
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
