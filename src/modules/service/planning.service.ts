import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { PlanningDTO } from "../Data/DTO/planning.dto";
import { Planning } from "../Data/Models/planning.model";

export class PlanningService implements IService<PlanningDTO> {
	private planningRepository: IRepository<PlanningDTO>;

	constructor(planningRepository: IRepository<PlanningDTO>) {
		this.planningRepository = planningRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<PlanningDTO> | null> {
		return this.planningRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_planning: number): Promise<PlanningDTO | null> {
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
	async create(planning: Planning): Promise<PlanningDTO | null> {
		return this.planningRepository.create(planning).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(planning: Planning, id_planning: number): Promise<boolean | number> {
		return this.planningRepository.update(planning, id_planning).then((data) => {
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
