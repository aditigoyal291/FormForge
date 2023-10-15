import { PrismaClient } from "@prisma/client";

let prisma;


// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!prisma) {
    // global.
// }
// }
prisma = new PrismaClient();

export default prisma;
