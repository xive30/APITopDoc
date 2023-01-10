import { Activity } from "../Models/activity.model";
import { Appointment } from "../Models/appointment.model";
import { AppointmentDto } from "../Dto/appointment.Dto";
import { User } from "../Models/user.model";

export class AppointmentMapper {
	static MapToDto(appointment: Appointment | null): AppointmentDto {
		if (appointment === null) return null as any;

		const Dto: AppointmentDto = {
			id_activity: appointment.id_activity,
			id_td_user: appointment.id_td_user,
			date_appointment: appointment.date_appointment,
			duration: appointment.duration,
		};
		return Dto;
	}
}
