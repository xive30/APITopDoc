import { body, param, query, ValidationChain } from "express-validator";

export const personneValidators = (method: string): ValidationChain[] => {
	switch (method) {
		case "findAll": {
			return [
				query("personneNom", "invalid filter").optional().isLength({ max: 50 }),
				query("personneNom", "Only one value can be sent").not().isArray(),
				query("personnePrenom", "invalid filter")
					.optional()
					.isLength({ max: 50 }),
				query("personnePrenom", "Only one value can be sent").not().isArray(),
				query("email", "invalid email").optional().isEmail(),
				query("email", "Only one value can be sent").not().isArray(),
			];
		}

		case "findOrDelete": {
			return [param("id", "id not valid").exists().isNumeric()];
		}

		case "update": {
			return [
				body("personneNom", "doesn't exists").exists(),
				body("personneNom", "too long (max 50)").isLength({ max: 50 }),
				body("personnePrenom", "doesn't exists").exists(),
				body("personneNom", "too long (max 50)").isLength({ max: 50 }),
				body("email", "Invalid email").exists().isEmail(),
			];
		}

		default:
			return [];
	}
};



// A AJOUTER DANS ROUTER
/**
import { validate } from "../../api/middlewares/validation.global";
import { personHandler } from "../../inject";
import { personneValidators } from "./personne.validator";

export const personneRouter = Router();

personneRouter.get('/', personneValidators('findAll'), validate, personHandler.findAll);
*/
