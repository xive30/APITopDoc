import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { HolidayDto } from "../Data/Dto/holiday.Dto";
import { Holiday } from "../Data/Models/holiday.model";

export class HolidayService implements IService<HolidayDto> {
	private holidayRepository: IRepository<HolidayDto>;

	constructor(holidayRepository: IRepository<HolidayDto>) {
		this.holidayRepository = holidayRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<HolidayDto> | null> {
		return this.holidayRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_holiday: number): Promise<HolidayDto | null> {
		return this.holidayRepository.findById(id_holiday).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(holiday: Holiday): Promise<HolidayDto | null> {
		return this.holidayRepository.create(holiday).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		holiday: Holiday,
		id_holiday: number
	): Promise<boolean | number> {
		return this.holidayRepository.update(holiday, id_holiday).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_holiday: number): Promise<boolean | number> {
		return this.holidayRepository
			.delete(id_holiday)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
