import { TimetableDTO } from "../DTO/timetable.dto";
import { Timetable } from "../Models/timetable.model";

export class TimetableMapper {
	static MapToDTO(timetable: Timetable | null): TimetableDTO {
		if (timetable === null) return null as any;

		const DTO: TimetableDTO = {
			td_day: timetable.td_day,
			timetable_start: timetable.timetable_start,
			timetable_end: timetable.timetable_end,
			duration: timetable.duration,
		};
		return DTO;
	}
}
