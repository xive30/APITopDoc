import { IRepository } from "../core/respository.interface";
import { TimetableDTO } from "../models/DTO/timetable.dto";
import { TimetableMapper } from "../models/Mapper/timetable.mapper";
import { Timetable } from "../models/timetable.model";

export class TimetableRepository implements IRepository<TimetableDTO> {
	async findById(id: number): Promise<TimetableDTO | null> {
		return Timetable.findByPk(id).then((timetable) => TimetableMapper.MapToDTO(timetable));
	}

	async findAll(): Promise<Array<TimetableDTO>> {
		return Timetable.findAll().then((data: Array<Timetable>) => {
			return data.map((timetable: Timetable) => {
				return TimetableMapper.MapToDTO(timetable);
			});
		});
	}

	async create(timetable: Partial<TimetableDTO>): Promise<TimetableDTO> {
		return Timetable.create(timetable).then((data: Timetable) => {
			return TimetableMapper.MapToDTO(data);
		});
	}

	async update(timetable: Timetable, id: number): Promise<boolean | number> {
		return Timetable.update(timetable, { where: { id: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Timetable.destroy({ where: { id: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
