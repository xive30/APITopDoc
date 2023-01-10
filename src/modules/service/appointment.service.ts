import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { Appointment } from "../Data/Models/appointment.model";
import { AppointmentDto } from "../Data/Dto/appointment.Dto";

export class AppointmentService implements IService<AppointmentDto> {
	private appointmentRepository: IRepository<AppointmentDto>;

	constructor(appointmentRepository: IRepository<AppointmentDto>) {
		this.appointmentRepository = appointmentRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<AppointmentDto> | null> {
		return this.appointmentRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<AppointmentDto | null> {
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
	async create(appointment: Appointment): Promise<AppointmentDto | null> {
		return this.appointmentRepository.create(appointment).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(
		appointment: Appointment,
		id_appointment: number
	): Promise<boolean | number> {
		return this.appointmentRepository
			.update(appointment, id_appointment)
			.then((data) => {
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
