import { fastify } from 'fastify'
import cookie from '@fastify/cookie'

import { mealsRoutes } from './routes/meals'
import { usersRoutes } from './routes/user'
import { metricsRoutes } from './routes/metrics'

export const app = fastify()

app.register(cookie)

app.register(metricsRoutes, {
  prefix: 'metrics',
})

app.register(mealsRoutes, {
  prefix: 'meals',
})

app.register(usersRoutes, {
  prefix: 'users',
})
