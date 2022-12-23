import { EmailBannedDTO } from "../DTO/emailBanned.dto";
import { EmailBanned } from "../emailBanned.model";


export class EmailBannedMapper {
    static MapToDTO(emailBanned: EmailBanned | null): EmailBannedDTO {
        if (emailBanned === null) return null as any;

        const DTO: EmailBannedDTO = {
            email: emailBanned.email,
            reason: emailBanned.reason,
            banned_date: emailBanned.banned_date,
        }
        return DTO
    }
}