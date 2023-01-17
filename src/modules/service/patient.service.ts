import { IFullRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { PatientUserDto } from "../Data/Dto/patient.Dto";
import { Patient } from "../Data/Models/patient.model";

export class PatientService implements IService<PatientUserDto> {
	private patientRepository: IFullRepository<PatientUserDto>;

	constructor(patientRepository: IFullRepository<PatientUserDto>) {
		this.patientRepository = patientRepository;
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<PatientUserDto | null> {
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
	async findAll(options?: any): Promise<Array<PatientUserDto> | null> {
		return this.patientRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(patient: PatientUserDto): Promise<PatientUserDto | null> {
		return this.patientRepository.create(patient).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(patient: PatientUserDto,id_td_user: number): Promise<boolean | number> {
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
