
import Fastify from 'fastify'
import userRoutes from './modules/user/user.route'
import fastify from 'fastify';
import prisma from './utils/prisma';


const server = Fastify()

server.get('/', async function (request, response) {
 return {ststus: "OK"};
});


// fastify.post{'/user', async(request) => {
//   return prisma.user.create({data: request.body})
// }}




async function main() {

  server.register(userRoutes, {prefix: "api/users"} )

  try {
    await server.listen(3001, '0.0.0.0')
    console.log('Server run at http://localhost:3001')
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

}

main();