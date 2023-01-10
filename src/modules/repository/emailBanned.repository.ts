import { EmailBannedDto } from "../Data/Dto/emailBanned.Dto";
import { EmailBanned } from "../Data/Models/emailBanned.model";
import { EmailBannedMapper } from "../Data/Mapper/emailBanned.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class EmailBannedRepository implements IRepository<EmailBannedDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<EmailBannedDto | null> {
		const result = await EmailBanned.findByPk(id);
		if (result === null) throw new NotFoundError("Email Banned not found");
		return EmailBannedMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<EmailBannedDto>> {
		return EmailBanned.findAll({
			where: filter,
		}).then((data: Array<EmailBanned>) => {
			return data.map((emailBanned: EmailBanned) => {
				return EmailBannedMapper.MapToDto(emailBanned);
			});
		});
	}

	/**
	 *
	 * @param emailBanned
	 */
	async create(emailBanned: Partial<EmailBannedDto>): Promise<EmailBannedDto> {
		return EmailBanned.create(emailBanned).then((data: EmailBanned) => {
			return EmailBannedMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param emailBanned
	 */
	async update(
		emailBanned: EmailBanned,
		id: number
	): Promise<boolean | number> {
		return EmailBanned.update(emailBanned, {
			where: { id_email_banned: id },
		}).then((data: Array<boolean | number>) => {
			return data[0];
		});
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
