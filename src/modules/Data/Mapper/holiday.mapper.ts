import { HolidayDto } from "../Dto/holiday.Dto";
import { Holiday } from "../Models/holiday.model";

export class HolidayMapper {
	static MapToDto(holiday: Holiday | null): HolidayDto {
		if (holiday === null) return null as any;

		const Dto: HolidayDto = {
			id_holiday: holiday.id_holiday,
			start_date: holiday.start_date,
			end_date: holiday.end_date,
			id_activity: holiday.id_activity,
		};
		return Dto;
	}
}
