import { IFullRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
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

		function diffDates(timetable_start: string, timetable_end: string) {
			// Convertir les time without timezone en instances de Date
			const start = new Date("1970-01-01 " + timetable_start);
			const end = new Date("1970-01-01 " + timetable_end);
			// Obtenir la différence en millisecondes
			const diff = end.getTime() - start.getTime();
			// Convertir la différence en minutes
			const diffInMinutes = diff / (1000 * 60);
			return diffInMinutes;
		}

		function substractTimezone(timeWithTimezone: Date) {
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

		// Holidays
		const today = new Date();
		if (
			today >= new Date(data.holidays[0].start_date) &&
			today <= new Date(data.holidays[0].end_date)
		) {
			console.log("No slot today! holiday!");
			const holiday = { date: today, holiday: true };
		} else {
			// Slot for appointments
			data.timetables?.map((timetable: TimetableDto) => {
				const workhour = diffDates(
					timetable.timetable_start.toLocaleString(),
					timetable.timetable_end.toLocaleString()
				);
				const nbCreneaux = workhour / timetable.duration;

				let creneauxTab: any[] = [];

				for (let i = 0; i < nbCreneaux; i++) {
					const startHour = new Date(substractTimezone(timetable.timetable_start).getTime() + timetable.duration * 60 * 1000 * i).toLocaleTimeString()
					const endHour = new Date(substractTimezone(timetable.timetable_start).getTime() + timetable.duration * 60 * 1000 * (i+1)).toLocaleTimeString()

					const newCreneau = {startHour: startHour, endHour: endHour}
					creneauxTab.push(newCreneau);
				}
				console.log({jour: timetable.td_day, minutes: workhour, nbCrenaux: nbCreneaux, creneaux: creneauxTab});
				
			});
		}
		return this.planningRepository.findById(id_planning);
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
}
