import { PatientDTO, PatientUserDTO } from "../DTO/patient.dto";
import { Patient } from "../Models/patient.model";

export class PatientMapper {
	static MapToDTO(patient: Patient | null): PatientDTO {
		if (patient === null) return null as any;

		const DTO: PatientDTO = {
			id_td_user: patient.id_td_user,
			secu_number_fr_fr: patient.secu_number_fr_fr,
		};
		return DTO;
	}

	static MapToFullPatientDTO(patient: Patient | null): PatientUserDTO {
		if (patient === null) return null as any;
		let DTO: PatientUserDTO;
		try {
			DTO = {
				id_td_user: patient.get("id_td_user"),
				firstname: patient.get({ plain: true }).td_user.firstname,
				lastname: patient.get({ plain: true }).td_user.lastname,
				gender: patient.get({ plain: true }).td_user.gender,
				birthday: patient.get({ plain: true }).td_user.birthday,
				email: patient.get({ plain: true }).td_user.email,
				phone: patient.get({ plain: true }).td_user.phone,
				address: patient.get({ plain: true }).td_user.td_location.address,
				zip_code: patient.get({ plain: true }).td_user.td_location.zip_code,
				city: patient.get({ plain: true }).td_user.td_location.city,
				secu_number_fr_fr: patient.secu_number_fr_fr,
			};
		} catch (error) {
			console.log(error);
			throw new Error();
		}
		return DTO;
	}
}
