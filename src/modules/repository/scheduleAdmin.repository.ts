import { ScheduleAdminDTO, ScheduleAdminUserDTO } from "../models/DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../models/Models/scheduleAdmin.model";
import { ScheduleAdminMapper } from "../models/Mapper/scheduleAdmin.mapper";
import { IRepository } from "../core/respository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";
import { User } from "../models/Models/user.model";
import sequelize from "~/sequelize";

export class ScheduleAdminRepository implements IRepository<ScheduleAdminDTO> {

	/**
     * 
     * @param id
	 * @returns
     */
	async findById(id: number): Promise<ScheduleAdminDTO | null> {
		const result = await ScheduleAdmin.findByPk(id);
        if (result === null) throw new NotFoundError("ScheduleAdmin not found");
        return ScheduleAdminMapper.MapToOnlyDTO(result);
	}

	/**
     * 
     * @param filter 
     * @returns 
     */
	async findAll(filter: any): Promise<Array<ScheduleAdminDTO>> {
		return ScheduleAdmin.findAll({
			where: filter
		}).then((data: Array<ScheduleAdmin>) => {
			return data.map((scheduleAdmin: ScheduleAdmin) => {
				return ScheduleAdminMapper.MapToOnlyDTO(scheduleAdmin);
			});
		});
	}

	/**
     * 
     * @param scheduleAdmin
     */
	async create(scheduleAdmin: Partial<ScheduleAdminUserDTO>): Promise<ScheduleAdminUserDTO> {
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
                    transaction: t
                }
            );

            const newscheduleAdmin = await ScheduleAdmin.create({
                id_td_user: newUser.id_td_user,
                practitioner: scheduleAdmin.practitioner
            },
                {
                    transaction: t
                }
            );

            const result: ScheduleAdminUserDTO = {
                id_td_user: newUser.id_td_user,
                firstname: newUser.firstname,
					lastname: newUser.lastname,
					gender: newUser.gender,
					birthday: newUser.birthday,
					email: newUser.email,
					phone: newUser.phone,
                practitioner: newscheduleAdmin.practitioner
            }

            await t.commit();
            return result;
        } catch (err) {
            await t.rollback()
            throw err;
        }
	}

	/**
     * 
     * @param scheduleAdmin
     */
	async update(scheduleAdmin: ScheduleAdmin): Promise<ScheduleAdminDTO> {
		if (scheduleAdmin.id_td_user === null) throw new InputError("No id for scheduleAdmin");
    
		const row = await ScheduleAdmin.findByPk(scheduleAdmin.id_td_user);

		if (row === null) throw new NotFoundError("scheduleAdmin not found");

		const result = await row.save()
		return ScheduleAdminMapper.MapToOnlyDTO(result) ;
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
