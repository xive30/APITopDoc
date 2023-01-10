import { ActivityDto, ActivityLocationDto } from "../Data/Dto/activity.Dto";
import { Activity } from "../Data/Models/activity.model";
import { ActivityMapper } from "../Data/Mapper/activity.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";
import { Location } from "../Data/Models/location.model";
import sequelize from "~/Database/sequelize";

export class ActivityRepository implements IRepository<ActivityDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<ActivityDto | null> {
		const result = await Activity.findByPk(id);
		if (result === null) throw new NotFoundError("Activity not found");
		return ActivityMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<ActivityDto>> {
		const activities = await Activity.findAll({
			where: filter,
			include: Location,
		});
		return activities.map((activity: Activity) => {
			return ActivityMapper.MapToActivityLocationDto(activity);
		});
	}

	/**
	 *
	 * @param activity
	 */
	async create(activity: Partial<ActivityLocationDto>): Promise<ActivityLocationDto> {
		const t = await sequelize.transaction();

		try {
			const newLocation = await Location.create(
				{
					address: activity.address,
					zip_code: activity.zip_code,
					city: activity.city,
				},
				{
					transaction: t,
				}
			);
				
			const NewActivity = await Activity.create(
				{
					activity_type: activity.activity_type,
					description:activity.description,
					id_location: newLocation.id_location,
				},
				{
					transaction: t,
				}
			);

			const result: ActivityLocationDto = {
				address: newLocation.address,
				zip_code: newLocation.zip_code,
				city: newLocation.city,
				activity_type: NewActivity.activity_type,
				description: NewActivity.description,
				id_location: newLocation.id_location,
			};
			console.log(result);
			
			await t.commit();
			return result;
		} catch (err) {
			await t.rollback();
			throw err;
		}
	}

	/**
	 *
	 * @param activity
	 */
	async update(activity: Activity, id: number): Promise<boolean | number> {
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
