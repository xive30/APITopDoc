import { PlanningDTO, PlanningTimetableDTO } from "../DTO/planning.dto";
import { TimetableDTO } from "../DTO/timetable.dto";
import { Planning } from "../Models/planning.model";
import { Timetable } from "../Models/timetable.model";
import { TimetableMapper } from "./timetable.mapper";

export class PlanningMapper {
	static MapToDTO(planning: Planning | null): PlanningDTO {
		if (planning === null) return null as any;

		const DTO: PlanningDTO = {
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
		};
		return DTO;
	}

	static MapTimetableByPlanningToDTO(
		planning: Planning | null
	): PlanningTimetableDTO {
		if (planning === null) return null as any;
		let timetables:Timetable[] = planning.get({ plain: true }).td_timetables;

		const timetableData = timetables.map((timetable) => {
			const timetableDTO: TimetableDTO =  {
				td_day: timetable.td_day,
				timetable_start: timetable.timetable_start,
				timetable_end: timetable.timetable_end,
				duration: timetable.duration,
			}
			return timetableDTO;
		})
		
		const DTO: PlanningTimetableDTO = {
			id_Planning: planning.get("id_planning"),
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
			timetables: timetableData,
		};
		return DTO;
	}
}
