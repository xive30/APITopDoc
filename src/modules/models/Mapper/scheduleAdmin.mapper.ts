import { ScheduleAdminDTO, ScheduleAdminUserDTO } from "../DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../Models/scheduleAdmin.model";
import { User } from "../Models/user.model";

export class ScheduleAdminMapper {
	static MapToOnlyDTO(scheduleAdmin: ScheduleAdmin | null): ScheduleAdminDTO {
		if (scheduleAdmin === null) return null as any;

		const DTO: ScheduleAdminDTO = {
			id_td_user: scheduleAdmin.id_td_user,
			practitioner: scheduleAdmin.practitioner,
		};
		return DTO;
	}
	
	static MapToDTO(scheduleAdmin: ScheduleAdmin | null, user: User | null): ScheduleAdminUserDTO {
		if (scheduleAdmin === null || user === null) return null as any;

		const DTO: ScheduleAdminUserDTO = {
			id_td_user: scheduleAdmin.id_td_user,
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
			practitioner: scheduleAdmin.practitioner,
		};
		return DTO;
	}
}
