import { IRepository } from "../core/respository.interface";
import { ScheduleAdminDTO } from "../models/DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../models/scheduleAdmin.model";

export class ScheduleAdminService {
	private scheduleAdminRepository: IRepository<ScheduleAdminDTO>;

	constructor(scheduleAdminRepository: IRepository<ScheduleAdminDTO>) {
		this.scheduleAdminRepository = scheduleAdminRepository;
	}

	async findAll(): Promise<Array<ScheduleAdminDTO> | null> {
		return this.scheduleAdminRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_td_user: number): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(
		schedludeAdmin: ScheduleAdmin
	): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.create(schedludeAdmin).then((data) => {
			return data;
		});
	}

	async update(
		schedludeAdmin: ScheduleAdmin,
		id_td_user: number
	): Promise<boolean | number> {
		return this.scheduleAdminRepository
			.update(schedludeAdmin, id_td_user)
			.then((data) => {
				return data;
			});
	}

	async delete(id_td_user: number): Promise<boolean | number> {
		return this.scheduleAdminRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
