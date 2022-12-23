import { IRepository } from "../core/respository.interface";
import { PatientDTO } from "../models/DTO/patient.dto";
import { Patient } from "../models/patient.model";

export class PatientService {
	private patientRepository: IRepository<PatientDTO>;

	constructor(patientRepository: IRepository<PatientDTO>) {
		this.patientRepository = patientRepository;
	}

	async findAll(): Promise<Array<PatientDTO> | null> {
		return this.patientRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_td_user: number): Promise<PatientDTO | null> {
		return this.patientRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(
		patient: Patient
	): Promise<PatientDTO | null> {
		return this.patientRepository.create(patient).then((data) => {
			return data;
		});
	}

	async update(
		patient: Patient,
		id_td_user: number
	): Promise<boolean | number> {
		return this.patientRepository
			.update(patient, id_td_user)
			.then((data) => {
				return data;
			});
	}

	async delete(id_td_user: number): Promise<boolean | number> {
		return this.patientRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
