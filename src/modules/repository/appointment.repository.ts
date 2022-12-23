import { Appointment } from "../models/appointement.model";
import { AppointmentDTO } from "../models/DTO/appointment";
import { AppointmentMapper } from "../models/Mapper/appointment.mapper";
import { IRepository } from "../core/respository.interface";

export class AppointmentRepository implements IRepository<AppointmentDTO> {
	async findById(id: number): Promise<AppointmentDTO | null> {
		return Appointment.findByPk(id).then((appointment) => AppointmentMapper.MapToDTO(appointment));
	}

	async findAll(): Promise<Array<AppointmentDTO>> {
		return Appointment.findAll().then((data: Array<Appointment>) => {
			return data.map((appointment: Appointment) => {
				return AppointmentMapper.MapToDTO(appointment);
			});
		});
	}

	async create(appointment: Partial<AppointmentDTO>): Promise<AppointmentDTO> {
		return Appointment.create(appointment).then((data: Appointment) => {
			return AppointmentMapper.MapToDTO(data);
		});
	}

	async update(appointment: Appointment, id: number): Promise<boolean | number> {
		return Appointment.update(appointment, { where: { id_appointment: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Appointment.destroy({ where: { id_appointment: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
