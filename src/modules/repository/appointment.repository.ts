import { Appointment } from "../models/Models/appointement.model";
import { AppointmentDTO } from "../models/DTO/appointment";
import { AppointmentMapper } from "../models/Mapper/appointment.mapper";
import { IRepository } from "../core/respository.interface";
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
			where: filter
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
	async update(appointment: Appointment): Promise<AppointmentDTO> {
		if (appointment.id_td_user === null && appointment.id_activity === null && appointment.date_appointment === null) throw new InputError("No id for appointment");
    
		const row = await Appointment.findByPk();

		if (row === null) throw new NotFoundError("appointment not found");

		const result = await row.save()
		return AppointmentMapper.MapToDTO(result) ;
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
