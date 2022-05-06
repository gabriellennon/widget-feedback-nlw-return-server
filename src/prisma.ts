import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    //A cada operacao de select, update e etc no banco, ele mostre no console
    //All operation in Data base (select, update...), he show in console
    log: ['query'],
});