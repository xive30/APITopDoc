import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/respository.interface";
import { TimetableDTO } from "../models/DTO/timetable.dto";
import { TimetableMapper } from "../models/Mapper/timetable.mapper";
import { Timetable } from "../models/Models/timetable.model";

export class TimetableRepository implements IRepository<TimetableDTO> {

	/**
     * 
     * @param id 
     * @returns 
     */
	async findById(id: number): Promise<TimetableDTO | null> {
		const result = await Timetable.findByPk(id);
        if (result === null) throw new NotFoundError("Timetable not found");
        return TimetableMapper.MapToDTO(result);
	}

	/**
     * 
     * @param filter 
     * @returns 
     */
	async findAll(filter: any): Promise<Array<TimetableDTO>> {
		return Timetable.findAll({
			where: filter
		}).then((data: Array<Timetable>) => {
			return data.map((timetable: Timetable) => {
				return TimetableMapper.MapToDTO(timetable);
			});
		});
	}

	/**
     * 
     * @param timetable
     */
	async create(timetable: Partial<TimetableDTO>): Promise<TimetableDTO> {
		return Timetable.create(timetable).then((data: Timetable) => {
			return TimetableMapper.MapToDTO(data);
		});
	}

	/**
     * 
     * @param timetable
     */
	async update(timetable: Timetable): Promise<TimetableDTO> {
		if (timetable.id_timetable === null) throw new InputError("No id for timetable");
    
		const row = await Timetable.findByPk(timetable.id_timetable);

		if (row === null) throw new NotFoundError("Timetable not found");

		const result = await row.save()
		return TimetableMapper.MapToDTO(result) ;
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
