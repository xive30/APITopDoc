import { IFullRepository, IRepository } from "../core/repository.interface";
import { PatientMapper } from "../Data/Mapper/patient.mapper";
import { Patient } from "../Data/Models/patient.model";
import { PatientDto, PatientUserDto } from "../Data/Dto/patient.Dto";
import { InputError, NotFoundError } from "../core/errors/errors";
import { User } from "../Data/Models/user.model";
import sequelize from "~/Database/sequelize";
import { Location } from "../Data/Models/location.model";

export class PatientRepository implements IFullRepository<PatientUserDto> {
	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<PatientUserDto[]> {
		const patients = await Patient.findAll({
			where: filter,
			include: [{ model: User, include: [Location] }],
		});
		
		try {
			return patients.map((patient) => {
				return PatientMapper.MapToFullPatientDto(patient);
			});
		} catch (error) {
			throw new Error();
		}
	}

	/**
	 *
	 * @param id
	 * @returns
	*/
	async findById(id: number): Promise<PatientUserDto | null> {
		const result = await Patient.findByPk(id);
		if (result === null) throw new NotFoundError("Patient not found");
		return PatientMapper.MapToFullPatientDto(result);
	}

	/**
	 *
	 * @param patient
	*/
	async create(patient: Partial<PatientUserDto>): Promise<PatientUserDto> {
		const t = await sequelize.transaction();

		try {
			const newLocation = await Location.create(
				{
					address: patient.address,
					zip_code: patient.zip_code,
					city: patient.city,
				},
				{
					transaction: t,
				}
				);
				
				const newUser = await User.create(
					{
						firstname: patient.firstname,
						lastname: patient.lastname,
					gender: patient.gender,
					birthday: patient.birthday,
					email: patient.email,
					password: patient.password,
					phone: patient.phone,
					id_location: newLocation.id_location,
				},
				{
					transaction: t,
				}
			);
			
			const newPatient = await Patient.create(
				{
					id_td_user: newUser.id_td_user,
					secu_number_fr_fr: patient.secu_number_fr_fr,
				},
				{
					transaction: t,
				}
				);
				
				const result: PatientUserDto = {
					id_td_user: newUser.id_td_user,
					firstname: newUser.firstname,
					lastname: newUser.lastname,
					gender: newUser.gender,
					birthday: newUser.birthday,
					email: newUser.email,
					phone: newUser.phone,
					address: newLocation.address,
					zip_code: newLocation.zip_code,
					city: newLocation.city,
					secu_number_fr_fr: newPatient.secu_number_fr_fr,
				};
				
				await t.commit();
				return result;
			} catch (err) {
				await t.rollback();
				throw err;
			}
		}

	/**
	 *
	 * @param patient
	 */
	async update(patient: PatientUserDto, id: number): Promise<boolean | number> {
		const userData = {
			firstname: patient.firstname,
			lastname: patient.lastname,
			gender: patient.gender,
			birthday: patient.birthday,
			email: patient.email,
			phone: patient.phone,
		};

		const patientData = {
			secu_number_fr_fr: patient.secu_number_fr_fr,
		};
		try {
			return await sequelize.transaction(async (t) => {
				await User.update(userData, {
					where: { id_td_user: id },
					transaction: t,
				});

				const updatedPatient = await patient.update(patientData, {
					where: { id_td_user: id },
					transaction: t,
				});
				return updatedPatient[0];
			});
		} catch (error) {
			throw error;
		}
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
