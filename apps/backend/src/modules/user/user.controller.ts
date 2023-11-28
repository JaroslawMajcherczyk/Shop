// import { FastifyReply, FastifyRequest } from "fastify";
// import { createUser } from "./user.service";
// import { CreateUserInput } from "./user.schema";

// export async function registerUserHandler(
//     request:FastifyRequest<{
//         Body: CreateUserInput;
//     }>,
//     replay: FastifyReply) {

//         const body = request.body
//         console.log(body)
//         try{
//             const user = await createUser(body)
           
//             return replay.code(201).send(user);
            
//         }catch(error){
//             console.log(error)
//             return replay.code(500).send(error)
//         }
        
// }

