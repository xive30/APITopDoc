import { IRepository } from "../core/respository.interface";
import { HolidayDTO } from "../models/DTO/holiday.dto";
import { Holiday } from "../models/holiday.model";

export class HolidayService {
	private holidayRepository: IRepository<HolidayDTO>;

	constructor(holidayRepository: IRepository<HolidayDTO>) {
		this.holidayRepository = holidayRepository;
	}

	async findAll(): Promise<Array<HolidayDTO> | null> {
		return this.holidayRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_holiday: number): Promise<HolidayDTO | null> {
		return this.holidayRepository.findById(id_holiday).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(
		holiday: Holiday
	): Promise<HolidayDTO | null> {
		return this.holidayRepository.create(holiday).then((data) => {
			return data;
		});
	}

	async update(
		holiday: Holiday,
		id_holiday: number
	): Promise<boolean | number> {
		return this.holidayRepository
			.update(holiday, id_holiday)
			.then((data) => {
				return data;
			});
	}

	async delete(id_holiday: number): Promise<boolean | number> {
		return this.holidayRepository
			.delete(id_holiday)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
