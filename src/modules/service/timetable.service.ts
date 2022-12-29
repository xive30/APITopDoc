import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { TimetableDTO } from "../models/DTO/timetable.dto";
import { Timetable } from "../models/timetable.model";

export class TimetableService implements IService<TimetableDTO> {
	private timetableRepository: IRepository<TimetableDTO>;

	constructor(timetableRepository: IRepository<TimetableDTO>) {
		this.timetableRepository = timetableRepository;
	}

	async findAll(): Promise<Array<TimetableDTO> | null> {
		return this.timetableRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_timetable: number): Promise<TimetableDTO | null> {
		return this.timetableRepository.findById(id_timetable).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(timetable: Timetable): Promise<TimetableDTO | null> {
		return this.timetableRepository.create(timetable).then((data) => {
			return data;
		});
	}

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

	async delete(id_timetable: number): Promise<boolean | number> {
		return this.timetableRepository
			.delete(id_timetable)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
