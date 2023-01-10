import { InputError, NotFoundError } from "../core/errors/errors";
import { IFullRepository, IRepository } from "../core/repository.interface";
import { PlanningDto, PlanningTimetableDto } from "../Data/Dto/planning.Dto";
import { PlanningMapper } from "../Data/Mapper/planning.mapper";
import { Planning } from "../Data/Models/planning.model";
import { Timetable } from "../Data/Models/timetable.model";

export interface IPlanningRepository
	extends IRepository<PlanningDto>,
		IFullRepository<PlanningTimetableDto> {}

export class PlanningRepository implements IPlanningRepository {
	createFull(t: PlanningTimetableDto): Promise<PlanningTimetableDto | null> {
		throw new Error("Method not implemented.");
	}
	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAllFull(filter: any): Promise<Array<PlanningTimetableDto>> {
		const plannings = await Planning.findAll({
			where: filter,
			include: Timetable,
			nest: true,
		});

		try {
			return plannings.map((planning) => {
				return PlanningMapper.MapTimetableByPlanningToDto(planning);
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
	async findById(id: number): Promise<PlanningDto | null> {
		const result = await Planning.findByPk(id);
		if (result === null) throw new NotFoundError("Planning not found");
		return PlanningMapper.MapToDto(result);
	}

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
