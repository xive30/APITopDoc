export interface ActivityLocationDTO {
    id_activity?: number;

    activity_type: string;

    description: string;

    activity_validation?: boolean;

	id_location: number;

	address: string;

	zip_code: string;

	city: string;
}

export interface ActivityDTO {
    id_activity?: number;

    activity_type: string;

    description: string;

    activity_validation?: boolean;
}