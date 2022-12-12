import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { apiRouter } from './api/routers/api.router'
import unexpectedErrorMiddleware from './api/middlewares/error.global'
import helmet from 'helmet'
import { logger } from './winston.logger'

dotenv.config()

const app = express()

app.use(helmet())

app.use(express.json())

app.use(cors())

app.use(apiRouter)

app.use(unexpectedErrorMiddleware)

app.listen(process.env.PORT, () => logger.info('Running.'))

