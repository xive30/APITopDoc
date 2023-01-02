import { PlanningDTO } from "../DTO/planning.dto";
import { Planning } from "../Models/planning.model";

export class PlanningMapper {
	static MapToDTO(planning: Planning | null): PlanningDTO {
		if (planning === null) return null as any;

		const DTO: PlanningDTO = {
			start_validity: planning.start_validity,
			end_validity: planning.end_validity,
		};
		return DTO;
	}
}
