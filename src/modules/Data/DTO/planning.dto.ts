import { TimetableDTO } from "./timetable.dto";

export interface PlanningDTO {
	start_validity: Date;

	end_validity: Date;
}

export interface PlanningTimetableDTO {
	id_Planning: number;

	start_validity: Date;

	end_validity: Date;

	timetables?: TimetableDTO[] ;
}
