import { PatientDTO, PatientUserDTO } from "../DTO/patient.dto";
import { Patient } from "../Models/patient.model";
import { User } from "../Models/user.model";

export class PatientMapper {
	static MapToOnlyDTO(patient: Patient | null): PatientDTO {
		if (patient === null ) return null as any;

		const DTO: PatientDTO = {
			id_td_user: patient.id_td_user,
			secu_number_fr_fr: patient.secu_number_fr_fr,
		};
		return DTO;
	}

	static MapToDTO(patient: Patient | null, user: User | null): PatientUserDTO {
		if (patient === null || user === null) return null as any;

		const DTO: PatientUserDTO = {
			id_td_user: patient.id_td_user,
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
			secu_number_fr_fr: patient.secu_number_fr_fr,
			
		};
		return DTO;
	}
}
