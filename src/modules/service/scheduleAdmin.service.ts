import { IFullRepository } from "../core/repository.interface";
import { IFullService } from "../core/service.interface";
import { ScheduleAdminUserDto } from "../Data/Dto/scheduleAdmin.Dto";

export class ScheduleAdminService
	implements IFullService<ScheduleAdminUserDto>
{
	private scheduleAdminRepository: IFullRepository<ScheduleAdminUserDto>;

	constructor(scheduleAdminRepository: IFullRepository<ScheduleAdminUserDto>) {
		this.scheduleAdminRepository = scheduleAdminRepository;
	}
	findAllFull(): Promise<ScheduleAdminUserDto[] | null> {
		throw new Error("Method not implemented.");
	}
	createFull(t: ScheduleAdminUserDto): Promise<ScheduleAdminUserDto | null> {
		throw new Error("Method not implemented.");
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<ScheduleAdminUserDto> | null> {
		return this.scheduleAdminRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<ScheduleAdminUserDto | null> {
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
		scheduleAdmin: ScheduleAdminUserDto
	): Promise<ScheduleAdminUserDto | null> {
		return this.scheduleAdminRepository.create(scheduleAdmin).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		scheduleAdmin: ScheduleAdminUserDto,
		id_td_user: number
	): Promise<boolean | number> {
		return this.scheduleAdminRepository
			.update(scheduleAdmin, id_td_user)
			.then((data) => {
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
