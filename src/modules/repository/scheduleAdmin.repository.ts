import {
	ScheduleAdminDto,
	ScheduleAdminUserDto,
} from "../Data/Dto/scheduleAdmin.Dto";
import { ScheduleAdmin } from "../Data/Models/scheduleAdmin.model";
import { ScheduleAdminMapper } from "../Data/Mapper/scheduleAdmin.mapper";
import { IFullRepository, IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";
import { User } from "../Data/Models/user.model";
import sequelize from "~/Database/sequelize";

export interface ISAdminRepository
	extends IRepository<ScheduleAdminDto>,
		IFullRepository<ScheduleAdminUserDto> {}

export class ScheduleAdminRepository implements ISAdminRepository {
	createFull(t: ScheduleAdminUserDto): Promise<ScheduleAdminUserDto | null> {
		throw new Error("Method not implemented.");
	}
	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAllFull(filter: any): Promise<ScheduleAdminUserDto[]> {
		const scheduleAdmins = await ScheduleAdmin.findAll({
			where: filter,
			include: User,
		});
		try {
			return scheduleAdmins.map((ScheduleAdmin) => {
				return ScheduleAdminMapper.MapToFullSAdminDto(ScheduleAdmin);
			});
		} catch (error) {
			throw new Error();
		}
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<ScheduleAdminDto | null> {
		const result = await ScheduleAdmin.findByPk(id);
		if (result === null) throw new NotFoundError("ScheduleAdmin not found");
		return ScheduleAdminMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<ScheduleAdminDto>> {
		return ScheduleAdmin.findAll({
			where: filter,
		}).then((data: Array<ScheduleAdmin>) => {
			return data.map((scheduleAdmin: ScheduleAdmin) => {
				return ScheduleAdminMapper.MapToDto(scheduleAdmin);
			});
		});
	}

	/**
	 *
	 * @param scheduleAdmin
	 */
	async create(
		scheduleAdmin: Partial<ScheduleAdminUserDto>
	): Promise<ScheduleAdminUserDto> {
		const t = await sequelize.transaction();

		try {
			const newUser = await User.create(
				{
					firstname: scheduleAdmin.firstname,
					lastname: scheduleAdmin.lastname,
					gender: scheduleAdmin.gender,
					birthday: scheduleAdmin.birthday,
					email: scheduleAdmin.email,
					phone: scheduleAdmin.phone,
				},
				{
					transaction: t,
				}
			);

			const newscheduleAdmin = await ScheduleAdmin.create(
				{
					id_td_user: newUser.id_td_user,
					practitioner: scheduleAdmin.practitioner,
				},
				{
					transaction: t,
				}
			);

			const result: ScheduleAdminUserDto = {
				id_td_user: newUser.id_td_user,
				firstname: newUser.firstname,
				lastname: newUser.lastname,
				gender: newUser.gender,
				birthday: newUser.birthday,
				email: newUser.email,
				phone: newUser.phone,
				practitioner: newscheduleAdmin.practitioner,
			};

			await t.commit();
			return result;
		} catch (err) {
			await t.rollback();
			throw err;
		}
	}

	/**
	 *
	 * @param scheduleAdmin
	 */
	async update(
		scheduleAdmin: ScheduleAdminUserDto,
		id: number
	): Promise<boolean | number> {
		const userData = {
			firstname: scheduleAdmin.firstname,
			lastname: scheduleAdmin.lastname,
			gender: scheduleAdmin.gender,
			birthday: scheduleAdmin.birthday,
			email: scheduleAdmin.email,
			phone: scheduleAdmin.phone,
		};

		const scheduleAdminData = {
			practitioner: scheduleAdmin.practitioner,
		};
		try {
			return await sequelize.transaction(async (t) => {
				await User.update(userData, {
					where: { id_td_user: id },
					transaction: t,
				});

				const updatedDoctor = await ScheduleAdmin.update(scheduleAdminData, {
					where: { id_td_user: id },
					transaction: t,
				});
				return updatedDoctor[0];
			});
		} catch (error) {
			throw error;
		}
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return ScheduleAdmin.destroy({ where: { id_td_user: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
