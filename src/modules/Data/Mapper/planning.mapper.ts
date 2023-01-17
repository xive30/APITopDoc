import { PlanningDto, PlanningTimetableDto } from "../Dto/planning.Dto";
import { TimetableDto } from "../Dto/timetable.Dto";
import { Planning } from "../Models/planning.model";
import { Timetable } from "../Models/timetable.model";

export class PlanningMapper {
	static MapToDto(planning: Planning | null): PlanningDto {
		if (planning === null) return null as any;

		const Dto: PlanningDto = {
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
			id_activity: planning.id_activity
		};
		return Dto;
	}

	static MapTimetableByPlanningToDto(
		planning: Planning | null
	): PlanningTimetableDto {
		if (planning === null) return null as any;
		let timetables: Timetable[] = planning.get({ plain: true }).td_timetables;

		const timetableData = timetables.map((timetable) => {
			const timetableDto: TimetableDto = {
				td_day: timetable.td_day,
				timetable_start: timetable.timetable_start,
				timetable_end: timetable.timetable_end,
				duration: timetable.duration,
				id_planning: timetable.id_planning,
			};
			return timetableDto;
		});

		const Dto: PlanningTimetableDto = {
			id_planning: planning.get("id_planning"),
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
			timetables: timetableData,
			id_activity: planning.id_activity,
		};
		return Dto;
	}
}
