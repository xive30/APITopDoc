import { ActivityDTO } from "../Data/DTO/activity.dto";
import { Activity } from "../Data/Models/activity.model";
import { ActivityMapper } from "../Data/Mapper/activity.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class ActivityRepository implements IRepository<ActivityDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<ActivityDTO | null> {
		const result = await Activity.findByPk(id);
		if (result === null) throw new NotFoundError("Activity not found");
		return ActivityMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<ActivityDTO>> {
		return Activity.findAll({
			where: filter,
		}).then((data: Array<Activity>) => {
			return data.map((activity: Activity) => {
				return ActivityMapper.MapToDTO(activity);
			});
		});
	}

	/**
	 *
	 * @param activity
	 */
	async create(activity: Partial<ActivityDTO>): Promise<ActivityDTO> {
		return Activity.create(activity).then((data: Activity) => {
			return ActivityMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param activity
	 */
	async update(activity: Activity, id: number ): Promise<boolean | number> {
		return Activity.update(activity, { where: { id_activity: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Activity.destroy({ where: { id_activity: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
