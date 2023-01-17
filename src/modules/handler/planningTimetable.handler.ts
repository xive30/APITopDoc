import { time } from "console";
import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { PlanningTimetableDto } from "../Data/Dto/planning.Dto";


export class PlanningTimetableHandler {
	private planningService: IService<PlanningTimetableDto>;

	constructor(planningService: IService<PlanningTimetableDto>) {
		this.planningService = planningService;
	}

	getplannings = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	getPlanningById = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.findById(
				parseInt(req.params.id)
			);
			if (result === null) {
				return res.status(404).send();
			}


			function diffDates(timetable_start: string, timetable_end: string) {
				const start = new Date("1970-01-01 " + timetable_start);
				const end = new Date("1970-01-01 " + timetable_end );
				// Convertir les chaînes de caractères en instances de Date
			
				// Obtenir la différence en millisecondes
				const diff = end.getTime() - start.getTime();
			
				// Convertir la différence en minutes
				const diffInMinutes = diff / (1000 * 60);

				return diffInMinutes;
			}

			function substractTimezone(timeWithTimezone: Date) {
				let timeWithTz = new Date("1970-01-01 " + timeWithTimezone);
				let timeWithoutTz = new Date();
				timeWithoutTz.setUTCHours(timeWithTz.getUTCHours(), timeWithTz.getUTCMinutes(), timeWithTz.getUTCSeconds(), timeWithTz.getUTCMilliseconds());
				return timeWithoutTz;
			}

			result.timetables?.map((timetable) => {
				const workhour = diffDates(((timetable.timetable_start)).toLocaleString(), (timetable.timetable_end).toLocaleString())
				const nbCreneaux = workhour / timetable.duration;
				console.log( `les horaires pour ${timetable.td_day} sont de ${workhour} minutes`);
				console.log(`le nombre de crénaux est de ${nbCreneaux} de ${timetable.duration} minutes`);

				let creneauxTab: any[] = [];

                    for(let i = 0 ; i < nbCreneaux; i++){
                        creneauxTab.push( new Date(substractTimezone(timetable.timetable_start).getTime() + (timetable.duration * 60 * 1000) * i).toLocaleTimeString())
                    }
                    creneauxTab.push( substractTimezone(timetable.timetable_end).toLocaleTimeString() )
					console.log(creneauxTab);
					
                    // return {name: timetable.td_day, minutes: workhour, nbCrenaux: nbCreneaux, creneaux: crenauxTab}

			});
			


			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	createPlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updatePlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.update(req.body, parseInt(req.params.id));
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deletePlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Planning avec horaires supprimé" : "Planning avec horaires Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
