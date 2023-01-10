import { Activity } from "../Models/activity.model";
import { ActivityDto, ActivityLocationDto } from "../Dto/activity.Dto";

export class ActivityMapper {
	static MapToActivityLocationDto(
		activity: Activity | null
	): ActivityLocationDto {
		if (activity === null) return null as any;

		const Dto: ActivityLocationDto = {
			id_activity: activity.id_activity,
			activity_type: activity.activity_type,
			description: activity.description,
			activity_validation: activity.activity_validation,
			id_location: activity.id_location,
			address: activity.get({ plain: true }).td_location.address,
			zip_code: activity.get({ plain: true }).td_location.zip_code,
			city: activity.get({ plain: true }).td_location.city,
		};
		return Dto;
	}

	static MapToDto(activity: Activity | null): ActivityDto {
		if (activity === null) return null as any;

		const Dto: ActivityDto = {
			id_activity: activity.id_activity,
			activity_type: activity.activity_type,
			description: activity.description,
			activity_validation: activity.activity_validation,
		};
		return Dto;
	}
}
