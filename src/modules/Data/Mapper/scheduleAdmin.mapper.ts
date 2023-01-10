import {
	ScheduleAdminDto,
	ScheduleAdminUserDto,
} from "../Dto/scheduleAdmin.Dto";
import { ScheduleAdmin } from "../Models/scheduleAdmin.model";
import { User } from "../Models/user.model";

export class ScheduleAdminMapper {
	static MapToDto(scheduleAdmin: ScheduleAdmin | null): ScheduleAdminDto {
		if (scheduleAdmin === null) return null as any;

		const Dto: ScheduleAdminDto = {
			id_td_user: scheduleAdmin.id_td_user,
			practitioner: scheduleAdmin.practitioner,
		};
		return Dto;
	}

	static MapToFullSAdminDto(
		scheduleAdmin: ScheduleAdmin | null
	): ScheduleAdminUserDto {
		if (scheduleAdmin === null) return null as any;

		const Dto: ScheduleAdminUserDto = {
			id_td_user: scheduleAdmin.get("id_td_user"),
			firstname: scheduleAdmin.get({ plain: true }).td_user.firstname,
			lastname: scheduleAdmin.get({ plain: true }).td_user.lastname,
			gender: scheduleAdmin.get({ plain: true }).td_user.gender,
			birthday: scheduleAdmin.get({ plain: true }).td_user.birthday,
			email: scheduleAdmin.get({ plain: true }).td_user.email,
			phone: scheduleAdmin.get({ plain: true }).td_user.phone,
			practitioner: scheduleAdmin.practitioner,
		};
		return Dto;
	}
}
