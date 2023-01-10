import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { EmailBannedDto } from "../Data/Dto/emailBanned.Dto";
import { EmailBanned } from "../Data/Models/emailBanned.model";

export class EmailBannedService implements IService<EmailBannedDto> {
	private emailBannedRepository: IRepository<EmailBannedDto>;

	constructor(emailBannedRepository: IRepository<EmailBannedDto>) {
		this.emailBannedRepository = emailBannedRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<EmailBannedDto> | null> {
		return this.emailBannedRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_email_banned: number): Promise<EmailBannedDto | null> {
		return this.emailBannedRepository.findById(id_email_banned).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(emailBanned: EmailBanned): Promise<EmailBannedDto | null> {
		return this.emailBannedRepository.create(emailBanned).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		emailBanned: EmailBanned,
		id_emailBanned: number
	): Promise<boolean | number> {
		return this.emailBannedRepository
			.update(emailBanned, id_emailBanned)
			.then((data) => {
				return data;
			});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_email_banned: number): Promise<boolean | number> {
		return this.emailBannedRepository
			.delete(id_email_banned)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
