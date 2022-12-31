import { LocationDTO } from "../DTO/location.dto";
import { Location } from "../Models/location.model";

export class LocationMapper {
    static MapToDTO(location: Location | null): LocationDTO {
        if (location === null) return null as any;
        const DTO: LocationDTO = {
            address: location.address,
            zip_code: location.zip_code,
            city: location.city
        }
        return DTO;
    }
}