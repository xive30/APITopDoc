import { TimetableDto } from "../Dto/timetable.Dto";
import { Timetable } from "../Models/timetable.model";

export class TimetableMapper {
	static MapToDto(timetable: Timetable | null): TimetableDto {
		if (timetable === null) return null as any;

		const Dto: TimetableDto = {
			td_day: timetable.td_day,
			timetable_start: timetable.timetable_start,
			timetable_end: timetable.timetable_end,
			duration: timetable.duration,
			id_planning: timetable.id_planning,
		};
		return Dto;
	}
}
