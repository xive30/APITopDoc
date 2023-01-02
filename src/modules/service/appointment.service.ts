import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { Appointment } from "../Data/Models/appointement.model";
import { AppointmentDTO } from "../Data/DTO/appointment.dto";

export class AppointmentService implements IService<AppointmentDTO> {
	private appointmentRepository: IRepository<AppointmentDTO>;

	constructor(appointmentRepository: IRepository<AppointmentDTO>) {
		this.appointmentRepository = appointmentRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<AppointmentDTO> | null> {
		return this.appointmentRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<AppointmentDTO | null> {
		return this.appointmentRepository.findById(id).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(appointment: Appointment): Promise<AppointmentDTO | null> {
		return this.appointmentRepository.create(appointment).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(appointment: Appointment): Promise<AppointmentDTO | null> {
		return this.appointmentRepository.update(appointment).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return this.appointmentRepository
			.delete(id)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
