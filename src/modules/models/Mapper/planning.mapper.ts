import { PlanningDTO } from "../DTO/planning.dto"
import { Planning } from "../planning.model"

export class PLanningMapper {
    static MapToDTO(planning: Planning | null): PlanningDTO{
        if (planning === null) return null as any;

        const DTO: PlanningDTO = {
            start_validity: planning.start_validity,
            end_validity: planning.end_validity,
        };
        return DTO;
    }
}