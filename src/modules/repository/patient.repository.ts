import { IRepository } from "../core/respository.interface";
import { PatientMapper } from "../models/Mapper/patient.mapper";
import { Patient } from "../models/Models/patient.model";
import { PatientDTO, PatientUserDTO } from "../models/DTO/patient.dto"
import { InputError, NotFoundError } from "../core/errors/errors";
import { User } from "../models/Models/user.model";
import sequelize from "~/sequelize";

export class PatientRepository implements IRepository<PatientDTO> {

	/**
     * 
     * @param id 
     * @returns 
     */
	async findById(id: number): Promise<PatientDTO | null> {
		const result = await Patient.findByPk(id);
        if (result === null) throw new NotFoundError("Patient not found");
        return PatientMapper.MapToOnlyDTO(result);
	}

	/**
     * 
     * @param filter 
     * @returns 
     */
	async findAll(filter: any): Promise<Array<PatientDTO>> {
		return Patient.findAll({
			where: filter
		}).then((data: Array<Patient>) => {
			return data.map((patient: Patient) => {
				return PatientMapper.MapToOnlyDTO(patient);
			});
		});
	}

	/**
     * 
     * @param patient
     */
	async create(patient: Partial<PatientUserDTO>): Promise<PatientUserDTO> {
		const t = await sequelize.transaction();

        try {
            const newUser = await User.create(
                {
                    firstname: patient.firstname,
					lastname: patient.lastname,
					gender: patient.gender,
					birthday: patient.birthday,
					email: patient.email,
					phone: patient.phone,
                },
                {
                    transaction: t
                }
            );

            const newPatient = await Patient.create({
                id_td_user: newUser.id_td_user,
                secu_number_fr_fr: patient.secu_number_fr_fr
            },
                {
                    transaction: t
                }
            );

            const result: PatientUserDTO = {
                id_td_user: newUser.id_td_user,
                firstname: newUser.firstname,
					lastname: newUser.lastname,
					gender: newUser.gender,
					birthday: newUser.birthday,
					email: newUser.email,
					phone: newUser.phone,
                secu_number_fr_fr: newPatient.secu_number_fr_fr
            }

            await t.commit();
            return result;
        } catch (err) {
            await t.rollback()
            throw err;
        }
	}

	/**
     * 
     * @param patient
     */
	async update(patient: Patient): Promise<PatientDTO> {
		if (patient.id_td_user === null) throw new InputError("No id for patient");
    
		const row = await Patient.findByPk(patient.id_td_user);

		if (row === null) throw new NotFoundError("patient not found");

		const result = await row.save()
		return PatientMapper.MapToOnlyDTO(result) ;
	}

	/**
     * 
     * @param id
     */
	async delete(id: number): Promise<boolean | number> {
		return Patient.destroy({ where: { id_td_user: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
