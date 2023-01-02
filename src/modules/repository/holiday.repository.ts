import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { HolidayDTO } from "../Data/DTO/holiday.dto";
import { Holiday } from "../Data/Models/holiday.model";
import { HolidayMapper } from "../Data/Mapper/holiday.mapper";

export class HolidayRepository implements IRepository<HolidayDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<HolidayDTO | null> {
		const result = await Holiday.findByPk(id);
		if (result === null) throw new NotFoundError("Holiday not found");
		return HolidayMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<HolidayDTO>> {
		return Holiday.findAll({
			where: filter,
		}).then((data: Array<Holiday>) => {
			return data.map((holiday: Holiday) => {
				return HolidayMapper.MapToDTO(holiday);
			});
		});
	}

	/**
	 *
	 * @param holiday
	 */
	async create(holiday: Partial<HolidayDTO>): Promise<HolidayDTO> {
		return Holiday.create(holiday).then((data: Holiday) => {
			return HolidayMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param holiday
	 */
	async update(holiday: Holiday): Promise<HolidayDTO> {
		if (holiday.id_holiday === null) throw new InputError("No id for holiday");

		const row = await Holiday.findByPk(holiday.id_holiday);

		if (row === null) throw new NotFoundError("Holiday not found");

		const result = await row.save();
		return HolidayMapper.MapToDTO(result);
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
