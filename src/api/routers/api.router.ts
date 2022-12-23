import { Router } from "express";
import { locationRouter } from "./locationRouter";
import { userRouter } from "./userRouter";

export const apiRouter = Router()

apiRouter.use('/api/v1/users', userRouter)
apiRouter.use('/api/v1/locations', locationRouter )