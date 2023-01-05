import { Appointment } from "../Data/Models/appointment.model";
import { AppointmentDTO } from "../Data/DTO/appointment.dto";
import { AppointmentMapper } from "../Data/Mapper/appointment.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class AppointmentRepository implements IRepository<AppointmentDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<AppointmentDTO | null> {
		const result = await Appointment.findByPk(id);
		if (result === null) throw new NotFoundError("Person not found");
		return AppointmentMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<AppointmentDTO>> {
		return Appointment.findAll({
			where: filter,
		}).then((data: Array<Appointment>) => {
			return data.map((appointment: Appointment) => {
				return AppointmentMapper.MapToDTO(appointment);
			});
		});
	}

	/**
	 *
	 * @param appointment
	 */
	async create(appointment: Partial<AppointmentDTO>): Promise<AppointmentDTO> {
		return Appointment.create(appointment).then((data: Appointment) => {
			return AppointmentMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param appointment
	 */
	async update(appointment: Appointment, id: number ): Promise<boolean | number> {
		return Appointment.update(appointment, { where: { id_appointment: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Appointment.destroy({ where: { id_appointment: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
