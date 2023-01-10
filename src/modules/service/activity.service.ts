import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { Activity } from "../Data/Models/activity.model";
import { ActivityDto } from "../Data/Dto/activity.Dto";

export class ActivityService implements IService<ActivityDto> {
	private activityRepository: IRepository<ActivityDto>;

	constructor(activityRepository: IRepository<ActivityDto>) {
		this.activityRepository = activityRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<ActivityDto> | null> {
		return this.activityRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_activity: number): Promise<ActivityDto | null> {
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
	async create(activity: Activity): Promise<ActivityDto | null> {
		return this.activityRepository.create(activity).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
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
