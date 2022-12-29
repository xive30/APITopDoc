import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { PlanningDTO } from "../models/DTO/planning.dto";
import { Planning } from "../models/planning.model";

export class PlanningService implements IService<PlanningDTO> {
	private planningRepository: IRepository<PlanningDTO>;

	constructor(planningRepository: IRepository<PlanningDTO>) {
		this.planningRepository = planningRepository;
	}

	async findAll(): Promise<Array<PlanningDTO> | null> {
		return this.planningRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_planning: number): Promise<PlanningDTO | null> {
		return this.planningRepository.findById(id_planning).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(planning: Planning): Promise<PlanningDTO | null> {
		return this.planningRepository.create(planning).then((data) => {
			return data;
		});
	}

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

	async delete(id_planning: number): Promise<boolean | number> {
		return this.planningRepository
			.delete(id_planning)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
