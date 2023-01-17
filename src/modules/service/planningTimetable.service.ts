import { IFullRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { PlanningTimetableDto } from "../Data/Dto/planning.Dto";
import { Planning } from "../Data/Models/planning.model";

export class PlanningTimetableService implements IService<PlanningTimetableDto> {
	private planningRepository: IFullRepository<PlanningTimetableDto>;

	constructor(planningRepository: IFullRepository<PlanningTimetableDto>) {
		this.planningRepository = planningRepository;
	}
	createFull(t: PlanningTimetableDto): Promise<PlanningTimetableDto | null> {
		throw new Error("Method not implemented.");
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(
		options?: any
	): Promise<Array<PlanningTimetableDto> | null> {
		return this.planningRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_planning: number): Promise<PlanningTimetableDto | null> {
		return this.planningRepository.findById(id_planning).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(planning: Planning): Promise<PlanningTimetableDto | null> {
		return this.planningRepository.create(planning).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		planning: Planning,
		id_planning: number
	): Promise<boolean | number> {
		return this.planningRepository
			.update(planning, id_planning)
			.then((data) => {
				return data;
			});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_planning: number): Promise<boolean | number> {
		return this.planningRepository
			.delete(id_planning)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
