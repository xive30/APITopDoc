import { EmailBannedDto } from "../Dto/emailBanned.Dto";
import { EmailBanned } from "../Models/emailBanned.model";

export class EmailBannedMapper {
	static MapToDto(emailBanned: EmailBanned | null): EmailBannedDto {
		if (emailBanned === null) return null as any;

		const Dto: EmailBannedDto = {
			email: emailBanned.email,
			reason: emailBanned.reason,
			banned_date: emailBanned.banned_date,
		};
		return Dto;
	}
}
