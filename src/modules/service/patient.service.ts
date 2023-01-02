import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { PatientDTO, PatientUserDTO } from "../Data/DTO/patient.dto";
import { Patient } from "../Data/Models/patient.model";

export class PatientService implements IService<PatientDTO> {
	private patientRepository: IRepository<PatientDTO>;

	constructor(patientRepository: IRepository<PatientDTO>) {
		this.patientRepository = patientRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<PatientUserDTO> | null> {
		return this.patientRepository.findAll(options).then((data) => {
			return null;
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
