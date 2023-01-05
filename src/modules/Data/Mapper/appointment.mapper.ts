import { Activity } from "../Models/activity.model";
import { Appointment } from "../Models/appointment.model";
import { AppointmentDTO } from "../DTO/appointment.dto";
import { User } from "../Models/user.model";

export class AppointmentMapper {
	static MapToDTO(appointment: Appointment | null): AppointmentDTO {
		if (appointment === null) return null as any;

		const DTO: AppointmentDTO = {
			id_activity: appointment.id_activity,
			id_td_user: appointment.id_td_user,
			date_appointment: appointment.date_appointment,
			duration: appointment.duration,
		};
		return DTO;
	}
}
