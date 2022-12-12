import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
    process.env.PG_DB!,
    process.env.PG_NAME!,
    process.env.PG_PASS,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });


export default sequelize;