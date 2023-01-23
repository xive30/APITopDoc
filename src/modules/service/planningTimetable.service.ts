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

		// Slot for appointments
		data.timetables?.map((timetable: TimetableDto) => {
			
			const workhour = this.diffDates(
				timetable.timetable_start.toLocaleString(),
				timetable.timetable_end.toLocaleString()
			);
			const nbCreneaux = workhour / timetable.duration;

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

			const day = this.attributeDate(timetable.td_day);
			
			// Holidays
			data.holidays?.map((holiday: HolidayDto) => {
				let startHoliday = new Date(holiday.end_date);
				let endHoliday = new Date(holiday.end_date);
				let checkDate = new Date(day);

				if (checkDate.getFullYear() > startHoliday.getFullYear() && checkDate.getFullYear() < endHoliday.getFullYear()) {
					console.log("La date est entre les vacances");
				} else if (checkDate.getFullYear() === startHoliday.getFullYear() && checkDate.getFullYear() === endHoliday.getFullYear()) {
					if (checkDate.getMonth() > startHoliday.getMonth() && checkDate.getMonth() < endHoliday.getMonth()) {
						console.log("La date est entre les vacances");
					} else if (checkDate.getMonth() === startHoliday.getMonth() && checkDate.getMonth() === endHoliday.getMonth()) {
						if (checkDate.getDate() >= startHoliday.getDate() && checkDate.getDate() <= endHoliday.getDate()) {
							console.log("La date est entre les vacances");
							creneauxTab = ["holiday"];
						}
					}
				}
			});
			const planning = ({
				jour: day,
				minutes: workhour,
				nbCrenaux: nbCreneaux,
				creneaux: creneauxTab,
			});

			console.log(planning);
		});

		data.appointments?.map((appointment: AppointmentDto) => {
			const appDay = new Date(appointment.date_appointment).toLocaleDateString();
			const appStart = new Date(appointment.date_appointment).toLocaleTimeString();
			const appEnd = new Date(appointment.date_appointment).toLocaleTimeString() + appointment.duration;

			const reservedAppointment = ({
				jour: appDay,
				CreneauxReserver: { debut: appStart, fin: appEnd }
			});
			console.log( reservedAppointment);
			
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

	/**
	 *
	 * @param nameDay
	 */
	private attributeDate(nameDay: string) {
		// Date
		let today = new Date();
		let workingDay = nameDay;
		let targetDate = new Date();
		let days = [
			"dimanche",
			"lundi",
			"mardi",
			"mercredi",
			"jeudi",
			"vendredi",
			"samedi",
		];
		let todayIndex = days.indexOf(
			today.toLocaleDateString("fr-FR", { weekday: "long" })
		);
		let targetIndex = days.indexOf(workingDay);
		let diff = targetIndex - todayIndex;

		if (diff >= 0) targetDate.setUTCDate(today.getUTCDate() + diff);
		else targetDate.setUTCDate(today.getUTCDate() + 7 + diff);

		let dayDate = targetDate.toLocaleDateString("fr-FR", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		return dayDate;
	}

	// private substractHolidays(day: Date, holidays: HolidayDto[] | null) {
		
	// }
}
