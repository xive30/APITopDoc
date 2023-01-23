import { create } from "domain";
import { IFullRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { AppointmentDto } from "../Data/Dto/appointment.Dto";
import { HolidayDto } from "../Data/Dto/holiday.Dto";
import { PlanningTimetableDto } from "../Data/Dto/planning.Dto";
import { TimetableDto } from "../Data/Dto/timetable.Dto";
import { Planning } from "../Data/Models/planning.model";

export class PlanningTimetableService
	implements IService<PlanningTimetableDto>
{
	private planningRepository: IFullRepository<PlanningTimetableDto>;

	constructor(planningRepository: IFullRepository<PlanningTimetableDto>) {
		this.planningRepository = planningRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<PlanningTimetableDto> | null> {
		return this.planningRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_planning: number): Promise<PlanningTimetableDto | null> {
		const data: any = await this.planningRepository.findById(id_planning);

		let nextDays: { date: Date; working: boolean; planning: any; }[] = [];
		for (let index = 0; index < 14; index++) {
			const day = new Date();
			day.setDate(day.getDate()+index);
			let newDay = {date: day, working: false, planning: []as any}
			nextDays.push(newDay);
		}

		// Holidays
		nextDays.forEach(day => {
			data.holidays?.map((holiday: HolidayDto) => {
				let startHoliday = new Date(holiday.end_date);
				let endHoliday = new Date(holiday.end_date);
				let checkDate = new Date(day.date);

				// Check if there are holidays in the next days
				if (checkDate.getDate() >= startHoliday.getDate() && checkDate.getDate() <= endHoliday.getDate()) {
					// console.log("Holiday");
					return day.working = false;
				}else {
					// console.log("Not Holiday!");
					data.timetables?.forEach((timetable: TimetableDto) => {
						// if there is a correspondance between next days and timetable add planning
						if (checkDate.toLocaleDateString("fr-FR", { weekday: "long" } ) === timetable.td_day) {
							// console.log("working day");
							day.working = true;
							const worktimeInMinutes = this.diffDates(
								timetable.timetable_start.toLocaleString(),
								timetable.timetable_end.toLocaleString()
							);
							const nbCreneaux = worktimeInMinutes / timetable.duration;
							let creneauxTab: any[] = [];
							for (let i = 0; i < nbCreneaux; i++) {
								const startHour = new Date(
									this.substractTimezone(timetable.timetable_start).getTime() +
										timetable.duration * 60 * 1000 * i
								).toLocaleTimeString();
								const endHour = new Date(
									this.substractTimezone(timetable.timetable_start).getTime() +
										timetable.duration * 60 * 1000 * (i + 1)
								).toLocaleTimeString();
								const newCreneau = { startHour: startHour, endHour: endHour, reserved: false };
								creneauxTab.push(newCreneau);
							}
							day.planning = ({
								minutes: worktimeInMinutes,
								nbCrenaux: nbCreneaux,
								creneaux: creneauxTab,
							});
							return day;
						}
					});
				}
			});
		});

		// make a list of appointments
		let reservedAppointment: any[] = [];
		data.appointments?.map((appointment: AppointmentDto) => {
			const appDay = new Date(appointment.date_appointment);
			const appStart = new Date(appointment.date_appointment).toLocaleTimeString();
			const appEnd = new Date((appointment.date_appointment).getTime() + appointment.duration * 60 * 1000).toLocaleTimeString();
			const newAppointment = ({
				jour: appDay,
				creneauxReserver: { debut: appStart, fin: appEnd }
			});
			reservedAppointment.push(newAppointment)
		});
		// console.log( reservedAppointment);

		// Match plannings with appointment
		nextDays.forEach((day) => {
			reservedAppointment.forEach(element => {
				const date1 = new Date(day.date).toLocaleDateString();
				const date2 = new Date(element.jour).toLocaleDateString();
				if ( date1 === date2 ) {
					day.planning.creneaux.forEach((creneau: any) => {
						const hour1 = creneau.startHour;
						const hour3 = creneau.endHour;
						const hour2 = element.creneauxReserver.debut;
						const hour4 = element.creneauxReserver.fin;
						if (hour1 === hour2 && hour3 === hour4) {
							return creneau.reserved = true;
						}
					});
					// console.log(day.planning.creneaux);
				} 
			});
		console.log(nextDays);
	});





		return data;
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(planning: Planning): Promise<PlanningTimetableDto | null> {
		return this.planningRepository.create(planning).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		planning: Planning,
		id_planning: number
	): Promise<boolean | number> {
		return this.planningRepository
			.update(planning, id_planning)
			.then((data) => {
				return data;
			});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_planning: number): Promise<boolean | number> {
		return this.planningRepository
			.delete(id_planning)
			.then((data: boolean | number) => {
				return data;
			});
	}

	/**
	 *
	 * @param timetable_start
	 * @param timetable_end
	 * @returns
	 */
	private diffDates(timetable_start: string, timetable_end: string) {
		// Convertir les time without timezone en instances de Date
		const start = new Date("1970-01-01 " + timetable_start);
		const end = new Date("1970-01-01 " + timetable_end);
		// Obtenir la différence en millisecondes
		const diff = end.getTime() - start.getTime();
		// Convertir la différence en minutes
		const diffInMinutes = diff / (1000 * 60);
		return diffInMinutes;
	}

	/**
	 *
	 * @param timeWithTimezone
	 * @returns timeWithoutTz
	 */
	private substractTimezone(timeWithTimezone: Date) {
		let timeWithTz = new Date("1970-01-01 " + timeWithTimezone);
		let timeWithoutTz = new Date();
		timeWithoutTz.setUTCHours(
			timeWithTz.getUTCHours(),
			timeWithTz.getUTCMinutes(),
			timeWithTz.getUTCSeconds(),
			timeWithTz.getUTCMilliseconds()
		);
		return timeWithoutTz;
	}
}
