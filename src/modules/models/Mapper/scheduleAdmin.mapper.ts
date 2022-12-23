import { ScheduleAdminDTO } from "../DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../scheduleAdmin.model";

export class ScheduleAdminMapper {
	static MapToDTO(scheduleAdmin: ScheduleAdmin | null): ScheduleAdminDTO {
		if (scheduleAdmin === null) return null as any;

		const DTO: ScheduleAdminDTO = {
			practitioner: scheduleAdmin.practitioner,
		};
		return DTO;
	}
}
