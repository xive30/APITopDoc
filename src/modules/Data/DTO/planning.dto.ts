import { AppointmentDto } from "./appointment.Dto";
import { HolidayDto } from "./holiday.Dto";
import { TimetableDto } from "./timetable.Dto";

export interface PlanningDto {
	start_validity: Date;

	end_validity: Date;

	id_activity: Number;
}

export interface PlanningTimetableDto {
	id_planning?: number;

	start_validity: Date;

	end_validity: Date;

	timetables?: TimetableDto[];

	holidays?: HolidayDto[];

	appointments?: AppointmentDto[];

	id_activity: Number;
}
