import { Activity } from "../Models/activity.model";
import { ActivityDTO } from "../DTO/activity.dto";

export class ActivityMapper {
	static MapToDTO(activity: Activity | null): ActivityDTO {
		if (activity === null) return null as any;

		const DTO: ActivityDTO = {
			id_activity: activity.id_activity,
			activity_type: activity.activity_type,
			description: activity.description,
			activity_validation: activity.activity_validation,
		};
		return DTO;
	}
}
