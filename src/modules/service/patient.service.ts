import { IRepository } from "../core/repository.interface";
import { IFullService, IService } from "../core/service.interface";
import { PatientDTO, PatientUserDTO } from "../Data/DTO/patient.dto";
import { Patient } from "../Data/Models/patient.model";
import { IPatientRepository } from "../repository/patient.repository";

export interface IPatientService
	extends IService<PatientDTO>,
		IFullService<PatientUserDTO> {}

export class PatientService implements IPatientService {
	private patientRepository: IPatientRepository;

	constructor(patientRepository: IPatientRepository) {
		this.patientRepository = patientRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAllFull(options?: any): Promise<Array<PatientUserDTO> | null> {
		return this.patientRepository.findAllFull(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<PatientDTO | null> {
		return this.patientRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<PatientDTO> | null> {
		return this.patientRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(patient: Patient): Promise<PatientDTO | null> {
		return this.patientRepository.create(patient).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(patient: Patient): Promise<PatientDTO | null> {
		return this.patientRepository.update(patient).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_td_user: number): Promise<boolean | number> {
		return this.patientRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
