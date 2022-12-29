import { Router } from "express";
import { activityRouter } from "./activityRouter";
import { appointmentRouter } from "./appointmentRouter";
import { emailBannedRouter } from "./emailBannedRouter";
import { holidayRouter } from "./holidayRouter";
import { locationRouter } from "./locationRouter";
import { patientRouter } from "./patientRouter";
import { planningRouter } from "./planningRouter";
import { roleRouter } from "./roleRouter";
import { scheduleAdminRouter } from "./scheduleAdminRouter";
import { timetableRouter } from "./timetableRouter";
import { userRouter } from "./userRouter";

export const apiRouter = Router()

apiRouter.use('/api/v1/activities', activityRouter)
apiRouter.use('/api/v1/appointments', appointmentRouter)
apiRouter.use('/api/v1/emails-banned', emailBannedRouter)
apiRouter.use('/api/v1/holidays', holidayRouter)
apiRouter.use('/api/v1/locations', locationRouter )
apiRouter.use('/api/v1/patients', patientRouter)
apiRouter.use('/api/v1/plannings', planningRouter)
apiRouter.use('/api/v1/roles', roleRouter)
apiRouter.use('/api/v1/schedule-admins', scheduleAdminRouter)
apiRouter.use('/api/v1/timetables', timetableRouter)
apiRouter.use('/api/v1/users', userRouter)
