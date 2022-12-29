import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { EmailBannedDTO } from "../models/DTO/emailBanned.dto";
import { EmailBanned } from "../models/emailBanned.model";

export class EmailBannedService implements IService<EmailBannedDTO> {
	private emailBannedRepository: IRepository<EmailBannedDTO>;

	constructor(emailBannedRepository: IRepository<EmailBannedDTO>) {
		this.emailBannedRepository = emailBannedRepository;
	}

	async findAll(): Promise<Array<EmailBannedDTO> | null> {
		return this.emailBannedRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_email_banned: number): Promise<EmailBannedDTO | null> {
		return this.emailBannedRepository.findById(id_email_banned).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(emailBanned: EmailBanned): Promise<EmailBannedDTO | null> {
		return this.emailBannedRepository.create(emailBanned).then((data) => {
			return data;
		});
	}

	async update(
		emailBanned: EmailBanned,
		id_email_banned: number
	): Promise<boolean | number> {
		return this.emailBannedRepository
			.update(emailBanned, id_email_banned)
			.then((data) => {
				return data;
			});
	}

	async delete(id_email_banned: number): Promise<boolean | number> {
		return this.emailBannedRepository
			.delete(id_email_banned)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
