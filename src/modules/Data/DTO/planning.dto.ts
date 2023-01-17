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

	id_activity: Number;
}
