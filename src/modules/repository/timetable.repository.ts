import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { TimetableDto } from "../Data/Dto/timetable.Dto";
import { TimetableMapper } from "../Data/Mapper/timetable.mapper";
import { Timetable } from "../Data/Models/timetable.model";

export class TimetableRepository implements IRepository<TimetableDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<TimetableDto | null> {
		const result = await Timetable.findByPk(id);
		if (result === null) throw new NotFoundError("Timetable not found");
		return TimetableMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<TimetableDto>> {
		return Timetable.findAll({
			where: filter,
		}).then((data: Array<Timetable>) => {
			return data.map((timetable: Timetable) => {
				return TimetableMapper.MapToDto(timetable);
			});
		});
	}

	/**
	 *
	 * @param timetable
	 */
	async create(timetable: Partial<TimetableDto>): Promise<TimetableDto> {
		return Timetable.create(timetable).then((data: Timetable) => {
			return TimetableMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param timetable
	 */
	async update(timetable: Timetable, id: number): Promise<boolean | number> {
		return Timetable.update(timetable, { where: { id_timetable: id } }).then(
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
		return Timetable.destroy({ where: { id: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
