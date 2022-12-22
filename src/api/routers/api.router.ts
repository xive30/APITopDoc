import { Router } from "express";
import { userRouter } from "./userRouter";

export const apiRouter = Router()

apiRouter.use('/api/v1', userRouter)