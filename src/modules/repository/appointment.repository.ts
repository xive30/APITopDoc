import { Appointment } from "../Data/Models/appointment.model";
import { AppointmentDto } from "../Data/Dto/appointment.Dto";
import { AppointmentMapper } from "../Data/Mapper/appointment.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class AppointmentRepository implements IRepository<AppointmentDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<AppointmentDto | null> {
		const result = await Appointment.findByPk(id);
		if (result === null) throw new NotFoundError("Person not found");
		return AppointmentMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<AppointmentDto>> {
		return Appointment.findAll({
			where: filter,
		}).then((data: Array<Appointment>) => {
			return data.map((appointment: Appointment) => {
				return AppointmentMapper.MapToDto(appointment);
			});
		});
	}

	/**
	 *
	 * @param appointment
	 */
	async create(appointment: Partial<AppointmentDto>): Promise<AppointmentDto> {
		return Appointment.create(appointment).then((data: Appointment) => {
			return AppointmentMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param appointment
	 */
	async update(
		appointment: Appointment,
		id: number
	): Promise<boolean | number> {
		return Appointment.update(appointment, {
			where: { id_appointment: id },
		}).then((data: Array<boolean | number>) => {
			return data[0];
		});
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
