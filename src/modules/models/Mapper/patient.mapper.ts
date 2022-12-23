import { PatientDTO } from "../DTO/patient.dto";
import { Patient } from "../patient.model";

export class PatientMapper {
	static MapToDTO(patient: Patient | null): PatientDTO {
		if (patient === null) return null as any;

		const DTO: PatientDTO = {
			secu_number_fr_fr: patient.secu_number_fr_fr,
		};
		return DTO;
	}
}
