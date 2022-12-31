import { ActivityDTO } from "../models/DTO/activity.dto";
import { Activity } from "../models/Models/activity.model";
import { ActivityMapper } from "../models/Mapper/activity.mapper";
import { IRepository } from "../core/respository.interface";
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
	async update(activity: Activity): Promise<ActivityDTO> {
		if (activity.id_activity === null)
			throw new InputError("No id for activity");

		const row = await Activity.findByPk(activity.id_activity);

		if (row === null) throw new NotFoundError("Activity not found");

		const result = await row.save();
		return ActivityMapper.MapToDTO(result);
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
