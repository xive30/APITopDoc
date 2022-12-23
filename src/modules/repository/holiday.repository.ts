import { IRepository } from "../core/respository.interface";
import { HolidayDTO } from "../models/DTO/holiday.dto";
import { Holiday } from "../models/holiday.model";
import { HolidayMapper } from "../models/Mapper/holiday.mapper";

export class HolidayRepository implements IRepository<HolidayDTO> {
	async findById(id: number): Promise<HolidayDTO | null> {
		return Holiday.findByPk(id).then((holiday) => HolidayMapper.MapToDTO(holiday));
	}

	async findAll(): Promise<Array<HolidayDTO>> {
		return Holiday.findAll().then((data: Array<Holiday>) => {
			return data.map((holiday: Holiday) => {
				return HolidayMapper.MapToDTO(holiday);
			});
		});
	}

	async create(holiday: Partial<HolidayDTO>): Promise<HolidayDTO> {
		return Holiday.create(holiday).then((data: Holiday) => {
			return HolidayMapper.MapToDTO(data);
		});
	}

	async update(holiday: Holiday, id: number): Promise<boolean | number> {
		return Holiday.update(holiday, { where: { id_holiday: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Holiday.destroy({ where: { id_holiday: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
