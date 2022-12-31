import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { EmailBannedDTO } from "../models/DTO/emailBanned.dto";
import { EmailBanned } from "../models/Models/emailBanned.model";

export class EmailBannedService implements IService<EmailBannedDTO> {
	private emailBannedRepository: IRepository<EmailBannedDTO>;

	constructor(emailBannedRepository: IRepository<EmailBannedDTO>) {
		this.emailBannedRepository = emailBannedRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<EmailBannedDTO> | null> {
		return this.emailBannedRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_email_banned: number): Promise<EmailBannedDTO | null> {
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
	async create(emailBanned: EmailBanned): Promise<EmailBannedDTO | null> {
		return this.emailBannedRepository.create(emailBanned).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(emailBanned: EmailBanned): Promise<EmailBannedDTO | null> {
		return this.emailBannedRepository.update(emailBanned).then((data) => {
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
