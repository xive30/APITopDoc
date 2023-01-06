import { HolidayDTO } from "../DTO/holiday.dto";
import { Holiday } from "../Models/holiday.model";

export class HolidayMapper {
	static MapToDTO(holiday: Holiday | null): HolidayDTO {
		if (holiday === null) return null as any;

		const DTO: HolidayDTO = {
			id_holiday: holiday.id_holiday,
			start_date: holiday.start_date,
			end_date: holiday.end_date,
			id_activity: holiday.id_activity,
		};
		return DTO;
	}
}
