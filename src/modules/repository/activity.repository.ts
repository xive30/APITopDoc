import { ActivityDTO } from "../models/DTO/activity.dto";
import { Activity } from "../models/activity.model";
import { ActivityMapper } from "../models/Mapper/activity.mapper";
import { IRepository } from "../core/respository.interface";

export class ActivityRepository implements IRepository<ActivityDTO> {
	async findById(id: number): Promise<ActivityDTO | null> {
		return Activity.findByPk(id).then((activity) => ActivityMapper.MapToDTO(activity));
	}

	async findAll(): Promise<Array<ActivityDTO>> {
		return Activity.findAll().then((data: Array<Activity>) => {
			return data.map((activity: Activity) => {
				return ActivityMapper.MapToDTO(activity);
			});
		});
	}

	async create(activity: Partial<ActivityDTO>): Promise<ActivityDTO> {
		return Activity.create(activity).then((data: Activity) => {
			return ActivityMapper.MapToDTO(data);
		});
	}

	async update(activity: Activity, id: number): Promise<boolean | number> {
		return Activity.update(activity, { where: { id_activity: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Activity.destroy({ where: { id_activity: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
