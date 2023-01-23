import sequelize from "~/Database/sequelize";
import { InputError, NotFoundError } from "../core/errors/errors";
import { IFullRepository } from "../core/repository.interface";
import { PlanningTimetableDto } from "../Data/Dto/planning.Dto";
import { PlanningMapper } from "../Data/Mapper/planning.mapper";
import { Activity } from "../Data/Models/activity.model";
import { Appointment } from "../Data/Models/appointment.model";
import { Holiday } from "../Data/Models/holiday.model";
import { Planning } from "../Data/Models/planning.model";
import { Timetable } from "../Data/Models/timetable.model";

export class PlanningTimetableRepository implements IFullRepository<PlanningTimetableDto> {

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<PlanningTimetableDto>> {
		const plannings = await Planning.findAll({
			where: filter,
			include: Timetable,
			nest: true,
		});

		try {
			return plannings.map((planning) => {
				return PlanningMapper.MapTimetableByPlanningToDto(planning);
			});
		} catch (error) {
			throw new Error();
			// Renvoyer une erreur
		}
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<PlanningTimetableDto | null> {
		const result = await Planning.findByPk(id ,{
            include: [{ model: Activity, include: [Holiday, Appointment] }, Timetable],
            nest: true
        });
		if (result === null) throw new NotFoundError("Planning not found");
		return PlanningMapper.MapTimetableByPlanningToDto(result);
	}


	async create(planningTimetable: Partial<PlanningTimetableDto>): Promise<PlanningTimetableDto> {

        const t = await sequelize.transaction();

        try {
            const newTimetable = await Timetable.create(
                {
                    timetables: planningTimetable.timetables
                },
				{
					transaction: t,
				}
            );

            const newPlanning = await Planning.create(
                {
                    start_validity: planningTimetable.start_validity,
                    end_validity: planningTimetable.end_validity,
                    id_activity: planningTimetable.id_activity,
                },
				{
					transaction: t,
				}
            );
            const result: PlanningTimetableDto = {
                start_validity: newPlanning.start_validity,
                end_validity: newPlanning.end_validity,
                id_activity: newPlanning.id_activity,
                timetables: newPlanning.timetables,
                id_planning: newPlanning.id_planning
            }

            await t.commit();
			return result;
        } catch (error) {
            await t.rollback();
			throw error;
        }
	}


    // TODO update panning timetable
	/**
	 *
	 * @param planning
	 */
	async update(
		planning: Planning,
		id_planing: number
	): Promise<boolean | number> {
		return Planning.update(planning, {
			where: { id_activity: id_planing },
		}).then((data: Array<boolean | number>) => {
			return data[0];
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Planning.destroy({ where: { id_planning: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
