
import prisma from "../../utils/prisma";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput) {
const user = await prisma.user.create({
    data: {
        name: "siema2",
        email: "siema2@gmail.com",
    },
})
const users = await prisma.user.findMany()
console.log(users)
return user;
}

