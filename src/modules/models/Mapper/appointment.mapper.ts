import { Activity } from "../Models/activity.model";
import { Appointment } from "../Models/appointement.model";
import { AppointmentDTO } from "../DTO/appointment";
import { User } from "../Models/user.model";

export class AppointmentMapper {
	static MapToDTO(appointment: Appointment | null): AppointmentDTO {
		if (appointment === null) return null as any;

		const DTO: AppointmentDTO = {
			id_activity: Activity.id_activity,
			id_td_user: User.id_td_user,
			date_appointment: appointment.date_appointment,
			duration: appointment.duration,
		};
		return DTO;
	}
}
