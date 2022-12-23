import { IRepository } from "../core/respository.interface";
import { PlanningDTO } from "../models/DTO/planning.dto";
import { PLanningMapper } from "../models/Mapper/planning.mapper";
import { Planning } from "../models/planning.model";

export class PlanningRepository implements IRepository<PlanningDTO> {
	async findById(id: number): Promise<PlanningDTO | null> {
		return Planning.findByPk(id).then((planning) => PLanningMapper.MapToDTO(planning));
	}

	async findAll(): Promise<Array<PlanningDTO>> {
		return Planning.findAll().then((data: Array<Planning>) => {
			return data.map((planning: Planning) => {
				return PLanningMapper.MapToDTO(planning);
			});
		});
	}

	async create(planning: Partial<PlanningDTO>): Promise<PlanningDTO> {
		return Planning.create(planning).then((data: Planning) => {
			return PLanningMapper.MapToDTO(data);
		});
	}

	async update(planning: Planning, id: number): Promise<boolean | number> {
		return Planning.update(planning, { where: { id_planning: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Planning.destroy({ where: { id_planning: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
