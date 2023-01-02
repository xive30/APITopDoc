import { EmailBannedDTO } from "../Data/DTO/emailBanned.dto";
import { EmailBanned } from "../Data/Models/emailBanned.model";
import { EmailBannedMapper } from "../Data/Mapper/emailBanned.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class EmailBannedRepository implements IRepository<EmailBannedDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<EmailBannedDTO | null> {
		const result = await EmailBanned.findByPk(id);
		if (result === null) throw new NotFoundError("Email Banned not found");
		return EmailBannedMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<EmailBannedDTO>> {
		return EmailBanned.findAll({
			where: filter,
		}).then((data: Array<EmailBanned>) => {
			return data.map((emailBanned: EmailBanned) => {
				return EmailBannedMapper.MapToDTO(emailBanned);
			});
		});
	}

	/**
	 *
	 * @param emailBanned
	 */
	async create(emailBanned: Partial<EmailBannedDTO>): Promise<EmailBannedDTO> {
		return EmailBanned.create(emailBanned).then((data: EmailBanned) => {
			return EmailBannedMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param emailBanned
	 */
	async update(emailBanned: EmailBanned): Promise<EmailBannedDTO> {
		if (emailBanned.id_email_banned === null)
			throw new InputError("No id for emailBanned");

		const row = await EmailBanned.findByPk(emailBanned.id_email_banned);

		if (row === null) throw new NotFoundError("emailBanned not found");

		const result = await row.save();
		return EmailBannedMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return EmailBanned.destroy({ where: { id_email_banned: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
