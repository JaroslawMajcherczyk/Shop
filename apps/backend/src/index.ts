
import fastify, { FastifyRequest } from 'fastify'

import prisma from './utils/prisma';




const server = fastify()

server.get('/', async  (request, response) => {
 return {ststus: "OK"};
});


server.post('/user', async (request) => {
  return prisma.user.create({data: request.body})
})

server.get('/user', async() =>{
 return prisma.user.findMany()
})

server.get('/user/:id', async(request) =>{
  return prisma.user.findUnique({
    where: {
      id: String(request.params.id)
    }
  })
 })

 server.put('/user/:id', async(request) =>{
  return prisma.user.findUnique({
    where: {
      id: String(request.params.id)
    },
    data: request.body
  })
 })


server.delete('/user/:id', async (request,response) => {
  return prisma.user.delete({
    where: {
      id: String(request.params.id)
    },
  })
})

async function main() {

 

  try {
    await server.listen(3001, '0.0.0.0')
    console.log('Server run at http://localhost:3001')
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

}

main();