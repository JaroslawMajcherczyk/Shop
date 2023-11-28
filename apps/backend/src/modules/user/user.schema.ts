// import {z} from "zod";
// import {buildJsonSchemas} from 'fastify-zod'

// // const userCore = z.object ({
// //     emial: z.string({
// //         required_error: 'Wymagany email',
// //         invalid_type_error: 'Email musi byc stringiem'
// //     }).email(),
// //     name: z.string(),
// // });
// const createUserSchema = z.object({
//     emial: z.string({
//         required_error: 'Wymagany email',
//         invalid_type_error: 'Email musi byc stringiem'
//     }).email(),
//     name: z.string(),
// });




// export type CreateUserInput = z.infer<typeof createUserSchema>;

// export const {schemas: userSchemas, $ref} = buildJsonSchemas({
//     createUserSchema,
// })
