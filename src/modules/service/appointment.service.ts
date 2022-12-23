import { IRepository } from "../core/respository.interface";
import { Appointment } from "../models/appointement.model";
import { AppointmentDTO } from "../models/DTO/appointment";

export class AppointmentService {
	private appointmentRepository: IRepository<AppointmentDTO>;

	constructor(appointmentRepository: IRepository<AppointmentDTO>) {
		this.appointmentRepository = appointmentRepository;
	}

	async findAll(): Promise<Array<AppointmentDTO> | null> {
		return this.appointmentRepository.findAll().then((data) => {
			return data;
		});
	}
  /// EN TRavaux




	// async findById(id: number): Promise<AppointmentDTO | null> {
	// 	return this.appointmentRepository.findById(id).then((data) => {
	// 		console.log(data);
	// 		return data;
	// 	});
	// }

	// async create(
	// 	appointment: Appointment
	// ): Promise<AppointmentDTO | null> {
	// 	return this.appointmentRepository.create(appointment).then((data) => {
	// 		return data;
	// 	});
	// }

	// async update(
	// 	appointment: Appointment,
	// 	id: number
	// ): Promise<boolean | number> {
	// 	return this.appointmentRepository
	// 		.update(appointment, id)
	// 		.then((data) => {
	// 			return data;
	// 		});
	// }

	// async delete(id: number): Promise<boolean | number> {
	// 	return this.appointmentRepository
	// 		.delete(id)
	// 		.then((data: boolean | number) => {
	// 			return data;
	// 		});
	// }
}
