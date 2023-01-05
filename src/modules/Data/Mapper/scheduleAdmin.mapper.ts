import {
	ScheduleAdminDTO,
	ScheduleAdminUserDTO,
} from "../DTO/scheduleAdmin.dto";
import { ScheduleAdmin } from "../Models/scheduleAdmin.model";
import { User } from "../Models/user.model";

export class ScheduleAdminMapper {
	static MapToDTO(scheduleAdmin: ScheduleAdmin | null): ScheduleAdminDTO {
		if (scheduleAdmin === null) return null as any;

		const DTO: ScheduleAdminDTO = {
			id_td_user: scheduleAdmin.id_td_user,
			practitioner: scheduleAdmin.practitioner,
		};
		return DTO;
	}

	static MapToFullSAdminDTO(
		scheduleAdmin: ScheduleAdmin | null
	): ScheduleAdminUserDTO {
		if (scheduleAdmin === null) return null as any;

		const DTO: ScheduleAdminUserDTO = {
			id_td_user: scheduleAdmin.get("id_td_user"),
			firstname: scheduleAdmin.get({ plain: true }).td_user.firstname,
			lastname: scheduleAdmin.get({ plain: true }).td_user.lastname,
			gender: scheduleAdmin.get({ plain: true }).td_user.gender,
			birthday: scheduleAdmin.get({ plain: true }).td_user.birthday,
			email: scheduleAdmin.get({ plain: true }).td_user.email,
			phone: scheduleAdmin.get({ plain: true }).td_user.phone,
			practitioner: scheduleAdmin.practitioner,
		};
		return DTO;
	}
}
