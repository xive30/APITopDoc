import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { apiRouter } from './api/routers/api.router'
import unexpectedErrorMiddleware from './api/middlewares/error.global'
import helmet from 'helmet'
import { logger } from './winston.logger'
import swaggerUi from 'swagger-ui-express';
import { relations } from './Database/relations'
const swaggerJsDoc = require('swagger-jsdoc')

dotenv.config()

const app = express()

app.use(helmet())

app.use(express.json())

app.use(cors())

app.use(apiRouter)

app.use(unexpectedErrorMiddleware)
relations()

app.listen(process.env.PORT, () => logger.info(`Running at port ${process.env.PORT}`))


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API TopDoc',
            description: 'API TopDoc projet CDA',
            contact: {
                name: 'Florent'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url:`http://localhost:${process.env.PORT}`,
                description: 'localhost'
            },],
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: [`./src/api/routers/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/v1', apiRouter)