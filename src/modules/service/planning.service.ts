import { IRepository } from "../core/repository.interface";
import { IFullService, IService } from "../core/service.interface";
import { PlanningDto, PlanningTimetableDto } from "../Data/Dto/planning.Dto";
import { Planning } from "../Data/Models/planning.model";
import { IPlanningRepository } from "../repository/planning.repository";

export interface IPlanningService
	extends IService<PlanningDto>,
		IFullService<PlanningTimetableDto> {}

export class PlanningService implements IPlanningService {
	private planningRepository: IPlanningRepository;

	constructor(planningRepository: IPlanningRepository) {
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
	async findAllFull(
		options?: any
	): Promise<Array<PlanningTimetableDto> | null> {
		return this.planningRepository.findAllFull(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<PlanningDto> | null> {
		return this.planningRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_planning: number): Promise<PlanningDto | null> {
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
	async create(planning: Planning): Promise<PlanningDto | null> {
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
