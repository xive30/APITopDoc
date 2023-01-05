import { IRepository } from "../core/repository.interface";
import { IFullService, IService } from "../core/service.interface";
import {
	ScheduleAdminDTO,
	ScheduleAdminUserDTO,
} from "../Data/DTO/scheduleAdmin.dto";
import { ScheduleAdmin } from "../Data/Models/scheduleAdmin.model";
import { ISAdminRepository } from "../repository/scheduleAdmin.repository";

export interface ISAdminService
	extends IService<ScheduleAdminDTO>,
		IFullService<ScheduleAdminUserDTO> {}

export class ScheduleAdminService implements ISAdminService {
	private scheduleAdminRepository: ISAdminRepository;

	constructor(scheduleAdminRepository: ISAdminRepository) {
		this.scheduleAdminRepository = scheduleAdminRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAllFull(
		options?: any
	): Promise<Array<ScheduleAdminUserDTO> | null> {
		return this.scheduleAdminRepository.findAllFull(options).then((data) => {
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
	 * @param t
	 * @returns
	 */
	async create(
		scheduleAdmin: ScheduleAdmin
	): Promise<ScheduleAdminDTO | null> {
		return this.scheduleAdminRepository.create(scheduleAdmin).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(scheduleAdmin: ScheduleAdmin,id_td_user: number): Promise<boolean | number> {
		return this.scheduleAdminRepository.update(scheduleAdmin, id_td_user).then((data) => {
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
