import { LocationDTO } from "../models/DTO/location.dto";
import { IRepository } from "../core/respository.interface";
import { Location } from "../models/Models/location.model";
import { IService } from "../core/service.interface";

export class LocationService implements IService<LocationDTO> {
	private locationRepository: IRepository<LocationDTO>;

	constructor(locationRepository: IRepository<LocationDTO>) {
		this.locationRepository = locationRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<LocationDTO> | null> {
		return this.locationRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_location: number): Promise<LocationDTO | null> {
		return this.locationRepository.findById(id_location).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(location: Location): Promise<LocationDTO | null> {
		return this.locationRepository.create(location).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(location: Location): Promise<LocationDTO | null> {
		return this.locationRepository.update(location).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_location: number): Promise<boolean | number> {
		return this.locationRepository
			.delete(id_location)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
