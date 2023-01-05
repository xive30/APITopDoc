import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { LocationDTO } from "../Data/DTO/location.dto";
import { Location } from "../Data/Models/location.model";
import { LocationMapper } from "../Data/Mapper/location.mapper";

export class LocationRepository implements IRepository<LocationDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<LocationDTO | null> {
		const result = await Location.findByPk(id);
		if (result === null) throw new NotFoundError("Location not found");
		return LocationMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<LocationDTO>> {
		return Location.findAll({
			where: filter,
		}).then((data: Array<Location>) => {
			return data.map((location: Location) => {
				return LocationMapper.MapToDTO(location);
			});
		});
	}

	/**
	 *
	 * @param location
	 */
	async create(location: Partial<LocationDTO>): Promise<LocationDTO> {
		return Location.create(location).then((data: Location) => {
			return LocationMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param location
	 */
	async update(location: Location, id: number ): Promise<boolean | number> {
		return Location.update(location, { where: { id_location: id } }).then(
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
		return Location.destroy({ where: { id_location: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
