import { NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { PlanningDto } from "../Data/Dto/planning.Dto";
import { PlanningMapper } from "../Data/Mapper/planning.mapper";
import { Planning } from "../Data/Models/planning.model";

export class PlanningRepository implements IRepository<PlanningDto>{

	/**
	 *
	 * @param filter
	 * @returns
	*/
	async findAll(filter: any): Promise<Array<PlanningDto>> {
		return Planning.findAll({
			where: filter,
		}).then((data: Array<Planning>) => {
			return data.map((planning: Planning) => {
				return PlanningMapper.MapToDto(planning);
			});
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<PlanningDto | null> {
		const result = await Planning.findByPk(id);
		if (result === null) throw new NotFoundError("Planning not found");
		return PlanningMapper.MapToDto(result);
	}

	/**
	 * 
	 * @param planning 
	 * @returns 
	 */
	async create(planning: Partial<PlanningDto>): Promise<PlanningDto> {
		return Planning.create(planning).then((data: Planning) => {
			return PlanningMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param planning
	 */
	async update(
		planning: Planning,
		id_planing: number
	): Promise<boolean | number> {
		return Planning.update(planning, {
			where: { id_activity: id_planing },
		}).then((data: Array<boolean | number>) => {
			return data[0];
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Planning.destroy({ where: { id_planning: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
