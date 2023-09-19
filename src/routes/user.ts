import { FastifyInstance } from 'fastify'
import crypto, { randomUUID } from 'node:crypto'
import { z } from 'zod'

import { knex } from '../database'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string(),
      address: z.string(),
      weight: z.number(),
      height: z.number(),
    })

    const { name, email, address, weight, height } = createUserBodySchema.parse(
      request.body,
    )

    const checkUserExist = await knex
      .select('*')
      .from('users')
      .where('email', email)
      .first()

    if (checkUserExist) {
      return response.status(400).send({
        error: 'Este email já está vinculado à um usuário',
      })
    }

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      const privatePaths = ['/meals', '/metrics']

      privatePaths.forEach((path) =>
        response.cookie('sessionId', sessionId!, {
          path,
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        }),
      )
    }

    await knex('users').insert({
      id: crypto.randomUUID(),
      name,
      email,
      address,
      weight,
      height,
      session_id: sessionId,
    })

    return response.status(201).send()
  })
}
