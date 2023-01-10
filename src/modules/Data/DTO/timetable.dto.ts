export interface TimetableDto {
	id_timetable?: number;

	td_day: string;

	timetable_start: Date;

	timetable_end: Date;

	duration: number;

	id_planning: number;
}
