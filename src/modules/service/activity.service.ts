import { IRepository } from "../core/respository.interface";
import { Activity } from "../models/activity.model";
import { ActivityDTO } from "../models/DTO/activity.dto";

export class ActivityService {
	private activityRepository: IRepository<ActivityDTO>;

	constructor(activityRepository: IRepository<ActivityDTO>) {
		this.activityRepository = activityRepository;
	}

	async findAll(): Promise<Array<ActivityDTO> | null> {
		return this.activityRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_activity: number): Promise<ActivityDTO | null> {
		return this.activityRepository.findById(id_activity).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(
		activity: Activity
	): Promise<ActivityDTO | null> {
		return this.activityRepository.create(activity).then((data) => {
			return data;
		});
	}

	async update(
		activity: Activity,
		id_activity: number
	): Promise<boolean | number> {
		return this.activityRepository
			.update(activity, id_activity)
			.then((data) => {
				return data;
			});
	}

	async delete(id_activity: number): Promise<boolean | number> {
		return this.activityRepository
			.delete(id_activity)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
