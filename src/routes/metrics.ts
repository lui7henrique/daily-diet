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

      const userDietMeals = await knex('meals')
        .select('id', 'date')
        .where({ user_id: id, is_on_diet: true })
        .orderBy('date', 'asc')

      let bestDietSequence = []

      if (userDietMeals.length > 0) {
        let currentSequence = [userDietMeals[0]]
        bestDietSequence = [userDietMeals[0]]

        for (let i = 1; i < userDietMeals.length; i++) {
          const prevDate = new Date(userDietMeals[i - 1].date).getTime()
          const currentDate = new Date(userDietMeals[i].date).getTime()
          const oneDay = 24 * 60 * 60 * 1000

          if (currentDate - prevDate <= oneDay) {
            currentSequence.push(userDietMeals[i])
          } else {
            currentSequence = [userDietMeals[i]]
          }

          if (currentSequence.length > bestDietSequence.length) {
            bestDietSequence = currentSequence
          }
        }
      }

      res.status(200).send({
        total_meals: totalMeals?.totalMeals,
        diet_meals: dietMeals?.dietMeals,
        non_diet_meals: nonDietMeals?.nonDietMeals,
        best_diet_sequence: bestDietSequence.length,
      })
    },
  )
}
