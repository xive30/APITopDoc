import { Router } from "express";
import { holidayHandler } from "~/injection";

export const holidayRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Holiday
 *      description: Gestion des routes dédié aux Vacances des Praticiens
 */

/**
 * @openapi
 * /api/v1/holidays:
 *      get:
 *          tags: [Holiday]
 *          description: liste des vacances
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
holidayRouter.get("/", holidayHandler.getHolidays);

/**
 * @openapi
 * /api/v1/holidays/{id}:
 *  get:
 *      tags: [Holiday]
 *      description: Trouver un temps de vacances par son Id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
holidayRouter.get("/:id", holidayHandler.getHolidayById);

/**
 * @openapi
 * /api/v1/holidays:
 *  post:
 *      tags: [Holiday]
 *      description: Crée un temps de vacances
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"json à définir": "json à définir",}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
holidayRouter.post("/", holidayHandler.createHoliday);

/**
 * @openapi
 * /api/v1/holidays/{id}:
 *  put:
 *      tags: [Holiday]
 *      description: Modifier un temps de vacances
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: formData
 *         default: {"json à définir": "json à définir",}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
holidayRouter.put("/:id", holidayHandler.updateHoliday);

/**
 * @openapi
 * /api/v1/holidays/{id}:
 *  delete:
 *      tags: [Holiday]
 *      description: Supprimer un temps de vacances
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
holidayRouter.delete("/:id", holidayHandler.deleteHoliday);
