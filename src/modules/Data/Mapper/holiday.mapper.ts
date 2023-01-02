import { HolidayDTO } from "../DTO/holiday.dto";
import { Holiday } from "../Models/holiday.model";

export class HolidayMapper {
	static MapToDTO(holiday: Holiday | null): HolidayDTO {
		if (holiday === null) return null as any;

		const DTO: HolidayDTO = {
			start_date: holiday.start_date,
			end_date: holiday.end_date,
		};
		return DTO;
	}
}
