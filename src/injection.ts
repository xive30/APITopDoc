import { ActivityHandler } from "./modules/handler/activity.handler";
import { AppointmentHandler } from "./modules/handler/appointment.handler";
import { EmailBannedHandler } from "./modules/handler/emailBanned.handler";
import { HolidayHandler } from "./modules/handler/holiday.handler";
import { LocationHandler } from "./modules/handler/location.handler";
import { PatientHandler } from "./modules/handler/patient.handler";
import { PlanningHandler } from "./modules/handler/planning.handler";
import { RoleHandler } from "./modules/handler/role.handler";
import { ScheduleAdminHandler } from "./modules/handler/scheduleAdmin.handler";
import { TimetableHandler } from "./modules/handler/timetable.handler";
import { UserHandler } from "./modules/handler/user.handler";

import { ActivityRepository } from "./modules/repository/activity.repository";
import { AppointmentRepository } from "./modules/repository/appointment.repository";
import { EmailBannedRepository } from "./modules/repository/emailBanned.repository";
import { HolidayRepository } from "./modules/repository/holiday.repository";
import { LocationRepository } from "./modules/repository/location.repository";
import { PatientRepository } from "./modules/repository/patient.repository";
import { PlanningRepository } from "./modules/repository/planning.repository";
import { RoleRepository } from "./modules/repository/role.repository";
import { ScheduleAdminRepository } from "./modules/repository/scheduleAdmin.repository";
import { TimetableRepository } from "./modules/repository/timetable.repository";
import { UserRepository } from "./modules/repository/user.repository";

import { ActivityService } from "./modules/service/activity.service";
import { AppointmentService } from "./modules/service/appointment.service";
import { EmailBannedService } from "./modules/service/emailBanned.service";
import { HolidayService } from "./modules/service/holiday.service";
import { LocationService } from "./modules/service/location.service";
import { PatientService } from "./modules/service/patient.service";
import { PlanningService } from "./modules/service/planning.service";
import { RoleService } from "./modules/service/role.service";
import { ScheduleAdminService } from "./modules/service/scheduleAdmin.service";
import { TimetableService } from "./modules/service/timetable.service";
import { UserService } from "./modules/service/user.service";


export const activityHandler = new ActivityHandler(new ActivityService(new ActivityRepository()));
export const appointmentHandler = new AppointmentHandler(new AppointmentService(new AppointmentRepository()));
export const emailBannedHandler = new EmailBannedHandler(new EmailBannedService(new EmailBannedRepository()));
export const holidayHandler = new HolidayHandler(new HolidayService(new HolidayRepository()));
export const locationHandler = new LocationHandler(new LocationService(new LocationRepository()));
export const patientHandler = new PatientHandler(new PatientService(new PatientRepository()));
export const planningHandler = new PlanningHandler(new PlanningService(new PlanningRepository()));
export const roleHandler = new RoleHandler(new RoleService(new RoleRepository()));
export const scheduleAdminHandler = new ScheduleAdminHandler(new ScheduleAdminService(new ScheduleAdminRepository()));
export const timetableHandler = new TimetableHandler(new TimetableService(new TimetableRepository()));
export const userHandler = new UserHandler(new UserService(new UserRepository()));