import { IRepository } from "../core/respository.interface";
import { PatientMapper } from "../models/Mapper/patient.mapper";
import { Patient } from "../models/patient.model";
import { PatientDTO } from "../models/DTO/patient.dto"

export class PatientRepository implements IRepository<PatientDTO> {
	async findById(id: number): Promise<PatientDTO | null> {
		return Patient.findByPk(id).then((patient) => PatientMapper.MapToDTO(patient));
	}

	async findAll(): Promise<Array<PatientDTO>> {
		return Patient.findAll().then((data: Array<Patient>) => {
			return data.map((patient: Patient) => {
				return PatientMapper.MapToDTO(patient);
			});
		});
	}

	async create(patient: Partial<PatientDTO>): Promise<PatientDTO> {
		return Patient.create(patient).then((data: Patient) => {
			return PatientMapper.MapToDTO(data);
		});
	}

	async update(patient: Patient, id: number): Promise<boolean | number> {
		return Patient.update(patient, { where: { id_td_user: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Patient.destroy({ where: { id_td_user: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
