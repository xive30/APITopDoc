import { HolidayDto } from "../Dto/holiday.Dto";
import { PlanningDto, PlanningTimetableDto } from "../Dto/planning.Dto";
import { TimetableDto } from "../Dto/timetable.Dto";
import { AppointmentDto } from "../Dto/appointment.Dto";
import { Appointment } from "../Models/appointment.model";
import { Holiday } from "../Models/holiday.model";
import { Planning } from "../Models/planning.model";
import { Timetable } from "../Models/timetable.model";

export class PlanningMapper {
	static MapToDto(planning: Planning | null): PlanningDto {
		if (planning === null) return null as any;

		const Dto: PlanningDto = {
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
			id_activity: planning.id_activity
		};
		return Dto;
	}

	static MapTimetableByPlanningToDto(
		planning: Planning | null
	): PlanningTimetableDto {
		if (planning === null) return null as any;
		let timetables: Timetable[] = planning.get({ plain: true }).td_timetables;

		const timetableData = timetables.map((timetable) => {
			const timetableDto: TimetableDto = {
				td_day: timetable.td_day,
				timetable_start: timetable.timetable_start,
				timetable_end: timetable.timetable_end,
				duration: timetable.duration,
				id_planning: timetable.id_planning,
			};
			return timetableDto;
		});

		let holidays: Holiday[] = planning.get({plain: true}).td_activity.td_holidays;

		const holidaysData = holidays.map((holiday) => {
			const holidayDto: HolidayDto = {
				start_date: holiday.start_date,
				end_date: holiday.end_date
			}
			return holidayDto;
		});

		let appointments: Appointment[] = planning.get({plain: true}).td_activity.td_appointments;

		const appointmentData = appointments.map((appointment) => {
			const appointmentDto: AppointmentDto  = {
				id_td_user: appointment.id_td_user,
				date_appointment: appointment.date_appointment,
				duration: appointment.duration,
			}
			return appointmentDto
		});

		const Dto: PlanningTimetableDto = {
			id_planning: planning.get("id_planning"),
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
			id_activity: planning.id_activity,
			holidays: holidaysData,
			timetables: timetableData,
			appointments: appointmentData,
		};
		return Dto;
	}
}
