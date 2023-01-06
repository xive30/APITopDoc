import { InputError, NotFoundError } from "../core/errors/errors";
import { IFullRepository, IRepository } from "../core/repository.interface";
import { PlanningDTO, PlanningTimetableDTO } from "../Data/DTO/planning.dto";
import { PlanningMapper } from "../Data/Mapper/planning.mapper";
import { Planning } from "../Data/Models/planning.model";
import { Timetable } from "../Data/Models/timetable.model";

export interface IPlanningRepository extends IRepository<PlanningDTO>, IFullRepository<PlanningTimetableDTO> {}

export class PlanningRepository implements IPlanningRepository {
	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAllFull(filter: any): Promise<Array<PlanningTimetableDTO>> {
		const plannings =  await Planning.findAll({
			where: filter,
			include: Timetable,
			nest: true,
		});

		try {
			return  plannings.map((planning) => {
				return PlanningMapper.MapTimetableByPlanningToDTO(planning);
			});
		} catch (error) {
			throw new Error();
			// Renvoyer une erreur
		}
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<PlanningDTO | null> {
		const result = await Planning.findByPk(id);
		if (result === null) throw new NotFoundError("Planning not found");
		return PlanningMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<PlanningDTO>> {
		return Planning.findAll({
			where: filter,
		}).then((data: Array<Planning>) => {
			return data.map((planning: Planning) => {
				return PlanningMapper.MapToDTO(planning);
			});
		});
	}

	async create(planning: Partial<PlanningDTO>): Promise<PlanningDTO> {
		return Planning.create(planning).then((data: Planning) => {
			return PlanningMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param planning
	 */
	async update(planning: Planning, id_planing: number): Promise<boolean | number> {
		return Planning.update(planning, { where: { id_activity: id_planing } }).then(
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
		return Planning.destroy({ where: { id_planning: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
