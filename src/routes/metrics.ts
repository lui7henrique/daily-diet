import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database'
import { checkSessionIdSession } from '../middlewares/check-session-id-exists'

export async function metricsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdSession],
    },
    async (req: FastifyRequest, res: FastifyReply) => {
      const { sessionId } = req.cookies

      const { id } = await knex('users')
        .select('id')
        .where({ session_id: sessionId })
        .first()

      const totalMeals = await knex('meals')
        .count('* as totalMeals')
        .where({ user_id: id })
        .first()

      const dietMeals = await knex('meals')
        .count('* as dietMeals')
        .where({ user_id: id, is_on_diet: true })
        .first()

      const nonDietMeals = await knex('meals')
        .count('* as nonDietMeals')
        .where({ user_id: id, is_on_diet: false })
        .first()

      // TODO: Implementar a lógica para encontrar a melhor sequência de refeições dentro da dieta

      res.status(200).send({
        total_meals: totalMeals?.totalMeals,
        diet_meals: dietMeals?.dietMeals,
        non_diet_meals: nonDietMeals?.nonDietMeals,
        best_diet_sequence: 'Melhor sequência de refeições dentro da dieta',
      })
    },
  )
}
