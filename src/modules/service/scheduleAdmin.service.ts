import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { ScheduleAdminDTO } from "../Data/DTO/schedludeAdmin.dto";
import { ScheduleAdmin } from "../Data/Models/scheduleAdmin.model";

export class ScheduleAdminService implements IService<ScheduleAdminDTO> {
	private scheduleAdminRepository: IRepository<ScheduleAdminDTO>;

	constructor(scheduleAdminRepository: IRepository<ScheduleAdminDTO>) {
		this.scheduleAdminRepository = scheduleAdminRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<ScheduleAdminDTO> | null> {
		return this.scheduleAdminRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(
		schedludeAdmin: ScheduleAdmin
	): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.create(schedludeAdmin).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		schedludeAdmin: ScheduleAdmin
	): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.update(schedludeAdmin).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_td_user: number): Promise<boolean | number> {
		return this.scheduleAdminRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
