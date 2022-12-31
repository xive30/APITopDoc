import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { Activity } from "../models/Models/activity.model";
import { ActivityDTO } from "../models/DTO/activity.dto";

export class ActivityService implements IService<ActivityDTO> {
	private activityRepository: IRepository<ActivityDTO>;

	constructor(activityRepository: IRepository<ActivityDTO>) {
		this.activityRepository = activityRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<ActivityDTO> | null> {
		return this.activityRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_activity: number): Promise<ActivityDTO | null> {
		return this.activityRepository.findById(id_activity).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(activity: Activity): Promise<ActivityDTO | null> {
		return this.activityRepository.create(activity).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(activity: Activity): Promise<ActivityDTO | null> {
		return this.activityRepository.update(activity).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_activity: number): Promise<boolean | number> {
		return this.activityRepository
			.delete(id_activity)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
