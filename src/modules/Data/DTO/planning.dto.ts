import { TimetableDto } from "./timetable.Dto";

export interface PlanningDto {
	start_validity: Date;

	end_validity: Date;
}

export interface PlanningTimetableDto {
	id_Planning: number;

	start_validity: Date;

	end_validity: Date;

	timetables?: TimetableDto[];
}
