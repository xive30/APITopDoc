import { EmailBannedDTO } from "../models/DTO/emailBanned.dto";
import { EmailBanned } from "../models/emailBanned.model";
import { EmailBannedMapper } from "../models/Mapper/emailBanned.mapper";
import { IRepository } from "../core/respository.interface";

export class EmailBannedRepository implements IRepository<EmailBannedDTO> {
	async findById(id: number): Promise<EmailBannedDTO | null> {
		return EmailBanned.findByPk(id).then((emailBanned) => EmailBannedMapper.MapToDTO(emailBanned));
	}

	async findAll(): Promise<Array<EmailBannedDTO>> {
		return EmailBanned.findAll().then((data: Array<EmailBanned>) => {
			return data.map((emailBanned: EmailBanned) => {
				return EmailBannedMapper.MapToDTO(emailBanned);
			});
		});
	}

	async create(emailBanned: Partial<EmailBannedDTO>): Promise<EmailBannedDTO> {
		return EmailBanned.create(emailBanned).then((data: EmailBanned) => {
			return EmailBannedMapper.MapToDTO(data);
		});
	}

	async update(emailBanned: EmailBanned, id: number): Promise<boolean | number> {
		return EmailBanned.update(emailBanned, { where: { id_email_banned: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return EmailBanned.destroy({ where: { id_email_banned: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
