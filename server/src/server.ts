import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()

const prisma = new PrismaClient()

app.get('/hello', async () => {
  const users = prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server running on port http://localhost:3000')
  })
