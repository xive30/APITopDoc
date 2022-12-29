import { Router } from "express";
import { timetableHandler } from "~/injection";

export const timetableRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Timetable
 *      description: Gestion des routes dédié aux horaires des Praticiens
 */

/**
 * @openapi
 * /api/v1/timetables:
 *      get:
 *          tags: [Timetable]
 *          description: liste des horaires
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
timetableRouter.get("/", timetableHandler.getTimetables);

/**
 * @openapi
 * /api/v1/timetables/{id}:
 *  get:
 *      tags: [Timetable]
 *      description: Trouver un horaire par son Id
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
timetableRouter.get("/:id", timetableHandler.getTimetableById);

/**
 * @openapi
 * /api/v1/timetables:
 *  post:
 *      tags: [Timetable]
 *      description: Crée un horaire
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
timetableRouter.post("/", timetableHandler.createTimetable);

/**
 * @openapi
 * /api/v1/timetables/{id}:
 *  put:
 *      tags: [Timetable]
 *      description: Modifier un horaire
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
timetableRouter.put("/:id", timetableHandler.updateTimetable);

/**
 * @openapi
 * /api/v1/timetables/{id}:
 *  delete:
 *      tags: [Timetable]
 *      description: Supprimer un horaire
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
timetableRouter.delete("/:id", timetableHandler.deleteTimetable);
