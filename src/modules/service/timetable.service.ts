import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { TimetableDto } from "../Data/Dto/timetable.Dto";
import { Timetable } from "../Data/Models/timetable.model";

export class TimetableService implements IService<TimetableDto> {
	private timetableRepository: IRepository<TimetableDto>;

	constructor(timetableRepository: IRepository<TimetableDto>) {
		this.timetableRepository = timetableRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<TimetableDto> | null> {
		return this.timetableRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_timetable: number): Promise<TimetableDto | null> {
		return this.timetableRepository.findById(id_timetable).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(timetable: Timetable): Promise<TimetableDto | null> {
		return this.timetableRepository.create(timetable).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		timetable: Timetable,
		id_timetable: number
	): Promise<boolean | number> {
		return this.timetableRepository
			.update(timetable, id_timetable)
			.then((data) => {
				return data;
			});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_timetable: number): Promise<boolean | number> {
		return this.timetableRepository
			.delete(id_timetable)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
