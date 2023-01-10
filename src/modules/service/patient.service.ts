import { IRepository } from "../core/repository.interface";
import { IFullService, IService } from "../core/service.interface";
import { PatientDto, PatientUserDto } from "../Data/Dto/patient.Dto";
import { Patient } from "../Data/Models/patient.model";
import { IPatientRepository } from "../repository/patient.repository";

export interface IPatientService
	extends IService<PatientDto>,
		IFullService<PatientUserDto> {}

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
	async findAllFull(options?: any): Promise<Array<PatientUserDto> | null> {
		return this.patientRepository.findAllFull(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<PatientDto | null> {
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
	async findAll(options?: any): Promise<Array<PatientDto> | null> {
		return this.patientRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(patient: Patient): Promise<PatientDto | null> {
		return this.patientRepository.create(patient).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async createFull(patient: PatientUserDto): Promise<PatientUserDto | null> {
		return this.patientRepository.createFull(patient).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(patient: Patient,id_td_user: number): Promise<boolean | number> {
		return this.patientRepository.update(patient, id_td_user).then((data) => {
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
