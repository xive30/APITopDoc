import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { TimetableDTO } from "../Data/DTO/timetable.dto";
import { Timetable } from "../Data/Models/timetable.model";

export class TimetableService implements IService<TimetableDTO> {
	private timetableRepository: IRepository<TimetableDTO>;

	constructor(timetableRepository: IRepository<TimetableDTO>) {
		this.timetableRepository = timetableRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<TimetableDTO> | null> {
		return this.timetableRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_timetable: number): Promise<TimetableDTO | null> {
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
	async create(timetable: Timetable): Promise<TimetableDTO | null> {
		return this.timetableRepository.create(timetable).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(timetable: Timetable): Promise<TimetableDTO | null> {
		return this.timetableRepository.update(timetable).then((data) => {
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
