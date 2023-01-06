import { Activity } from "../Models/activity.model";
import { ActivityDTO, ActivityLocationDTO } from "../DTO/activity.dto";

export class ActivityMapper {
	static MapToActivityLocationDTO(activity: Activity | null): ActivityLocationDTO {
		if (activity === null) return null as any;

		const DTO: ActivityLocationDTO = {
			id_activity: activity.id_activity,
			activity_type: activity.activity_type,
			description: activity.description,
			activity_validation: activity.activity_validation,
			id_location: activity.id_location,
			address: activity.get({plain: true}).td_location.address,
			zip_code: activity.get({plain: true}).td_location.zip_code,
			city: activity.get({plain: true}).td_location.city,
		};
		return DTO;
	}
	
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
