import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { HolidayDto } from "../Data/Dto/holiday.Dto";
import { Holiday } from "../Data/Models/holiday.model";
import { HolidayMapper } from "../Data/Mapper/holiday.mapper";

export class HolidayRepository implements IRepository<HolidayDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<HolidayDto | null> {
		const result = await Holiday.findByPk(id);
		if (result === null) throw new NotFoundError("Holiday not found");
		return HolidayMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<HolidayDto>> {
		return Holiday.findAll({
			where: filter,
		}).then((data: Array<Holiday>) => {
			return data.map((holiday: Holiday) => {
				return HolidayMapper.MapToDto(holiday);
			});
		});
	}

	/**
	 *
	 * @param holiday
	 */
	async create(holiday: Partial<HolidayDto>): Promise<HolidayDto> {
		return Holiday.create(holiday).then((data: Holiday) => {
			return HolidayMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param holiday
	 */
	async update(holiday: Holiday, id: number): Promise<boolean | number> {
		return Holiday.update(holiday, { where: { id_holiday: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Holiday.destroy({ where: { id_holiday: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
