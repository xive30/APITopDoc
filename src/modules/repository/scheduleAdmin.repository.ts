import { ScheduleAdminDTO } from "../models/DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../models/scheduleAdmin.model";
import { ScheduleAdminMapper } from "../models/Mapper/scheduleAdmin.mapper";
import { IRepository } from "../core/respository.interface";

export class ScheduleAdminRepository implements IRepository<ScheduleAdminDTO> {
	async findById(id: number): Promise<ScheduleAdminDTO | null> {
		return ScheduleAdmin.findByPk(id).then((scheduleAdmin) => ScheduleAdminMapper.MapToDTO(scheduleAdmin));
	}

	async findAll(): Promise<Array<ScheduleAdminDTO>> {
		return ScheduleAdmin.findAll().then((data: Array<ScheduleAdmin>) => {
			return data.map((scheduleAdmin: ScheduleAdmin) => {
				return ScheduleAdminMapper.MapToDTO(scheduleAdmin);
			});
		});
	}

	async create(scheduleAdmin: Partial<ScheduleAdminDTO>): Promise<ScheduleAdminDTO> {
		return ScheduleAdmin.create(scheduleAdmin).then((data: ScheduleAdmin) => {
			return ScheduleAdminMapper.MapToDTO(data);
		});
	}

	async update(scheduleAdmin: ScheduleAdmin, id: number): Promise<boolean | number> {
		return ScheduleAdmin.update(scheduleAdmin, { where: { id_td_user: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return ScheduleAdmin.destroy({ where: { id_td_user: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
